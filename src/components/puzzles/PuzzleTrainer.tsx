import React, { useState, useEffect, useRef } from 'react';
import { Chess, Square } from 'chess.js';
import { ChessBoard, BoardTheme } from '../chess/ChessBoard';
import { PuzzleData } from '../../types/chess';
import { useAuth } from '../../context/AuthContext';
import { usePuzzles } from '../../context/PuzzleContext';
import { chessAudio } from '../../utils/chessAudio';
import {
  Flame,
  CheckCircle,
  XCircle,
  ArrowRight,
  Shuffle,
  Calendar,
  Search,
  Filter,
  Layers,
  Sparkles,
  HelpCircle,
  RotateCcw,
  FastForward,
  Eye,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { logger } from '../../context/arena-init';

export const PuzzleTrainer: React.FC = () => {
  const { user, updateRating, completeDailyPuzzle } = useAuth();
  const { getPuzzle, getDailyPuzzle, getRandomPuzzle } = usePuzzles();

  const [currentPuzzle, setCurrentPuzzle] = useState<PuzzleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchId, setSearchId] = useState<string>('');
  const [selectedTheme, setSelectedTheme] = useState<string>('All');
  const [selectedRatingRange, setSelectedRatingRange] = useState<string>('All');
  const [boardTheme, setBoardTheme] = useState<BoardTheme>('classic');
  const [trainerMode, setTrainerMode] = useState<'practice' | 'rush_3min' | 'survival'>('practice');
  const [rushTimeLeft, setRushTimeLeft] = useState<number>(180);
  const [rushScore, setRushScore] = useState<number>(0);
  const [isRushActive, setIsRushActive] = useState<boolean>(false);
  const [autoAdvance, setAutoAdvance] = useState<boolean>(true);

  // Active puzzle game instance & board FEN
  const [puzzleFen, setPuzzleFen] = useState<string>(currentPuzzle.fen);
  const [puzzleLastMove, setPuzzleLastMove] = useState<{ from: Square; to: Square } | null>(null);
  const [puzzleKey, setPuzzleKey] = useState<number>(1);
  const [moveIndex, setMoveIndex] = useState<number>(0);
  const [status, setStatus] = useState<'solving' | 'correct' | 'failed' | 'skipped'>('solving');
  const [hintUsed, setHintUsed] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(user?.stats.puzzleStreak || 0);
  const [isBotResponding, setIsBotResponding] = useState<boolean>(false);

  const chessRef = useRef<Chess>(new Chess(currentPuzzle.fen));

  const tacticalThemes = [
    'All',
    'Fork',
    'Pin',
    'Discovered Attack',
    'Skewer',
    'Elephant Bishop',
    'Smothered Mate',
    'Back Rank',
    'Mate in 1',
    'Mate in 2',
    'Mate in 3',
    'Decoy',
    'Deflection',
    'Sacrifice',
    'Endgame',
  ];

  const ratingRanges = [
    { label: 'All Ratings (800 - 2650+)', min: 0, max: 9999 },
    { label: 'Beginner (800 - 999)', min: 800, max: 999 },
    { label: 'Intermediate (1000 - 1599)', min: 1000, max: 1599 },
    { label: 'Advanced (1600 - 1999)', min: 1600, max: 1999 },
    { label: 'Master / GM (2000+)', min: 2000, max: 9999 },
  ];

  // Rush countdown
  useEffect(() => {
    loadDaily();
  }, []);

  const loadDaily = async () => {
    setLoading(true);
    const p = await getDailyPuzzle();
    if (p) loadPuzzle(p);
    setLoading(false);
  };

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    if (isRushActive && rushTimeLeft > 0) {
      timer = setInterval(() => {
        setRushTimeLeft((t) => {
          if (t <= 1) {
            setIsRushActive(false);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRushActive, rushTimeLeft]);

  const loadPuzzle = (p: PuzzleData) => {
    setCurrentPuzzle(p);
    chessRef.current = new Chess(p.fen);
    setPuzzleFen(p.fen);
    setPuzzleLastMove(null);
    setPuzzleKey((k) => k + 1);
    setMoveIndex(0);
    setStatus('solving');
    setHintUsed(false);
    setIsBotResponding(false);
  };

  const handleNextPuzzle = async (targetDifficulty?: number) => {
    setLoading(true);
    const p = await getRandomPuzzle(targetDifficulty ? targetDifficulty - 100 : 800, targetDifficulty ? targetDifficulty + 100 : 2650);
    if (p) loadPuzzle(p);
    setLoading(false);
  };

  const handleSkipPuzzle = () => {
    if (!currentPuzzle) return;
    setStatus('skipped');
    setStreak(0);

    // Play all solution moves on the chess instance to show the resulting tactical position
    try {
      const tempChess = new Chess(currentPuzzle.fen);
      for (const m of currentPuzzle.solution) {
        try {
          tempChess.move(m);
        } catch (err) {
          if (m.length >= 4) {
            try {
              tempChess.move({
                from: m.slice(0, 2),
                to: m.slice(2, 4),
                promotion: m.length > 4 ? m[4] : undefined,
              });
            } catch {}
          }
        }
      }
      chessRef.current = tempChess;
      setPuzzleFen(tempChess.fen());
    } catch (e) {
      logger.error('Error revealing solution moves:', e);
    }
  };

  const getFormattedSolutionMoves = () => {
    const moves: { num: number; white: string; black?: string }[] = [];
    const isWhite = currentPuzzle.toMove === 'w';
    let moveNum = 1;
    let idx = 0;

    if (!isWhite) {
      moves.push({
        num: moveNum,
        white: '...',
        black: currentPuzzle.solution[0],
      });
      moveNum++;
      idx = 1;
    }

    while (idx < currentPuzzle.solution.length) {
      const w = currentPuzzle.solution[idx];
      const b = idx + 1 < currentPuzzle.solution.length ? currentPuzzle.solution[idx + 1] : undefined;
      moves.push({
        num: moveNum,
        white: w,
        black: b,
      });
      moveNum++;
      idx += 2;
    }
    return moves;
  };

  const handleSearchJump = async (e: React.FormEvent) => {
    e.preventDefault();
    const idNum = parseInt(searchId, 10);
    if (!isNaN(idNum)) {
      setLoading(true);
      const found = await getPuzzle(idNum);
      if (found) loadPuzzle(found);
      setSearchId('');
      setLoading(false);
    }
  };

  // Player makes move
  const handlePlayerMove = (move: { san: string; from: string; to: string; promotion?: string }) => {
    if (!currentPuzzle || status !== 'solving' || isBotResponding) return;

    const expectedMove = currentPuzzle.solution[moveIndex];
    const uciMove = `${move.from}${move.to}`.toLowerCase();
    const isCorrect =
      move.san === expectedMove ||
      uciMove === expectedMove.toLowerCase() ||
      expectedMove.toLowerCase().startsWith(uciMove);

    if (isCorrect) {
      // Execute move on internal chess instance
      try {
        const moveRes = chessRef.current.move({
          from: move.from,
          to: move.to,
          promotion: move.promotion || 'q',
        });
        if (moveRes) {
          setPuzzleFen(chessRef.current.fen());
          setPuzzleLastMove({ from: move.from as Square, to: move.to as Square });
        }
      } catch (err) {
        logger.error('Chess move error:', err);
      }

      const nextPlayerIdx = moveIndex + 1;

      // Check if puzzle has opponent bot response
      if (nextPlayerIdx < currentPuzzle.solution.length) {
        const botMove = currentPuzzle.solution[nextPlayerIdx];
        setIsBotResponding(true);

        // Bot makes its move after 450ms
        setTimeout(() => {
          try {
            // Play bot move (either SAN like 'Qxe4' or UCI)
            const isCapture = botMove.includes('x');
            const botRes = chessRef.current.move(botMove);
            if (botRes) {
              setPuzzleFen(chessRef.current.fen());
              setPuzzleLastMove({ from: botRes.from, to: botRes.to });
            }
            if (isCapture) {
              chessAudio.playCapture();
            } else {
              chessAudio.playMove(true);
            }
          } catch (e) {
            // fallback UCI
            try {
              if (botMove.length >= 4) {
                const botRes = chessRef.current.move({
                  from: botMove.slice(0, 2),
                  to: botMove.slice(2, 4),
                  promotion: botMove.length > 4 ? botMove[4] : undefined,
                });
                if (botRes) {
                  setPuzzleFen(chessRef.current.fen());
                  setPuzzleLastMove({ from: botRes.from, to: botRes.to });
                }
                chessAudio.playMove(true);
              }
            } catch {}
          }

          setIsBotResponding(false);
          const nextIdx = nextPlayerIdx + 1;
          setMoveIndex(nextIdx);

          // If bot move was the final move in solution
          if (nextIdx >= currentPuzzle.solution.length) {
            finishPuzzleSuccess();
          }
        }, 500);
      } else {
        // Solved!
        setMoveIndex(nextPlayerIdx);
        finishPuzzleSuccess();
      }
    } else {
      // Failed move
      chessAudio.playError();
      setStatus('failed');
      setStreak(0);
      updateRating('puzzle', -4);
      if (trainerMode === 'survival' && isRushActive) {
        setIsRushActive(false);
      }
    }
  };

  const finishPuzzleSuccess = async () => {
    if (!currentPuzzle) return;
    chessAudio.playVictory();
    setStatus('correct');
    const newStreak = streak + 1;
    setStreak(newStreak);
    // User requested: puzzle difficulty should increase by 4 elo every time you get one right
    updateRating('puzzle', +4);

    // Track Daily Puzzle Completion
    const daily = await getDailyPuzzle();
    if (daily && currentPuzzle.id === daily.id) {
      completeDailyPuzzle(currentPuzzle.id);
    }

    if (isRushActive) {
      setRushScore((s) => s + 1);
    }

    try {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#ef4444', '#fbbf24']
      });
    } catch {}

    // Auto advance if option selected or in rush mode with +4 Elo difficulty
    if (autoAdvance || isRushActive) {
      setTimeout(() => {
        handleNextPuzzle(currentPuzzle.rating + 4);
      }, 1400);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-6 space-y-6">
      {/* Top Header Banner in Immersive Red & Blue */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-[#0c1427] via-[#0b1021] to-[#1f0f1e] border border-blue-500/30 shadow-[0_10px_35px_rgba(37,99,235,0.15)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 text-xs font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400 tracking-wider">
            <Sparkles size={14} className="text-amber-400" />
            Grandmaster Tactical Academy • 5,000+ FIDE Puzzles
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white font-cinzel mt-1">
            Tactical Puzzle Trainer
          </h1>
          <p className="text-xs text-slate-300 max-w-xl mt-1">
            Sharpen your Elephant Bishop diagonals, Royal Knight forks, pins, and checkmate patterns against an automated opponent engine.
          </p>
        </div>

        {/* User Tactical Stats */}
        <div className="relative z-10 flex items-center gap-3 w-full lg:w-auto">
          <div className="flex-1 lg:flex-none p-3.5 rounded-2xl bg-[#080d1a]/90 border border-blue-500/30 text-center min-w-[105px]">
            <span className="text-[10px] font-bold uppercase text-slate-400 block">Puzzle Rating</span>
            <strong className="text-base font-black text-blue-400 font-mono">
              ⚡ {user?.stats.puzzle || 1740}
            </strong>
          </div>

          <div className="flex-1 lg:flex-none p-3.5 rounded-2xl bg-[#080d1a]/90 border border-red-500/30 text-center min-w-[105px]">
            <span className="text-[10px] font-bold uppercase text-slate-400 block">Solve Streak</span>
            <strong className="text-base font-black text-red-400 flex items-center justify-center gap-1 font-mono">
              <Flame size={15} className="animate-pulse" /> {streak}
            </strong>
          </div>

          <div className="flex-1 lg:flex-none p-3.5 rounded-2xl bg-[#080d1a]/90 border border-purple-500/30 text-center min-w-[105px]">
            <span className="text-[10px] font-bold uppercase text-slate-400 block">Library</span>
            <strong className="text-base font-black text-amber-300 font-mono">
              5,120+
            </strong>
          </div>
        </div>
      </div>

      {/* Filter & Navigation Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Search Jump by ID */}
        <form onSubmit={handleSearchJump} className="relative">
          <Search className="absolute left-3.5 top-3 text-blue-400" size={15} />
          <input
            type="number"
            min="1"
            max="5120"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="Jump to Puzzle ID (1 - 5120)..."
            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#0c1222] border border-blue-500/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
          />
        </form>

        {/* Theme Category Filter */}
        <div className="relative">
          <Layers className="absolute left-3 top-2.5 text-blue-400" size={15} />
          <select
            value={selectedTheme}
            onChange={(e) => {
              setSelectedTheme(e.target.value);
              handleNextPuzzle();
            }}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#0c1222] border border-blue-500/30 text-xs text-slate-100 focus:outline-none focus:border-blue-400"
          >
            {tacticalThemes.map((th) => (
              <option key={th} value={th}>
                {th === 'All' ? 'All Tactical Themes (5000+)' : `Theme: ${th}`}
              </option>
            ))}
          </select>
        </div>

        {/* Rating Range Filter */}
        <div className="relative">
          <Filter className="absolute left-3 top-2.5 text-red-400" size={15} />
          <select
            value={selectedRatingRange}
            onChange={(e) => {
              setSelectedRatingRange(e.target.value);
              handleNextPuzzle();
            }}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#0c1222] border border-red-500/30 text-xs text-slate-100 focus:outline-none focus:border-red-400"
          >
            {ratingRanges.map((r) => (
              <option key={r.label} value={r.label}>
                {r.label}
              </option>
            ))}
          </select>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={loadDaily}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#111a30] hover:bg-[#162242] border border-blue-500/40 text-xs font-bold text-blue-300 transition-colors shadow-sm"
          >
            <Calendar size={14} className="text-blue-400" />
            Daily Puzzle
          </button>
          <button
            onClick={() => handleNextPuzzle()}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white text-xs font-bold transition-all shadow-lg active:scale-95 border border-blue-400/40"
          >
            <Shuffle size={14} />
            Next Puzzle
          </button>
        </div>
      </div>

      {/* Main Interactive Solver Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Chessboard */}
        <div className="lg:col-span-7 flex flex-col items-center">
          {loading ? (
             <div className="w-full max-w-[540px] aspect-square rounded-2xl bg-[#0a0d14] border-4 border-slate-800 flex flex-col items-center justify-center space-y-4">
                <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Loading Tactical Position...</span>
             </div>
          ) : (
            <ChessBoard
              key={`puzzle-${puzzleKey}`}
              initialFen={puzzleFen}
              lastMoveHighlight={puzzleLastMove}
              orientation={currentPuzzle?.toMove || 'w'}
              playerColor={currentPuzzle?.toMove || 'w'}
              customTheme={boardTheme}
              onMove={handlePlayerMove}
              interactive={status === 'solving' && !isBotResponding}
            />
          )}
        </div>

        {/* Puzzle Details & Controls Sidebar */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#0c1427] to-[#120e1e] border border-blue-500/30 shadow-2xl space-y-4">
            {/* Header info */}
            {!currentPuzzle ? (
              <div className="h-48 flex items-center justify-center">
                <span className="text-slate-500 text-xs italic">Syncing with Arena Cloud...</span>
              </div>
            ) : (
              <>
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider font-mono">
                      Tactical Position #{currentPuzzle.id} / 5,120
                    </span>
                    <h2 className="text-lg font-extrabold text-white font-cinzel">
                      {currentPuzzle.title}
                    </h2>
                  </div>

                  <span className="px-3 py-1 rounded-xl text-xs font-black bg-gradient-to-r from-blue-900/60 to-red-950/60 border border-blue-400/40 text-blue-300 shadow-md">
                    ⭐ {currentPuzzle.rating} Elo
                  </span>
                </div>

                {/* Instruction */}
                <div className="p-4 rounded-2xl bg-[#080d1a] border border-slate-800">
                  <div className="text-xs font-bold text-slate-200 mb-1 flex items-center gap-2">
                    <span
                      className={`w-3.5 h-3.5 rounded-full border border-slate-400 ${
                        currentPuzzle.toMove === 'w' ? 'bg-white' : 'bg-slate-950'
                      }`}
                    />
                    <span className="text-blue-200">
                      {currentPuzzle.toMove === 'w' ? 'White' : 'Black'} to move & strike
                    </span>
                    {isBotResponding && (
                      <span className="ml-auto text-[10px] text-amber-400 font-mono animate-pulse">
                        Opponent responding...
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{currentPuzzle.description}</p>
                </div>

                {/* Themes Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {currentPuzzle.themes.map((th, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#10172a] text-blue-200 border border-blue-500/30"
                    >
                      {th}
                    </span>
                  ))}
                </div>
              </>
            )}

            {/* Status Feedback */}
            {status === 'correct' && currentPuzzle && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/90 to-[#0b2818] border-2 border-emerald-500/80 text-center space-y-2 shadow-lg">
                <div className="flex items-center justify-center gap-2 text-emerald-300 font-extrabold text-sm font-cinzel">
                  <CheckCircle size={20} /> Brilliant Move! Position Mastered.
                </div>
                <p className="text-xs text-emerald-200 font-semibold">
                  +4 Puzzle Elo Gained • Next Puzzle Difficulty: {currentPuzzle.rating + 4} Elo • Win Streak: {streak} 🔥
                </p>
                <button
                  onClick={() => handleNextPuzzle(currentPuzzle.rating + 4)}
                  className="w-full py-2.5 mt-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
                >
                  <span>Next Tactical Puzzle (+4 Elo)</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            )}

            {status === 'failed' && currentPuzzle && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/90 to-[#2e0e18] border-2 border-red-500/80 text-center space-y-2 shadow-lg">
                <div className="flex items-center justify-center gap-2 text-red-300 font-extrabold text-sm">
                  <XCircle size={20} /> Inaccurate Move
                </div>
                <p className="text-xs text-red-200">
                  That move gives the opponent counterplay. Try again or view the correct solution line!
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => loadPuzzle(currentPuzzle)}
                    className="flex-1 py-2 rounded-xl bg-[#161c2e] hover:bg-[#1e263d] text-slate-200 text-xs font-bold transition-colors border border-slate-700"
                  >
                    Retry Position
                  </button>
                  <button
                    onClick={handleSkipPuzzle}
                    className="flex-1 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-500 hover:to-red-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <Eye size={14} />
                    <span>Skip & View Line</span>
                  </button>
                </div>
              </div>
            )}

            {/* Skipped / Correct Line Revealed State */}
            {status === 'skipped' && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/90 to-[#281b0a] border-2 border-amber-500/80 space-y-3 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber-300 font-extrabold text-sm font-cinzel">
                    <Sparkles size={18} className="text-amber-400" />
                    Correct Winning Line
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    Solution Revealed
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#0a0f1d] border border-amber-500/30 space-y-2">
                  <div className="text-[11px] font-bold text-slate-300">
                    Master Move Sequence ({currentPuzzle.solution.length} {currentPuzzle.solution.length === 1 ? 'move' : 'moves'}):
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
                    {getFormattedSolutionMoves().map((m) => (
                      <span key={m.num} className="inline-flex items-center gap-1.5 bg-[#141b2e] px-2.5 py-1 rounded-lg border border-slate-700">
                        <span className="text-slate-400 font-bold">{m.num}.</span>
                        <span className="font-extrabold text-amber-300">{m.white}</span>
                        {m.black && <span className="font-extrabold text-blue-300">{m.black}</span>}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-400 pt-1.5 border-t border-slate-800 leading-relaxed">
                    💡 {currentPuzzle.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => loadPuzzle(currentPuzzle)}
                    className="flex-1 py-2.5 rounded-xl bg-[#161c2e] hover:bg-[#1e263d] text-slate-200 text-xs font-bold transition-colors border border-slate-700 flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw size={14} />
                    <span>Try Again</span>
                  </button>
                  <button
                    onClick={() => handleNextPuzzle()}
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white text-xs font-black transition-all shadow-lg active:scale-95 border border-blue-400/40 flex items-center justify-center gap-1.5"
                  >
                    <span>Next Puzzle</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            )}

            {/* Hint & Solution Assistance */}
            {status === 'solving' && (
              <div className="pt-2 border-t border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setHintUsed(!hintUsed)}
                    className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-semibold"
                  >
                    <HelpCircle size={15} />
                    {hintUsed ? 'Hide Hint' : 'Need a Hint?'}
                  </button>

                  <button
                    onClick={handleSkipPuzzle}
                    className="flex items-center gap-1 text-xs text-slate-400 hover:text-amber-400 transition-colors font-medium"
                  >
                    <FastForward size={14} />
                    <span>Skip Puzzle</span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={autoAdvance}
                      onChange={(e) => setAutoAdvance(e.target.checked)}
                      className="accent-amber-500"
                    />
                    <span>Auto-advance on solve</span>
                  </label>
                </div>
              </div>
            )}

            {hintUsed && (
              <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-blue-200">
                💡 <strong>Grandmaster Hint:</strong> Look for {currentPuzzle.themes.join(' or ')} on move 1: <code className="text-amber-300 font-mono font-bold">{currentPuzzle.solution[0]}</code>
              </div>
            )}

            {/* Board Theme */}
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-semibold">Board Theme</span>
              <div className="flex gap-1">
                {(['classic', 'banyan_birch', 'gold_silver', 'crimson_sapphire'] as BoardTheme[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setBoardTheme(t)}
                    className={`px-2 py-1 text-[10px] font-bold rounded-lg ${
                      boardTheme === t
                        ? 'bg-amber-500 text-black font-extrabold'
                        : 'bg-[#080d1a] text-slate-400 border border-slate-800'
                    }`}
                  >
                    {t === 'classic' ? 'Classic' : t === 'banyan_birch' ? 'Banyan' : t === 'gold_silver' ? 'Gold' : 'Crimson'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
