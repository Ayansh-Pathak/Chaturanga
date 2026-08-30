import React, { useState, useEffect, useCallback } from 'react';
import { Chess, Square } from 'chess.js';
import { ChessPiece, PieceColor, PieceSymbol } from './ChessPiece';
import { chessAudio } from '../../utils/chessAudio';
import { antiCheat } from '../../utils/antiCheat';
import { logger } from '../../context/arena-init';
import { RotateCw, Volume2, VolumeX, ShieldAlert } from 'lucide-react';

export type BoardTheme = 
  | 'classic'
  | 'banyan_birch' 
  | 'gold_silver'
  | 'crimson_sapphire'
  | 'royal_ruby_cobalt'
  | 'ocean_blue'
  | 'midnight_slate';

interface ChessBoardProps {
  initialFen?: string;
  onMove?: (move: { from: string; to: string; promotion?: string; san: string; fen: string }) => void;
  onGameOver?: (result: { winner: 'w' | 'b' | 'draw'; reason: string; pgn: string }) => void;
  orientation?: 'w' | 'b';
  allowPlayerMoves?: boolean;
  playerColor?: 'w' | 'b' | 'both';
  customTheme?: BoardTheme;
  interactive?: boolean;
  lastMoveHighlight?: { from: Square; to: Square } | null;
}

