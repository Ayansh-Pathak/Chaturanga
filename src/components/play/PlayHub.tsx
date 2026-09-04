import React, { useState, useEffect, useRef } from 'react';
import { Chess, Square } from 'chess.js';
import { ChessBoard, BoardTheme } from '../chess/ChessBoard';
import { useAuth } from '../../context/AuthContext';
import { GameReviewModal } from '../analysis/GameReviewModal';
import {
  Bot,
  Users,
  RotateCcw,
  Clock,
  Sparkles,
  Sliders,
  BookOpen,
  ShieldAlert,
  HelpCircle,
  Radio,
  Globe,
  X,
  Search,
  Zap,
  Loader2,
  Flame
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { logger } from '../../context/arena-init';

// Chaturanga Logo for Computer Bot avatar
const CHATURANGA_LOGO_AVATAR = "/chaturanga-crown.png";

export const PlayHub: React.FC = () => {
  const { user, updateRating, addGameRecord } = useAuth();

  const [mode, setMode] = useState<'bot' | 'local' | 'online'>('bot');
  const [botElo, setBotElo] = useState<number>(1500);
  const [boardTheme, setBoardTheme] = useState<BoardTheme>('classic');
  const [gameKey, setGameKey] = useState<number>(1);
  const [moveHistory, setMoveHistory] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<string | null>(null);
  const [eloChangeMsg, setEloChangeMsg] = useState<string | null>(null);
  const [gameResult, setGameResult] = useState<'1-0' | '0-1' | '1/2-1/2' | '*'>('*');
  const [myColor, setMyColor] = useState<'w' | 'b'>('w');
  const [currentFen, setCurrentFen] = useState<string>('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
  const [lastMoveHighlight, setLastMoveHighlight] = useState<{ from: Square; to: Square } | null>(null);
  const [lastPgn, setLastPgn] = useState<string>('');
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);
  const [isBotThinking, setIsBotThinking] = useState<boolean>(false);
  const [isMatchmaking, setIsMatchmaking] = useState<boolean>(false);
  const [matchmakingSearchSeconds, setMatchmakingSearchSeconds] = useState<number>(0);
  const [matchmakingStatusText, setMatchmakingStatusText] = useState<string>('Searching online pool...');
  const matchmakingAbortRef = useRef<AbortController | null>(null);
  const [onlineOpponent, setOnlineOpponent] = useState<{name: string, rating: number, country: string, avatar: string} | null>(null);

  // Time control settings
  const [selectedTimeControl, setSelectedTimeControl] = useState<string>('5+0');
  const [customMinutes, setCustomMinutes] = useState<number>(5);
  const [customIncrement, setCustomIncrement] = useState<number>(3);
  const [isCustomTime, setIsCustomTime] = useState<boolean>(false);

  // Clocks
  const [whiteTime, setWhiteTime] = useState<number>(300);
  const [blackTime, setBlackTime] = useState<number>(300);
  const [increment, setIncrement] = useState<number>(0);
  const [isClockRunning, setIsClockRunning] = useState<boolean>(false);
  const [currentTurn, setCurrentTurn] = useState<'w' | 'b'>('w');

  // Internal chess instance for bot calculation
  const chessRef = useRef<Chess>(new Chess());

  // Setup time on time control change or reset
  useEffect(() => {
    let initialSecs = 300;
    let inc = 0;

    if (isCustomTime) {
      initialSecs = Math.max(1, customMinutes) * 60;
      inc = customIncrement;
    } else {
      switch (selectedTimeControl) {
        case '1+0':
          initialSecs = 60;
          inc = 0;
          break;
        case '3+0':
          initialSecs = 180;
          inc = 0;
          break;
        case '3+2':
          initialSecs = 180;
          inc = 2;
          break;
        case '5+0':
          initialSecs = 300;
          inc = 0;
          break;
        case '5+3':
          initialSecs = 300;
          inc = 3;
          break;
        case '10+0':
          initialSecs = 600;
          inc = 0;
          break;
        case '15+10':
          initialSecs = 900;
          inc = 10;
          break;
        case '30+0':
          initialSecs = 1800;
          inc = 0;
          break;
      }
    }

    setWhiteTime(initialSecs);
    setBlackTime(initialSecs);
    setIncrement(inc);
  }, [selectedTimeControl, isCustomTime, customMinutes, customIncrement, gameKey]);

  // Clock countdown timer
  useEffect(() => {
    if (!isClockRunning || gameStatus) return;

    const timer = setInterval(() => {
      if (currentTurn === 'w') {
        setWhiteTime((prev) => {
          if (prev <= 1) {
            handleGameOver({ winner: 'b', reason: 'White ran out of time (Timeout)', pgn: chessRef.current.pgn() });
            return 0;
          }
          return prev - 1;
        });
      } else {
        setBlackTime((prev) => {
          if (prev <= 1) {
            handleGameOver({ winner: 'w', reason: 'Black ran out of time (Timeout)', pgn: chessRef.current.pgn() });
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isClockRunning, currentTurn, gameStatus]);

  // Matchmaking timer effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isMatchmaking) {
      setMatchmakingSearchSeconds(0);
      interval = setInterval(() => {
        setMatchmakingSearchSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      setMatchmakingSearchSeconds(0);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isMatchmaking]);

  // Clean up matchmaking when leaving component
  useEffect(() => {
    return () => {
      if (matchmakingAbortRef.current) {
        matchmakingAbortRef.current.abort();
      }
    };
  }, []);

  const handleCancelMatchmaking = async () => {
    if (matchmakingAbortRef.current) {
      matchmakingAbortRef.current.abort();
      matchmakingAbortRef.current = null;
    }
    setIsMatchmaking(false);
    setMatchmakingStatusText('Matchmaking cancelled.');
    try {
      await fetch('/api/matchmake/cancel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: user?.id || 'guest_user' })
      });
    } catch {
      // no-op
    }
  };

  const handleStartNewGame = () => {
    if (mode === 'online') {
      setIsMatchmaking(true);
      setOnlineOpponent(null);
      setMatchmakingStatusText('Searching for real players (active in last 5m, ±20 Elo)...');

      const tc = isCustomTime ? `${customMinutes}+${customIncrement}` : selectedTimeControl;
      const myRating = user ? user.stats.rapid : 1500;
      const myId = user ? user.id : `player_${Math.random().toString(36).slice(2, 9)}`;
      const myName = user ? user.username : 'Chaturanga Player';
      const myAvatar = user ? user.avatar : '/chaturanga-crown.png';

      const pollMatchmaking = async () => {
        const controller = new AbortController();
        matchmakingAbortRef.current = controller;

        try {
          const res = await fetch('/api/matchmake', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: myId,
              name: myName,
              rating: myRating,
              timeControl: tc,
              avatar: myAvatar,
              country: '🇮🇳'
            }),
            signal: controller.signal
          });

          const data = await res.json();

          if (data.status === 'match') {
            setIsMatchmaking(false);
            setMyColor(data.color as 'w' | 'b');
            setOnlineOpponent(data.opponent);
            resetGameStates();
            try {
              confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
            } catch {}
          } else if (data.status === 'waiting') {
            setMatchmakingStatusText(`Searching pool for Elo ${myRating - 20} – ${myRating + 20} in ${tc}...`);
            // Poll again
            setTimeout(() => {
              if (matchmakingAbortRef.current === controller) {
                pollMatchmaking();
              }
            }, 1000);
          } else if (data.status === 'timeout') {
            setMatchmakingStatusText('Search timed out after 5 minutes. Click retry to search again.');
            setIsMatchmaking(false);
          } else {
            setIsMatchmaking(false);
          }
        } catch (e: unknown) {
          if (e instanceof Error && e.name !== 'AbortError') {
            logger.error('Matchmaking error:', e);
            setIsMatchmaking(false);
          } else if (!(e instanceof Error)) {
             setIsMatchmaking(false);
          }
        }
      };

      pollMatchmaking();
    } else {
      resetGameStates(myColor);
    }
  };

  const resetGameStates = (startingColor: 'w' | 'b' = myColor) => {
    chessRef.current = new Chess();
    setCurrentFen('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    setLastMoveHighlight(null);
    setGameKey((prev) => prev + 1);
    setMoveHistory([]);
    setGameStatus(null);
    setEloChangeMsg(null);
    setGameResult('*');
    setIsClockRunning(false);
    setCurrentTurn('w');
    setIsBotThinking(false);

    if (mode === 'bot' && startingColor === 'b') {
      setTimeout(() => {
        triggerBotMove();
      }, 500);
    }
  };

  // Bot move generation scaled by Elo slider
  const triggerBotMove = () => {
    if (gameStatus || chessRef.current.isGameOver()) return;
    setIsBotThinking(true);

    const thinkTime = Math.min(1500, Math.max(400, 300 + (botElo / 3000) * 800));

    setTimeout(() => {
      try {
        const moves = chessRef.current.moves({ verbose: true });
        if (moves.length === 0) return;

        let selectedMove = moves[0];

        // Elo Heuristics:
        // Lower Elo (<1000): frequent random moves & captures
        // Mid Elo (1000-1800): prefers captures, checks, central moves
        // High Elo (>1800): material evaluation + center dominance + checks
        if (botElo < 900) {
          // Mostly random move
          selectedMove = moves[Math.floor(Math.random() * moves.length)];
        } else if (botElo < 1600) {
          // Prefer captures and checks
          const captures = moves.filter((m) => m.captured || m.san.includes('+'));
          if (captures.length > 0 && Math.random() < 0.7) {
            selectedMove = captures[Math.floor(Math.random() * captures.length)];
          } else {
            selectedMove = moves[Math.floor(Math.random() * moves.length)];
          }
        } else {
          // Evaluate move values (Queen 9, Rook 5, Bishop/Knight 3, Pawn 1)
          const pieceValues: Record<string, number> = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 0 };
          let bestScore = -9999;

          for (const m of moves) {
            let score = 0;
            if (m.captured) {
              score += (pieceValues[m.captured] || 1) * 10 - (pieceValues[m.piece] || 1);
            }
            if (m.san.includes('#')) score += 1000;
            if (m.san.includes('+')) score += 15;
            // Center control
            if (['d4', 'e4', 'd5', 'e5'].includes(m.to)) score += 8;
            if (['c4', 'f4', 'c5', 'f5'].includes(m.to)) score += 4;
            // Add slight randomness proportional to Elo below 3000
            score += Math.random() * ((3000 - botElo) / 200);

            if (score > bestScore) {
              bestScore = score;
              selectedMove = m;
            }
          }
        }

        const moveResult = chessRef.current.move(selectedMove);
        if (moveResult) {
          setMoveHistory((prev) => [...prev, moveResult.san]);
          setCurrentFen(chessRef.current.fen());
          setLastMoveHighlight({ from: moveResult.from, to: moveResult.to });

          const botColor = myColor === 'w' ? 'b' : 'w';
          if (botColor === 'b') {
            setBlackTime((prev) => prev + increment);
            setCurrentTurn('w');
          } else {
            setWhiteTime((prev) => prev + increment);
            setCurrentTurn('b');
          }

          // Check if game over after bot move
          if (chessRef.current.isGameOver()) {
            if (chessRef.current.isCheckmate()) {
              handleGameOver({ winner: botColor, reason: 'Checkmate - Computer won!', pgn: chessRef.current.pgn() });
            } else if (chessRef.current.isDraw()) {
              handleGameOver({ winner: 'draw', reason: 'Draw (Stalemate / 50-move rule)', pgn: chessRef.current.pgn() });
            }
          }
        }
      } catch (err) {
        logger.error('Bot move calculation error:', err);
      } finally {
        setIsBotThinking(false);
      }
    }, thinkTime);
  };

  const handleMoveMade = (move: { from: string; to: string; san: string; promotion?: string }) => {
    if (!isClockRunning) setIsClockRunning(true);
    let successfulMove = false;
    try {
      const res = chessRef.current.move({
        from: move.from,
        to: move.to,
        promotion: move.promotion || 'q',
      });
      if (res) {
        successfulMove = true;
        setCurrentFen(chessRef.current.fen());
        setLastMoveHighlight({ from: move.from as Square, to: move.to as Square });
      }
    } catch {}

    if (!successfulMove) return;
    setMoveHistory((prev) => [...prev, move.san]);

    if (currentTurn === 'w') {
      setWhiteTime((prev) => prev + increment);
      setCurrentTurn('b');
      if (mode === 'bot' && myColor === 'w') {
        triggerBotMove();
      }
    } else {
      setBlackTime((prev) => prev + increment);
      setCurrentTurn('w');
      if (mode === 'bot' && myColor === 'b') {
        triggerBotMove();
      }
    }
  };

  function handleGameOver(result: { winner: 'w' | 'b' | 'draw'; reason: string; pgn: string; isAbort?: boolean }) {
    setIsClockRunning(false);
    setGameStatus(result.reason);
    setLastPgn(result.pgn || chessRef.current.pgn());

    const isWin = result.winner === myColor && !result.isAbort;
    const isLoss = result.winner !== myColor && result.winner !== 'draw' && !result.isAbort;
    const resString = result.isAbort ? '*' : isWin ? (myColor === 'w' ? '1-0' : '0-1') : isLoss ? (myColor === 'w' ? '0-1' : '1-0') : '1/2-1/2';
    setGameResult(resString);

    const tcCategory: 'bullet' | 'blitz' | 'rapid' = (() => {
      const mins = isCustomTime ? customMinutes : (selectedTimeControl === '1+0' ? 1 : selectedTimeControl.startsWith('3+') ? 3 : selectedTimeControl.startsWith('5+') ? 5 : selectedTimeControl.startsWith('10+') ? 10 : selectedTimeControl.startsWith('15+') ? 15 : selectedTimeControl.startsWith('30+') ? 30 : 10);
      if (mins <= 2) return 'bullet';
      if (mins <= 5) return 'blitz';
      return 'rapid';
    })();

    if (isWin) {
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch {}
      updateRating(tcCategory, +14);
      setEloChangeMsg('+14 Elo (Win)');
    } else if (isLoss) {
      updateRating(tcCategory, -12);
      setEloChangeMsg('-12 Elo (Loss)');
    } else {
      setEloChangeMsg('0 Elo (Draw/Abort)');
    }

    if (user && !result.isAbort) {
      addGameRecord({
        white: { id: user.id, name: user.username, rating: user.stats[tcCategory] || user.stats.rapid, avatar: user.avatar },
        black: {
          id: mode === 'bot' ? 'bot_computer' : 'local_p2',
          name: mode === 'bot' ? 'Computer' : 'Local Warrior',
          rating: mode === 'bot' ? botElo : 1500,
          avatar: mode === 'bot' ? CHATURANGA_LOGO_AVATAR : '/chaturanga-crown.png',
        },
        result: resString,
        reason: result.reason,
        timeControl: isCustomTime ? `${customMinutes}+${customIncrement}` : selectedTimeControl,
        pgn: result.pgn || chessRef.current.pgn(),
        movesCount: moveHistory.length + 1,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        mode: 'rated',
        ratingChange: isWin ? +14 : isLoss ? -12 : 0,
      });
    }
  };

  const formatClock = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const getBotTitle = (elo: number) => {
    if (elo < 800) return 'Beginner';
    if (elo < 1000) return 'Casual';
    if (elo < 1400) return 'Club Player';
    if (elo < 1800) return 'Intermediate';
    if (elo < 2100) return 'Expert';
    if (elo < 2400) return 'Master';
    if (elo < 2700) return 'Grandmaster';
    return 'Super Grandmaster';
  };

  const timeControlOptions = [
    { id: '1+0', label: '1+0 • Bullet (1m)', category: 'Bullet' },
    { id: '3+0', label: '3+0 • Blitz (3m)', category: 'Blitz' },
    { id: '3+2', label: '3+2 • Blitz (3m + 2s)', category: 'Blitz' },
    { id: '5+0', label: '5+0 • Blitz (5m)', category: 'Blitz' },
    { id: '5+3', label: '5+3 • Blitz (5m + 3s)', category: 'Blitz' },
    { id: '10+0', label: '10+0 • Rapid (10m)', category: 'Rapid' },
    { id: '15+10', label: '15+10 • Rapid (15m + 10s)', category: 'Rapid' },
    { id: '30+0', label: '30+0 • Rapid (30m)', category: 'Rapid' },
    { id: 'custom', label: '⚙️ Custom Time & Increment...', category: 'Custom' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-6 space-y-6">
      {/* Daily Puzzle & Quick Links Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 p-6 rounded-3xl bg-gradient-to-br from-[#0c1427] to-[#160d24] border border-blue-500/30 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Zap size={100} className="text-amber-400" />
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-black text-amber-400 uppercase tracking-widest">
                <Sparkles size={14} />
                Daily Grandmaster Challenge
              </div>
              <h2 className="text-2xl font-black text-white font-cinzel">Daily Tactical Puzzle</h2>
              <p className="text-sm text-slate-400 max-w-md">
                Master today's curated position and build your solving streak. Gain +4 Elo for every success!
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Today's Streak</span>
                  <span className="text-lg font-black text-red-500 flex items-center gap-1">
                    <Flame size={18} /> {user?.stats.puzzleStreak || 0}
                  </span>
                </div>
                <div className="w-px h-8 bg-slate-800" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Status</span>
                  <span className={`text-xs font-black uppercase ${user?.stats.lastPuzzleDate === new Date().toLocaleDateString() ? 'text-emerald-400' : 'text-amber-400 animate-pulse'}`}>
                    {user?.stats.lastPuzzleDate === new Date().toLocaleDateString() ? 'Completed ✓' : 'Unsolved • Play Now'}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                // In a real app we'd navigate to Puzzles tab, here we rely on User clicking Navbar or providing a prop
                window.location.hash = 'puzzles';
                window.location.reload();
              }}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-black text-sm shadow-2xl shadow-blue-600/25 transition-all active:scale-95 border border-blue-400/30"
            >
              Solve Daily Puzzle
            </button>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-gradient-to-br from-[#090e1c] to-[#0c1427] border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-black text-slate-300 uppercase tracking-wider mb-3">Quick Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => { window.location.hash = 'puzzles'; window.location.reload(); }} className="p-3 rounded-xl bg-[#141926] hover:bg-[#1a2133] border border-slate-800 text-xs font-bold text-slate-400 hover:text-blue-400 transition-all text-center">Puzzles</button>
              <button onClick={() => { window.location.hash = 'tournaments'; window.location.reload(); }} className="p-3 rounded-xl bg-[#141926] hover:bg-[#1a2133] border border-slate-800 text-xs font-bold text-slate-400 hover:text-red-400 transition-all text-center">Tournaments</button>
              <button onClick={() => { window.location.hash = 'clubs'; window.location.reload(); }} className="p-3 rounded-xl bg-[#141926] hover:bg-[#1a2133] border border-slate-800 text-xs font-bold text-slate-400 hover:text-amber-400 transition-all text-center">Clubs</button>
              <button onClick={() => { window.location.hash = 'library'; window.location.reload(); }} className="p-3 rounded-xl bg-[#141926] hover:bg-[#1a2133] border border-slate-800 text-xs font-bold text-slate-400 hover:text-emerald-400 transition-all text-center">Library</button>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase">
             <span>v0.9.9 Official</span>
             <span className="text-amber-500/60">FIDE Laws 2026</span>
          </div>
        </div>
      </div>

      {/* Play Controls Topbar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Mode Selector (Bot vs Local) */}
        <div className="md:col-span-4 flex p-1 bg-[#090e1c] rounded-2xl border border-slate-800 shadow-inner">
          <button
            onClick={() => {
              setMode('bot');
              handleStartNewGame();
            }}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-[11px] font-bold transition-all ${
              mode === 'bot'
                ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bot size={15} />
            <span>vs Computer</span>
          </button>
          <button
            onClick={() => {
              setMode('local');
              handleStartNewGame();
            }}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-[11px] font-bold transition-all ${
              mode === 'local'
                ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Users size={15} />
            <span>Pass & Play</span>
          </button>
          <button
            onClick={() => {
              setMode('online');
              handleStartNewGame();
            }}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-[11px] font-bold transition-all ${
              mode === 'online'
                ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Users size={15} />
            <span>Play Online</span>
          </button>
        </div>

        {/* Time Control Selector */}
        <div className="md:col-span-5 flex items-center gap-2 px-3 py-1.5 bg-[#090e1c] rounded-2xl border border-slate-800">
          <Clock size={16} className="text-amber-400 shrink-0" />
          <select
            value={isCustomTime ? 'custom' : selectedTimeControl}
            onChange={(e) => {
              if (e.target.value === 'custom') {
                setIsCustomTime(true);
              } else {
                setIsCustomTime(false);
                setSelectedTimeControl(e.target.value);
              }
              handleStartNewGame();
            }}
            className="w-full bg-transparent text-xs text-white font-bold focus:outline-none cursor-pointer"
          >
            {timeControlOptions.map((opt) => (
              <option key={opt.id} value={opt.id} className="bg-[#090e1c] text-slate-200">
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Restart / Game Review Buttons */}
        <div className="md:col-span-3 flex items-center gap-2">
          <button
            onClick={handleStartNewGame}
            disabled={isMatchmaking}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-2xl bg-[#101b33] hover:bg-[#162444] border border-blue-500/30 text-xs font-bold text-slate-200 transition-colors disabled:opacity-50"
          >
            <RotateCcw size={14} className="text-red-400" />
            <span>{isMatchmaking ? 'Searching...' : 'New Game'}</span>
          </button>

          <button
            onClick={() => setShowReviewModal(true)}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-2xl bg-gradient-to-r from-amber-500/20 to-amber-600/20 hover:from-amber-500/30 hover:to-amber-600/30 border border-amber-500/50 text-xs font-bold text-amber-300 transition-colors"
            title="Analyze match with Stockfish 18"
          >
            <Sparkles size={14} className="text-amber-400" />
            <span className="hidden sm:inline">Review</span>
          </button>
        </div>
      </div>

      {/* Custom Time Control Modal / Expandable Panel */}
      {isCustomTime && (
        <div className="p-4 rounded-2xl bg-[#0c1427] border border-amber-500/40 shadow-xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sliders size={16} className="text-amber-400" />
            <span className="text-xs font-bold text-slate-200">Custom Match Clock:</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <label className="text-xs text-slate-400">Minutes per player:</label>
              <input
                type="number"
                min="1"
                max="180"
                value={customMinutes}
                onChange={(e) => setCustomMinutes(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 px-2.5 py-1 rounded-lg bg-[#141926] border border-slate-700 text-xs text-white font-mono text-center focus:border-amber-400 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <label className="text-xs text-slate-400">Increment (seconds/move):</label>
              <input
                type="number"
                min="0"
                max="60"
                value={customIncrement}
                onChange={(e) => setCustomIncrement(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-16 px-2.5 py-1 rounded-lg bg-[#141926] border border-slate-700 text-xs text-white font-mono text-center focus:border-amber-400 focus:outline-none"
              />
            </div>
          </div>

          <button
            onClick={handleStartNewGame}
            disabled={isMatchmaking}
            className="px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition-all disabled:opacity-50"
          >
            {isMatchmaking ? 'Searching...' : 'Apply & Start'}
          </button>
        </div>
      )}

      {/* Main Board Arena */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Interactive Chess Board & Clocks (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-center space-y-3">
          {/* Black Player Banner & Clock (Computer Bot / Player 2) */}
          <div className="w-full max-w-[540px] flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-[#0c1427] to-[#160d24] border border-blue-500/30 shadow-md">
            <div className="flex items-center gap-3">
              {mode === 'bot' ? (
                <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-amber-400/80 shadow-md flex items-center justify-center bg-black">
                  <img
                    src={CHATURANGA_LOGO_AVATAR}
                    alt="Computer Bot"
                    className="w-full h-full object-cover"
                  />
                  {isBotThinking && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="w-3 h-3 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                </div>
              ) : mode === 'local' || (mode === 'online' && !onlineOpponent && !isMatchmaking) ? (
                <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md bg-black">
                  <img
                    src={CHATURANGA_LOGO_AVATAR}
                    alt="Player 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : mode === 'online' && isMatchmaking ? (
                <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md bg-[#10141e] border border-blue-500/30 flex items-center justify-center">
                  <span className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                </div>
              ) : (
                <img
                  src={onlineOpponent?.avatar || "/chaturanga-crown.png"}
                  alt="Online Opponent"
                  className="w-10 h-10 rounded-xl object-cover ring-1 ring-red-400/60"
                />
              )}

              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5 font-cinzel">
                  {mode === 'bot' ? 'Computer' : mode === 'online' ? (
                    isMatchmaking ? (
                      <span className="animate-pulse text-blue-300">Searching global pool...</span>
                    ) : onlineOpponent ? (
                      <>
                        <span>{onlineOpponent.country}</span>
                        <span>{onlineOpponent.name}</span>
                      </>
                    ) : (
                      `Player 2 (${myColor === 'w' ? 'Black' : 'White'})`
                    )
                  ) : `Player 2 (${myColor === 'w' ? 'Black' : 'White'})`}
                  {mode === 'bot' && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      BOT
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                  <span>⚡ {mode === 'bot' ? botElo : mode === 'online' ? (onlineOpponent ? onlineOpponent.rating : '?') : 1500} Elo</span>
                </div>
              </div>
            </div>

            {/* Top Clock */}
            <div
              className={`px-4 py-1.5 rounded-xl font-mono text-base font-black border transition-all ${
                currentTurn === (myColor === 'w' ? 'b' : 'w') && isClockRunning
                  ? 'bg-red-500/20 text-red-300 border-red-500/80 shadow-md animate-pulse'
                  : 'bg-[#080d1a] text-slate-400 border-slate-800'
              }`}
            >
              {formatClock(myColor === 'w' ? blackTime : whiteTime)}
            </div>
          </div>

          {/* CHESSBOARD */}
          <ChessBoard
            key={`game-${gameKey}`}
            initialFen={currentFen}
            lastMoveHighlight={lastMoveHighlight}
            orientation={myColor}
            playerColor={mode === 'bot' ? myColor : mode === 'online' ? myColor : 'both'}
            customTheme={boardTheme}
            onMove={handleMoveMade}
            onGameOver={handleGameOver}
            interactive={!gameStatus && (!isBotThinking || mode === 'local')}
          />

          {/* White Player Banner & Clock (User) */}
          <div className="w-full max-w-[540px] flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-[#0c1427] to-[#160d24] border border-blue-500/30 shadow-md">
            <div className="flex items-center gap-3">
              <img
                src={
                  user?.avatar || '/chaturanga-crown.png'
                }
                alt="White Player"
                className="w-10 h-10 rounded-xl object-cover ring-1 ring-blue-400/60"
              />
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5 font-cinzel">
                  <span>{user?.countryFlag || '🇮🇳'}</span>
                  <span>{user?.username || `Player 1 (${myColor === 'w' ? 'White' : 'Black'})`}</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-gradient-to-r from-blue-600 to-red-600 text-white font-black">
                    YOU
                  </span>
                </div>
                <span className="text-[10px] text-blue-400 font-mono">
                  ⚡ {user?.stats.rapid || 1650} Elo
                </span>
              </div>
            </div>

            {/* White Clock and Actions */}
            <div className="flex items-center gap-3">
              {!gameStatus && (
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      if (moveHistory.length === 0) {
                        handleGameOver({ winner: 'draw', reason: 'Game aborted', pgn: chessRef.current.pgn(), isAbort: true });
                      } else {
                        handleGameOver({ winner: currentTurn === 'w' ? 'b' : 'w', reason: 'Resignation', pgn: chessRef.current.pgn() });
                      }
                    }}
                    className="p-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/40 border border-red-500/50 text-red-300 transition-colors"
                    title={moveHistory.length === 0 ? "Abort" : "Resign"}
                  >
                    <ShieldAlert size={14} />
                  </button>
                  {moveHistory.length > 0 && (
                    <button
                      onClick={() => handleGameOver({ winner: 'draw', reason: 'Draw by agreement', pgn: chessRef.current.pgn() })}
                      className="p-1.5 rounded-lg bg-slate-500/20 hover:bg-slate-500/40 border border-slate-500/50 text-slate-300 transition-colors"
                      title="Offer Draw"
                    >
                      <HelpCircle size={14} />
                    </button>
                  )}
                </div>
              )}
              <div
                className={`px-4 py-1.5 rounded-xl font-mono text-base font-black border transition-all ${
                  currentTurn === myColor && isClockRunning
                    ? 'bg-blue-500/20 text-blue-300 border-blue-500/80 shadow-md'
                    : 'bg-[#080d1a] text-slate-400 border-slate-800'
                }`}
              >
                {formatClock(myColor === 'w' ? whiteTime : blackTime)}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Computer Bot Elo Slider & Board Customization (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Game Status Banner if completed */}
          {gameStatus && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/90 to-red-950/90 border-2 border-amber-500/80 text-center space-y-2 shadow-2xl">
              <h4 className="text-sm font-black text-amber-300 font-cinzel">Game Concluded</h4>
              <p className="text-xs text-slate-200">{gameStatus}</p>
              {eloChangeMsg && (
                <div className="inline-block px-3 py-1 bg-black/40 rounded-full border border-slate-700/50 mt-1 mb-2">
                  <span className={`text-xs font-black ${eloChangeMsg.startsWith('+') ? 'text-green-400' : eloChangeMsg.startsWith('-') ? 'text-red-400' : 'text-slate-400'}`}>
                    Elo Change: {eloChangeMsg}
                  </span>
                </div>
              )}
              <div className="flex items-center justify-center gap-2 pt-1">
                <button
                  onClick={handleStartNewGame}
                  disabled={isMatchmaking}
                  className="py-1.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold text-xs shadow-md disabled:opacity-50"
                >
                  {isMatchmaking ? 'Searching...' : 'Play Rematch'}
                </button>
                <button
                  onClick={() => setShowReviewModal(true)}
                  className="py-1.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-md flex items-center gap-1"
                >
                  <Sparkles size={13} />
                  <span>Review with Stockfish</span>
                </button>
              </div>
            </div>
          )}

          {/* Computer Bot Elo Slider (Requirement: Only 1 bot named "Computer" with customizable Elo slider and Chaturanga logo) */}
          {mode === 'bot' && (
            <div className="p-5 rounded-2xl bg-gradient-to-b from-[#0c1427] to-[#120e1e] border border-amber-500/40 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg overflow-hidden border border-amber-400">
                    <img src={CHATURANGA_LOGO_AVATAR} alt="Computer" className="w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white font-cinzel">Computer Bot</h3>
                    <div className="text-[10px] text-amber-400 font-semibold">{getBotTitle(botElo)}</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-base font-black text-amber-400 font-mono">{botElo}</span>
                  <span className="text-[10px] text-slate-400 ml-1">Elo</span>
                </div>
              </div>

              {/* Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>400 (Beginner)</span>
                  <span>1500 (Club)</span>
                  <span>3000 (Grandmaster)</span>
                </div>
                <input
                  type="range"
                  min="400"
                  max="3000"
                  step="50"
                  value={botElo}
                  onChange={(e) => {
                    setBotElo(parseInt(e.target.value));
                    handleStartNewGame();
                  }}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              {/* Quick Elo preset chips */}
              <div className="grid grid-cols-4 gap-1.5 pt-1">
                {[
                  { label: '800', val: 800 },
                  { label: '1000', val: 1000 },
                  { label: '1600', val: 1600 },
                  { label: '2400', val: 2400 },
                ].map((preset) => (
                  <button
                    key={preset.val}
                    onClick={() => {
                      setBotElo(preset.val);
                      handleStartNewGame();
                    }}
                    className={`py-1 text-[10px] font-bold rounded-lg transition-all ${
                      botElo === preset.val
                        ? 'bg-amber-500 text-black font-extrabold shadow-sm'
                        : 'bg-[#090e1c] text-slate-300 hover:text-white border border-slate-800'
                    }`}
                  >
                    {preset.label} Elo
                  </button>
                ))}
              </div>

              {/* Side Selection */}
              <div className="pt-2 border-t border-slate-800/80">
                <div className="text-[10px] text-slate-400 font-bold mb-1.5">Play Side:</div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setMyColor('w');
                      resetGameStates('w');
                    }}
                    className={`py-1.5 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      myColor === 'w'
                        ? 'bg-white text-slate-900 shadow-md font-extrabold ring-2 ring-amber-400'
                        : 'bg-[#090e1c] text-slate-300 hover:text-white border border-slate-800'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full bg-white border border-slate-400 inline-block" />
                    <span>White (You First)</span>
                  </button>
                  <button
                    onClick={() => {
                      setMyColor('b');
                      resetGameStates('b');
                    }}
                    className={`py-1.5 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      myColor === 'b'
                        ? 'bg-slate-900 text-white shadow-md font-extrabold ring-2 ring-amber-400 border border-slate-700'
                        : 'bg-[#090e1c] text-slate-300 hover:text-white border border-slate-800'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full bg-slate-900 border border-slate-500 inline-block" />
                    <span>Black (Bot First)</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Move Log History */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-[#0c1427] to-[#120e1e] border border-blue-500/30 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-300">
                PGN Notation (FIDE)
              </h3>
              <span className="text-slate-500 font-mono text-xs">{moveHistory.length} moves</span>
            </div>

            <div className="h-40 overflow-y-auto p-2.5 rounded-xl bg-[#080d1a] border border-slate-800 font-mono text-xs text-slate-300 custom-scrollbar">
              {moveHistory.length === 0 ? (
                <div className="text-slate-500 italic p-3 text-center">
                  Make your first opening move on the board.
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {moveHistory.reduce<React.ReactNode[]>((acc, move, index) => {
                    if (index % 2 === 0) {
                      const moveNum = Math.floor(index / 2) + 1;
                      const nextMove = moveHistory[index + 1];
                      acc.push(
                        <div key={moveNum} className="flex items-center gap-2 py-0.5 border-b border-slate-900">
                          <span className="text-slate-500 text-[11px] w-6">{moveNum}.</span>
                          <span className="font-bold text-blue-300">{move}</span>
                          {nextMove && <span className="font-bold text-red-300">{nextMove}</span>}
                        </div>
                      );
                    }
                    return acc;
                  }, [])}
                </div>
              )}
            </div>
          </div>

          {/* Opening Explorer */}
          <div className="p-4 rounded-2xl bg-gradient-to-b from-[#0c1427] to-[#120e1e] border border-blue-500/30 shadow-xl space-y-2">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <BookOpen size={14} className="text-blue-400" /> Opening Explorer
            </h3>
            <div className="p-2 rounded-xl bg-[#080d1a] border border-slate-800 text-xs">
              <div className="flex justify-between items-center px-2 py-1 bg-slate-900 rounded-md mb-1 text-slate-400">
                <span>Move</span>
                <span>Games / Win %</span>
              </div>
              {moveHistory.length === 0 ? (
                <>
                  <div className="flex justify-between items-center px-2 py-1.5 hover:bg-slate-800 rounded-md cursor-pointer text-slate-300">
                    <span className="font-bold">e4</span>
                    <div className="flex items-center gap-2">
                      <span>42.5M</span>
                      <div className="w-16 h-1.5 bg-red-500 rounded-full overflow-hidden flex"><div className="w-[54%] bg-white"></div></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center px-2 py-1.5 hover:bg-slate-800 rounded-md cursor-pointer text-slate-300">
                    <span className="font-bold">d4</span>
                    <div className="flex items-center gap-2">
                      <span>31.2M</span>
                      <div className="w-16 h-1.5 bg-red-500 rounded-full overflow-hidden flex"><div className="w-[56%] bg-white"></div></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center px-2 py-1.5 hover:bg-slate-800 rounded-md cursor-pointer text-slate-300">
                    <span className="font-bold">Nf3</span>
                    <div className="flex items-center gap-2">
                      <span>15.8M</span>
                      <div className="w-16 h-1.5 bg-red-500 rounded-full overflow-hidden flex"><div className="w-[55%] bg-white"></div></div>
                    </div>
                  </div>
                </>
              ) : moveHistory.length === 1 && moveHistory[0] === 'e4' ? (
                <>
                  <div className="flex justify-between items-center px-2 py-1.5 hover:bg-slate-800 rounded-md cursor-pointer text-slate-300">
                    <span className="font-bold">e5</span>
                    <div className="flex items-center gap-2">
                      <span>18.1M</span>
                      <div className="w-16 h-1.5 bg-red-500 rounded-full overflow-hidden flex"><div className="w-[49%] bg-black"></div></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center px-2 py-1.5 hover:bg-slate-800 rounded-md cursor-pointer text-slate-300">
                    <span className="font-bold">c5</span>
                    <div className="flex items-center gap-2">
                      <span>14.5M</span>
                      <div className="w-16 h-1.5 bg-red-500 rounded-full overflow-hidden flex"><div className="w-[51%] bg-black"></div></div>
                    </div>
                  </div>
                </>
              ) : moveHistory.length === 1 && moveHistory[0] === 'd4' ? (
                <>
                  <div className="flex justify-between items-center px-2 py-1.5 hover:bg-slate-800 rounded-md cursor-pointer text-slate-300">
                    <span className="font-bold">Nf6</span>
                    <div className="flex items-center gap-2">
                      <span>12.4M</span>
                      <div className="w-16 h-1.5 bg-red-500 rounded-full overflow-hidden flex"><div className="w-[52%] bg-black"></div></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center px-2 py-1.5 hover:bg-slate-800 rounded-md cursor-pointer text-slate-300">
                    <span className="font-bold">d5</span>
                    <div className="flex items-center gap-2">
                      <span>10.1M</span>
                      <div className="w-16 h-1.5 bg-red-500 rounded-full overflow-hidden flex"><div className="w-[48%] bg-black"></div></div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-3 text-slate-500 italic">No master games found in this position.</div>
              )}
            </div>
          </div>

          {/* Board Appearance Customization (Classic Black & White, Banyan & Birch, Gold & Silver) */}
          <div className="p-4 rounded-2xl bg-gradient-to-b from-[#0c1427] to-[#120e1e] border border-blue-500/30 space-y-2">
            <label className="block text-[11px] font-bold text-slate-400">Board Theme</label>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { id: 'classic' as const, name: 'Classic (B&W)' },
                { id: 'banyan_birch' as const, name: 'Banyan & Birch' },
                { id: 'gold_silver' as const, name: 'Gold & Silver' },
                { id: 'crimson_sapphire' as const, name: 'Crimson & Sapphire' },
                { id: 'royal_ruby_cobalt' as const, name: 'Ruby & Cobalt' },
                { id: 'ocean_blue' as const, name: 'Ocean Blue' },
              ].map((th) => (
                <button
                  key={th.id}
                  onClick={() => setBoardTheme(th.id)}
                  className={`px-2 py-1.5 text-[10px] font-bold rounded-lg transition-all ${
                    boardTheme === th.id
                      ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-sm'
                      : 'bg-[#090e1c] text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {th.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Real Live Matchmaking Modal (No Mock Bots) */}
      {isMatchmaking && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md p-6 rounded-3xl bg-gradient-to-b from-[#0e172e] to-[#070b16] border-2 border-blue-500/60 shadow-2xl space-y-6 text-center animate-in fade-in zoom-in-95 duration-200">
            {/* Header & Close */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm tracking-wide uppercase">
                <Radio className="animate-pulse text-blue-400" size={18} />
                <span>Live Opponent Search</span>
              </div>
              <button
                onClick={handleCancelMatchmaking}
                className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Cancel matchmaking"
              >
                <X size={18} />
              </button>
            </div>

            {/* Radar Pulse Visual */}
            <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-ping opacity-60" />
              <div className="absolute inset-2 rounded-full border border-indigo-500/40 animate-pulse" />
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-red-600 p-0.5 shadow-xl flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#0b1021] flex items-center justify-center">
                  <Globe className="text-blue-300 animate-spin" style={{ animationDuration: '6s' }} size={28} />
                </div>
              </div>
            </div>

            {/* Matchmaking Info & Strict Criteria */}
            <div className="space-y-3">
              <h3 className="text-lg font-extrabold text-white font-cinzel tracking-wide">
                Searching Global Online Pool
              </h3>
              <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
                {matchmakingStatusText}
              </p>

              {/* Strict Filters Details */}
              <div className="grid grid-cols-2 gap-2 text-left p-3 rounded-2xl bg-[#090e1c] border border-blue-500/30 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Elo Target</span>
                  <span className="font-mono font-bold text-amber-300">
                    {(user ? user.stats.rapid : 1500) - 20} – {(user ? user.stats.rapid : 1500) + 20}
                  </span>
                  <span className="text-[10px] text-slate-500 block">(±20 deviation)</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Time Control</span>
                  <span className="font-mono font-bold text-blue-300">
                    {isCustomTime ? `${customMinutes}+${customIncrement}` : selectedTimeControl}
                  </span>
                  <span className="text-[10px] text-slate-500 block">Last 5 min active</span>
                </div>
              </div>

              {/* Live Search Timer */}
              <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
                <Clock size={13} className="text-slate-400" />
                <span>Elapsed: </span>
                <span className="text-white font-bold">
                  {Math.floor(matchmakingSearchSeconds / 60)}:
                  {('0' + (matchmakingSearchSeconds % 60)).slice(-2)}
                </span>
              </div>
            </div>

            {/* Cancel Button */}
            <button
              onClick={handleCancelMatchmaking}
              className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-red-600/80 to-red-700/80 hover:from-red-600 hover:to-red-700 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg active:scale-95"
            >
              Cancel Matchmaking
            </button>
          </div>
        </div>
      )}

      {/* Stockfish 18 & Gemini Review Modal */}
      <GameReviewModal
        isOpen={showReviewModal}
        onClose={() => setShowReviewModal(false)}
        pgn={lastPgn || '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5'}
        whitePlayerName={user?.username || 'Player 1'}
        blackPlayerName={mode === 'bot' ? 'Computer' : 'Player 2'}
        whiteRating={user?.stats.rapid || 1650}
        blackRating={mode === 'bot' ? botElo : 1500}
        timeControl={isCustomTime ? `${customMinutes}+${customIncrement}` : selectedTimeControl}
        gameResult={gameResult}
        reason={gameStatus || 'Game in progress'}
      />
    </div>
  );
};