export const ChessBoard: React.FC<ChessBoardProps> = ({
  initialFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
  onMove,
  onGameOver,
  orientation = 'w',
  allowPlayerMoves = true,
  playerColor = 'both',
  customTheme = 'classic',
  interactive = true,
  lastMoveHighlight,
}) => {
  const [game, setGame] = useState<Chess>(new Chess(initialFen));
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [legalMoves, setLegalMoves] = useState<Square[]>([]);
  const [boardOrientation, setBoardOrientation] = useState<'w' | 'b'>(orientation);
  const [pendingPromotion, setPendingPromotion] = useState<{ from: Square; to: Square } | null>(null);
  const [lastMove, setLastMove] = useState<{ from: Square; to: Square } | null>(lastMoveHighlight || null);
  const [inCheckSquare, setInCheckSquare] = useState<Square | null>(null);
  const [soundOn, setSoundOn] = useState<boolean>(true);

  // Check state: check, checkmate, stalemate, draw
  const checkGameState = useCallback((currentGame: Chess) => {
    // Find king position if in check
    if (currentGame.inCheck()) {
      chessAudio.playCheck();
      const turn = currentGame.turn();
      const board = currentGame.board();
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          const piece = board[r][c];
          if (piece && piece.type === 'k' && piece.color === turn) {
            const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
            const square = `${files[c]}${8 - r}` as Square;
            setInCheckSquare(square);
            break;
          }
        }
      }
    } else {
      setInCheckSquare(null);
    }

    // Check Game Over conditions per FIDE rules
    if (currentGame.isGameOver()) {
      let winner: 'w' | 'b' | 'draw' = 'draw';
      let reason = 'Game over';

      if (currentGame.isCheckmate()) {
        winner = currentGame.turn() === 'w' ? 'b' : 'w';
        reason = `Checkmate! ${winner === 'w' ? 'White' : 'Black'} wins.`;
        chessAudio.playVictory();
      } else if (currentGame.isStalemate()) {
        reason = 'Draw by Stalemate';
      } else if (currentGame.isThreefoldRepetition()) {
        reason = 'Draw by Threefold Repetition';
      } else if (currentGame.isInsufficientMaterial()) {
        reason = 'Draw by Insufficient Material';
      } else if (currentGame.isDraw()) {
        reason = 'Draw by 50-move rule';
      }

      if (onGameOver) {
        onGameOver({
          winner,
          reason,
          pgn: currentGame.pgn(),
        });
      }
    }
  }, [onGameOver]);

  // Sync with initialFen if changed
  useEffect(() => {
    try {
      const newGame = new Chess(initialFen);
      setGame(newGame);
      setSelectedSquare(null);
      setLegalMoves([]);
      if (lastMoveHighlight !== undefined) {
        setLastMove(lastMoveHighlight);
      }
      checkGameState(newGame);

      // Anti-cheat: Start monitoring on new game
      antiCheat.startGame();
      antiCheat.onViolation((event) => {
        logger.warn('Anti-Cheat violation:', event);
        // Optionally show a UI warning here if needed
      });
    } catch {
      // Invalid FEN fallback
    }

    return () => {
      antiCheat.endGame();
    };
  }, [initialFen, lastMoveHighlight, checkGameState]);

  const executeMove = (from: Square, to: Square, promotion?: string) => {
    try {
      const moveResult = game.move({
        from,
        to,
        promotion: promotion || undefined,
      });

      if (moveResult) {
        if (game.inCheck()) {
          chessAudio.playCheck();
        } else if (moveResult.san.includes('O-O') || moveResult.flags.includes('k') || moveResult.flags.includes('q')) {
          chessAudio.playCastle();
        } else if (moveResult.promotion) {
          chessAudio.playPromote();
        } else if (moveResult.captured) {
          chessAudio.playCapture();
        } else {
          chessAudio.playMove();
        }

        setLastMove({ from, to });
        setSelectedSquare(null);
        setLegalMoves([]);
        setPendingPromotion(null);

        // Notify parent
        if (onMove) {
          onMove({
            from,
            to,
            promotion,
            san: moveResult.san,
            fen: game.fen(),
          });
        }

        checkGameState(game);
        antiCheat.recordMove();
      }
    } catch {
      chessAudio.playError();
      setSelectedSquare(null);
      setLegalMoves([]);
    }
  };

  const handleSquareClick = (square: Square) => {
    if (!allowPlayerMoves || game.isGameOver()) return;

    const currentTurn = game.turn();
    if (playerColor !== 'both' && playerColor !== currentTurn) {
      return;
    }

    const piece = game.get(square);

    // If already selected a square and clicked on a valid destination
    if (selectedSquare) {
      if (legalMoves.includes(square)) {
        const sourcePiece = game.get(selectedSquare);
        // Check if pawn promotion per FIDE rules
        const isPawnPromotion =
          sourcePiece &&
          sourcePiece.type === 'p' &&
          ((sourcePiece.color === 'w' && square[1] === '8') ||
            (sourcePiece.color === 'b' && square[1] === '1'));

        if (isPawnPromotion) {
          setPendingPromotion({ from: selectedSquare, to: square });
          return;
        }

        executeMove(selectedSquare, square);
        return;
      }
    }

    // Selecting a piece of current turn
    if (piece && piece.color === currentTurn) {
      setSelectedSquare(square);
      const moves = game.moves({ square, verbose: true });
      setLegalMoves(moves.map((m) => m.to as Square));
    } else {
      setSelectedSquare(null);
      setLegalMoves([]);
    }
  };

  const handlePromotionSelection = (pieceType: 'q' | 'r' | 'b' | 'n') => {
    if (!pendingPromotion) return;
    executeMove(pendingPromotion.from, pendingPromotion.to, pieceType);
  };

  const getThemeClasses = (theme?: BoardTheme | string) => {
    switch (theme) {
      case 'classic':
        return {
          light: 'bg-[#f0f2f5] text-[#1e293b]',
          dark: 'bg-[#1e2330] text-[#cbd5e1]',
          border: 'border-slate-700 shadow-[0_0_30px_rgba(0,0,0,0.6)]',
          selected: 'bg-emerald-500/70 ring-2 ring-emerald-400',
          lastMove: 'bg-amber-400/35',
          dotColor: 'bg-emerald-500/50'
        };
      case 'banyan_birch':
      case 'sanskrit_wood':
        return {
          light: 'bg-[#e2cbaf] text-[#5c3a21]',
          dark: 'bg-[#855132] text-[#fbf5ed]',
          border: 'border-[#4e2f17] shadow-[0_0_25px_rgba(78,47,23,0.4)]',
          selected: 'bg-[#d97706]/70 ring-2 ring-amber-400',
          lastMove: 'bg-[#fef08a]/40',
          dotColor: 'bg-[#5c3718]/45'
        };
      case 'gold_silver':
      case 'imperial_gold':
        return {
          light: 'bg-[#f1f5f9] text-[#475569]',
          dark: 'bg-[#c28e18] text-[#fef9c3]',
          border: 'border-[#b45309] shadow-[0_0_30px_rgba(217,119,6,0.35)]',
          selected: 'bg-yellow-400/70 ring-2 ring-yellow-300',
          lastMove: 'bg-amber-300/45',
          dotColor: 'bg-amber-950/40'
        };
      case 'crimson_sapphire':
        return {
          light: 'bg-[#1e293b]/90 text-[#93c5fd]',
          dark: 'bg-[#881337]/90 text-[#fecdd3]',
          border: 'border-blue-500/60 shadow-[0_0_30px_rgba(59,130,246,0.3)]',
          selected: 'bg-blue-600/70 ring-2 ring-blue-400',
          lastMove: 'bg-indigo-500/35',
          dotColor: 'bg-blue-400/50'
        };
      case 'royal_ruby_cobalt':
        return {
          light: 'bg-[#1e40af]/80 text-[#bfdbfe]',
          dark: 'bg-[#991b1b]/90 text-[#fecaca]',
          border: 'border-red-500/60 shadow-[0_0_30px_rgba(239,68,68,0.3)]',
          selected: 'bg-red-500/70 ring-2 ring-red-300',
          lastMove: 'bg-pink-500/35',
          dotColor: 'bg-red-400/50'
        };
      case 'ocean_blue':
        return {
          light: 'bg-[#0284c7]/75 text-[#bae6fd]',
          dark: 'bg-[#0f172a] text-[#7dd3fc]',
          border: 'border-sky-500/60 shadow-[0_0_25px_rgba(2,132,199,0.3)]',
          selected: 'bg-cyan-500/70 ring-2 ring-cyan-300',
          lastMove: 'bg-sky-400/35',
          dotColor: 'bg-cyan-300/60'
        };
      case 'midnight_slate':
      default:
        return {
          light: 'bg-[#334155] text-[#94a3b8]',
          dark: 'bg-[#1e293b] text-[#cbd5e1]',
          border: 'border-[#0f172a]',
          selected: 'bg-indigo-500/50 ring-2 ring-indigo-400',
          lastMove: 'bg-indigo-400/30',
          dotColor: 'bg-white/30'
        };
    }
  };

  const themeStyle = getThemeClasses(customTheme);

  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

  const displayedFiles = boardOrientation === 'w' ? files : [...files].reverse();
  const displayedRanks = boardOrientation === 'w' ? ranks : [...ranks].reverse();

  return (
    <div className="flex flex-col items-center select-none">
      {/* Board Controls Toolbar */}
      {interactive && (
        <div className="w-full max-w-[540px] flex items-center justify-between px-3 py-1.5 mb-2 bg-[#171b26]/90 border border-slate-700/60 rounded-xl backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-300 flex items-center gap-1">
              Turn:
              <span className={`inline-block w-3 h-3 rounded-full border border-slate-500 ${game.turn() === 'w' ? 'bg-white' : 'bg-slate-900'}`} />
              <span className="capitalize">{game.turn() === 'w' ? 'White' : 'Black'}</span>
            </span>
            {game.inCheck() && (
              <span className="flex items-center gap-1 text-[11px] font-extrabold text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-500/30 animate-pulse">
                <ShieldAlert size={12} /> Check!
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const next = !soundOn;
                setSoundOn(next);
                chessAudio.setSoundEnabled(next);
              }}
              title={soundOn ? 'Mute audio' : 'Enable audio'}
              className="p-1.5 text-slate-400 hover:text-amber-400 hover:bg-slate-800/80 rounded-lg transition-colors"
            >
              {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>
            <button
              onClick={() => setBoardOrientation((prev) => (prev === 'w' ? 'b' : 'w'))}
              title="Flip Board"
              className="p-1.5 text-slate-400 hover:text-amber-400 hover:bg-slate-800/80 rounded-lg transition-colors flex items-center gap-1 text-xs"
            >
              <RotateCw size={14} />
              <span className="hidden sm:inline">Flip</span>
            </button>
          </div>
        </div>
      )}

      {/* 8x8 Chessboard Container */}
      <div className={`relative p-2 rounded-2xl bg-[#121620] border-4 ${themeStyle.border} shadow-[0_12px_40px_rgba(0,0,0,0.6)] w-full max-w-[540px] aspect-square`}>
        <div className="grid grid-cols-8 grid-rows-8 w-full h-full rounded-lg overflow-hidden border border-black/30">
          {displayedRanks.map((rank, rankIdx) =>
            displayedFiles.map((file, fileIdx) => {
              const square = `${file}${rank}` as Square;
              const piece = game.get(square);
              // In standard chess: a1 is dark, h1 is light ("white on right"), d1 is light (white queen on white)
              const isLight = (file.charCodeAt(0) - 'a'.charCodeAt(0) + parseInt(rank)) % 2 === 0;
              const isSelected = selectedSquare === square;
              const isLegal = legalMoves.includes(square);
              const isLastMove = lastMove && (lastMove.from === square || lastMove.to === square);
              const isInCheck = inCheckSquare === square;

              return (
                <div
                  key={square}
                  id={`square-${square}`}
                  onClick={() => handleSquareClick(square)}
                  className={`relative flex items-center justify-center cursor-pointer transition-all ${
                    isLight ? themeStyle.light : themeStyle.dark
                  } ${isSelected ? themeStyle.selected : ''} ${isLastMove && !isSelected ? themeStyle.lastMove : ''} ${
                    isInCheck ? 'bg-red-600/70 ring-4 ring-red-500 animate-pulse' : ''
                  }`}
                >
                  {/* Coordinate labels */}
                  {fileIdx === 0 && (
                    <span className="absolute top-0.5 left-1 text-[9px] font-bold opacity-60 pointer-events-none">
                      {rank}
                    </span>
                  )}
                  {rankIdx === 7 && (
                    <span className="absolute bottom-0.5 right-1 text-[9px] font-bold opacity-60 pointer-events-none">
                      {file}
                    </span>
                  )}

                  {/* Chess Piece with custom Elephant Bishop & Crown King */}
                  {piece && (
                    <div className="w-[82%] h-[82%] flex items-center justify-center transform active:scale-95 transition-transform">
                      <ChessPiece
                        type={piece.type as PieceSymbol}
                        color={piece.color as PieceColor}
                      />
                    </div>
                  )}

                  {/* Legal Move Indicators */}
                  {isLegal && !piece && (
                    <div className={`w-3.5 h-3.5 rounded-full ${themeStyle.dotColor} pointer-events-none shadow-sm`} />
                  )}
                  {isLegal && piece && (
                    <div className="absolute inset-0.5 rounded-sm border-2 border-red-500/80 pointer-events-none animate-pulse" />
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* FIDE Pawn Promotion Modal */}
        {pendingPromotion && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-xl flex items-center justify-center z-50 p-4">
            <div className="bg-[#181d2a] border-2 border-amber-500/80 rounded-2xl p-4 shadow-2xl text-center max-w-xs w-full">
              <h3 className="text-sm font-bold text-amber-400 mb-1 font-cinzel">Promote Pawn</h3>
              <p className="text-xs text-slate-400 mb-3">Choose piece to promote to:</p>
              
              <div className="grid grid-cols-4 gap-2">
                {[
                  { type: 'q' as const, name: 'Queen' },
                  { type: 'b' as const, name: 'Bishop (Elephant)' },
                  { type: 'n' as const, name: 'Knight' },
                  { type: 'r' as const, name: 'Rook' }
                ].map((opt) => (
                  <button
                    key={opt.type}
                    onClick={() => handlePromotionSelection(opt.type)}
                    className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#232a3d] hover:bg-amber-500/20 border border-slate-700 hover:border-amber-400 transition-all hover:scale-105"
                  >
                    <div className="w-10 h-10">
                      <ChessPiece type={opt.type} color={game.turn()} />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-200 mt-1">{opt.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
