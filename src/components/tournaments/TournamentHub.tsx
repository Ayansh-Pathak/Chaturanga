import React, { useState, useRef } from "react";
import { Chess, Square } from 'chess.js';
import { useTournaments } from '../../context/TournamentContext';
import { useAuth } from '../../context/AuthContext';
import { useClubs } from '../../context/ClubContext';
import { Tournament, TournamentFormat, TimeControl } from '../../types/chess';
import { TournamentMedal } from '../medals/TournamentMedal';
import { ChessBoard } from '../chess/ChessBoard';
import { 
  Trophy, 
  Crown, 
  Clock, 
  Users, 
  Play, 
  PlusCircle, 
  CheckCircle, 
  Award, 
  Swords, 
  Sparkles,
  Zap,
  UserPlus,
  Shield,
  Lock,
  LogOut,
  AlertCircle,
  Globe
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { logger } from '../../utils/logger';

export const TournamentHub: React.FC = () => {
  const { user } = useAuth();
const { tournaments } = useTournaments();

const currentUserId = user?.id;
const [isUpdatingMembership, setIsUpdatingMembership] = useState(false);
const [membershipError, setMembershipError] = useState<string | null>(null);

  const { createTournament, joinTournament, leaveTournament, rejoinTournament, startTournament, simulateNextRound } = useTournaments();
  const { awardTournamentMedal, addGameRecord, updateRating } = useAuth();
  const { clubs } = useClubs();

  const userClubs = clubs.filter((c) => c.members.some((m) => m.userId === user?.id));
  const userClubIds = userClubs.map((c) => c.id);

  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(tournaments[0] || null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [withdrawTourTarget, setWithdrawTourTarget] = useState<Tournament | null>(null);
  const [activeMatchGame, setActiveMatchGame] = useState<boolean>(false);
  const [opponentBot, setOpponentBot] = useState<{ name: string; rating: number; avatar: string } | null>(null);
  const [activeMatchGameMoves, setActiveMatchGameMoves] = useState<number>(0);
  const [matchFen, setMatchFen] = useState<string>('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
  const [matchLastMove, setMatchLastMove] = useState<{ from: Square; to: Square } | null>(null);
  const [isOpponentThinking, setIsOpponentThinking] = useState<boolean>(false);
  const matchChessRef = useRef<Chess>(new Chess());
  const [filterTab, setFilterTab] = useState<'all' | 'public' | 'club'>('all');
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
const isParticipant = selectedTournament?.participants?.some(
(participant) => participant.id === currentUserId
) ?? false;
  // Creation form state
  const [tourName, setTourName] = useState('');
  const [tourFormat, setTourFormat] = useState<TournamentFormat>('swiss');
  const [timeControl, setTimeControl] = useState<TimeControl>('5+0');
  const [rounds, setRounds] = useState(5);
  const [isClubOnly, setIsClubOnly] = useState(false);
  const [selectedClubId, setSelectedClubId] = useState<string>(userClubs[0]?.id || clubs[0]?.id || '');

  const showToast = (text: string, type: 'success' | 'error' = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleCreateTournament = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tourName.trim()) return;

    const chosenClub = isClubOnly ? clubs.find((c) => c.id === selectedClubId) || userClubs[0] || clubs[0] : null;

    const newTour = createTournament({
      name: tourName.trim(),
      format: tourFormat,
      timeControl,
      totalRounds: Number(rounds),
      isClubOnly,
      clubId: chosenClub ? chosenClub.id : undefined,
      clubName: chosenClub ? chosenClub.name : undefined,
    });

    setSelectedTournament(newTour);
    setShowCreateModal(false);
    setTourName('');
    setIsClubOnly(false);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // no-op
    }

    showToast(`Tournament "${newTour.name}" hosted successfully! Registration is open.`, 'success');
  };

  const handleJoinTournament = (tourId: string) => {
    const res = joinTournament(tourId, userClubIds);
    if (res.success) {
      try {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.7 }
        });
      } catch {}
      showToast(res.message, 'success');
    } else {
      showToast(res.message, 'error');
    }
  };

  const handleLeaveTournament = (tourId: string) => {
    const res = leaveTournament(tourId);
    if (res.success) {
      showToast(res.message, 'success');
    } else {
      showToast(res.message, 'error');
    }
  };

  const handleRejoinTournament = (tourId: string) => {
    const res = rejoinTournament(tourId);
    if (res.success) {
      showToast(res.message, 'success');
    } else {
      showToast(res.message, 'error');
    }
  };

  const handleStartMatch = (opponent: { name: string; rating: number; avatar: string }) => {
    setOpponentBot(opponent);
    matchChessRef.current = new Chess();
    setMatchFen('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    setMatchLastMove(null);
    setIsOpponentThinking(false);
    setActiveMatchGame(true);
    setActiveMatchGameMoves(0);
  };

  const handleTournamentMoveMade = (move: { from: string; to: string; san: string; promotion?: string }) => {
    try {
      const res = matchChessRef.current.move({
        from: move.from,
        to: move.to,
        promotion: move.promotion || 'q',
      });
      if (res) {
        setMatchFen(matchChessRef.current.fen());
        setMatchLastMove({ from: move.from as Square, to: move.to as Square });
        setActiveMatchGameMoves((prev) => prev + 1);

        if (matchChessRef.current.isGameOver()) {
          if (matchChessRef.current.isCheckmate()) {
            handleGameComplete({ winner: 'w', reason: 'Checkmate! You won the tournament round!', pgn: matchChessRef.current.pgn() });
          } else {
            handleGameComplete({ winner: 'draw', reason: 'Draw (Stalemate / 50-move rule)', pgn: matchChessRef.current.pgn() });
          }
          return;
        }

        // Trigger tournament bot response
        setIsOpponentThinking(true);
        const oppRating = opponentBot?.rating || 1650;
        const thinkTime = Math.min(1200, Math.max(400, 300 + (oppRating / 3000) * 700));

        setTimeout(() => {
          try {
            const moves = matchChessRef.current.moves({ verbose: true });
            if (moves.length === 0) return;

            let selectedMove = moves[0];
            const pieceValues: Record<string, number> = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 0 };
            let bestScore = -9999;
            for (const m of moves) {
              let score = 0;
              if (m.captured) score += (pieceValues[m.captured] || 1) * 10 - (pieceValues[m.piece] || 1);
              if (m.san.includes('#')) score += 1000;
              if (m.san.includes('+')) score += 15;
              if (['d4', 'e4', 'd5', 'e5'].includes(m.to)) score += 6;
              score += Math.random() * ((3000 - oppRating) / 200);
              if (score > bestScore) {
                bestScore = score;
                selectedMove = m;
              }
            }

            const botRes = matchChessRef.current.move(selectedMove);
            if (botRes) {
              setMatchFen(matchChessRef.current.fen());
              setMatchLastMove({ from: botRes.from as Square, to: botRes.to as Square });
              setActiveMatchGameMoves((prev) => prev + 1);

              if (matchChessRef.current.isGameOver()) {
                if (matchChessRef.current.isCheckmate()) {
                  handleGameComplete({ winner: 'b', reason: `${opponentBot?.name || 'Opponent'} delivered checkmate!`, pgn: matchChessRef.current.pgn() });
                } else {
                  handleGameComplete({ winner: 'draw', reason: 'Draw', pgn: matchChessRef.current.pgn() });
                }
              }
            }
          } catch (e) {
            logger.error('Tournament bot move error:', e);
          } finally {
            setIsOpponentThinking(false);
          }
        }, thinkTime);
      }
    } catch (e) {
      logger.error('Tournament move error:', e);
    }
  };

  const handleGameComplete = (result: { winner: 'w' | 'b' | 'draw'; reason: string; pgn: string }) => {
    if (!user || !selectedTournament) return;

    const isWin = result.winner === 'w';
    const isLoss = result.winner === 'b';
    const scoreVal = isWin ? 1 : (result.winner === 'draw' ? 0.5 : 0);

    // Record game
    addGameRecord({
      white: { id: user.id, name: user.username, rating: user.stats.rapid, avatar: user.avatar },
      black: { id: 'bot_opp', name: opponentBot?.name || 'Tournament Master', rating: opponentBot?.rating || 1650, avatar: opponentBot?.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
      result: isWin ? '1-0' : (isLoss ? '0-1' : '1/2-1/2'),
      reason: result.reason,
      timeControl: selectedTournament.timeControl,
      pgn: result.pgn || matchChessRef.current.pgn(),
      movesCount: activeMatchGameMoves + 1,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      mode: 'tournament',
      tournamentName: selectedTournament.name,
      ratingChange: isWin ? +14 : (isLoss ? -12 : 0)
    });

    if (isWin) {
      updateRating('rapid', +14);
    } else if (isLoss) {
      updateRating('rapid', -12);
    }

    setActiveMatchGame(false);
    // Progress round
    simulateNextRound(selectedTournament.id);
  };

  const formatBadgeLabels: Record<string, string> = {
    swiss: 'Swiss System',
    arena: 'Arena Blitz',
    round_robin: 'Round Robin',
    double_round_robin: 'Double Round Robin',
    knockout: 'Knockout Cup'
  };

  const filteredTournaments = tournaments.filter((t) => {
    if (filterTab === 'public') return !t.isClubOnly;
    if (filterTab === 'club') return t.isClubOnly;
    return true;
  });

  const isUserInSelectedTour = !!user && !!selectedTournament?.participants.some((p) => p.id === user.id);
  const isUserWithdrawnFromSelectedTour = !!user && !!selectedTournament?.participants.find((p) => p.id === user.id)?.withdrawn;
  const isSelectedClubRestricted = !!selectedTournament?.isClubOnly && 
    !!selectedTournament?.clubId && 
    !userClubIds.includes(selectedTournament.clubId) && 
    selectedTournament.hostId !== user?.id;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className={`p-4 rounded-2xl border flex items-center justify-between gap-3 text-xs font-bold transition-all shadow-lg animate-in fade-in slide-in-from-top-2 ${
          toastMessage.type === 'success'
            ? 'bg-emerald-950/90 text-emerald-200 border-emerald-500/50 shadow-emerald-900/30'
            : 'bg-red-950/90 text-red-200 border-red-500/50 shadow-red-900/30'
        }`}>
          <div className="flex items-center gap-2">
            {toastMessage.type === 'success' ? <CheckCircle size={18} className="text-emerald-400" /> : <AlertCircle size={18} className="text-red-400" />}
            <span>{toastMessage.text}</span>
          </div>
          <button onClick={() => setToastMessage(null)} className="text-slate-400 hover:text-white px-2 py-0.5 rounded">
            ✕
          </button>
        </div>
      )}

      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0c1427] via-[#0b1021] to-[#1f0f1e] border border-blue-500/30 shadow-[0_10px_35px_rgba(37,99,235,0.15)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-1">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600 to-red-600 shadow-md">
              <Trophy className="text-white" size={24} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white font-cinzel">
              Chaturanga Tournaments
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Host and join open public or private Club-exclusive Swiss, Arena, Round Robin, and Knockout events. Official Gold, Silver, Bronze, and Brass medals are awarded to top finishers!
          </p>
        </div>

        <button
          onClick={() => {
            if (userClubs.length > 0 && !selectedClubId) {
              setSelectedClubId(userClubs[0].id);
            }
            setShowCreateModal(true);
          }}
          className="relative z-10 flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-black text-xs sm:text-sm shadow-xl shadow-blue-600/20 transition-all active:scale-95 border border-blue-400/40"
        >
          <PlusCircle size={18} />
          <span>Host Tournament</span>
        </button>
      </div>

      {/* Main Layout: List & Active Tournament View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Tournament Explorer (4 Cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Zap size={14} className="text-blue-400" /> Tournaments
            </h3>
            <span className="text-blue-400 font-mono text-xs font-bold">{filteredTournaments.length} Events</span>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#090e1c] rounded-xl border border-slate-800 text-[11px] font-bold">
            <button
              onClick={() => setFilterTab('all')}
              className={`flex-1 py-1.5 rounded-lg transition-all ${
                filterTab === 'all' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All ({tournaments.length})
            </button>
            <button
              onClick={() => setFilterTab('public')}
              className={`flex-1 py-1.5 rounded-lg transition-all flex items-center justify-center gap-1 ${
                filterTab === 'public' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Globe size={12} /> Public
            </button>
            <button
              onClick={() => setFilterTab('club')}
              className={`flex-1 py-1.5 rounded-lg transition-all flex items-center justify-center gap-1 ${
                filterTab === 'club' ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Shield size={12} /> Club Only
            </button>
          </div>

          <div className="space-y-2.5 max-h-[680px] overflow-y-auto pr-1">
            {filteredTournaments.length === 0 ? (
              <div className="p-6 rounded-2xl bg-[#0c1222] border border-slate-800 text-center text-xs text-slate-400 space-y-2">
                <Shield size={24} className="mx-auto text-slate-500" />
                <p>No tournaments match this filter.</p>
              </div>
            ) : (
              filteredTournaments.map((t) => {
                const isSelected = selectedTournament?.id === t.id;
                const isJoined = !!user && t.participants.some((p) => p.id === user.id);
                return (
                  <div
                    key={t.id}
                    onClick={() => {
                      setSelectedTournament(t);
                      setActiveMatchGame(false);
                    }}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-br from-[#101b33] to-[#1e1026] border-blue-500/80 shadow-[0_0_20px_rgba(59,130,246,0.3)] ring-1 ring-blue-400/50'
                        : 'bg-[#0c1222] border-slate-800 hover:border-blue-500/40 hover:bg-[#11192e]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="space-y-0.5 flex-1 min-w-0">
                        <h4 className="text-sm font-extrabold text-white font-cinzel truncate">
                          {t.name}
                        </h4>
                        {t.isClubOnly && (
                          <div className="flex items-center gap-1 text-[10px] font-bold text-amber-400">
                            <Shield size={11} className="text-amber-400" />
                            <span className="truncate">{t.clubName || 'Club Exclusive'}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        {isJoined && (
                          <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                            ✓ Joined
                          </span>
                        )}
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                          t.status === 'ongoing'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 animate-pulse'
                            : t.status === 'completed'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            : 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                        }`}>
                          {t.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-2.5">
                      <span className="flex items-center gap-1 font-semibold text-blue-300">
                        <Award size={13} className="text-red-400" /> {formatBadgeLabels[t.format]}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} /> {t.timeControl}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={13} /> {t.participants.length}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800">
                      <span>Host: <strong className="text-slate-200">{t.hostName}</strong></span>
                      <span className="font-mono text-blue-300">Round {t.currentRound}/{t.totalRounds}</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right: Detailed Tournament Standings & Board (8 Cols) */}
        {selectedTournament && (
          <div className="lg:col-span-8 space-y-5">
            
            {/* Active Match Player Modal / Game Screen */}
            {activeMatchGame ? (
              <div className="p-6 rounded-3xl bg-gradient-to-b from-[#0c1427] to-[#150d22] border-2 border-blue-500/60 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                  <div className="flex items-center gap-2">
                    <Swords size={20} className="text-red-400" />
                    <div>
                      <h3 className="text-sm font-black text-white font-cinzel">
                        {selectedTournament.name} — Round {selectedTournament.currentRound}
                      </h3>
                      <p className="text-xs text-slate-400">
                        Match vs {opponentBot?.name || 'Grandmaster'} ({opponentBot?.rating || 1650} Elo)
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {activeMatchGameMoves < 2 ? (
                      <button
                        onClick={() => {
                          handleGameComplete({ winner: 'draw', reason: 'Aborted', pgn: '' });
                        }}
                        className="text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 font-bold"
                      >
                        Abort
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            handleGameComplete({ winner: 'draw', reason: 'Draw by agreement', pgn: '' });
                          }}
                          className="text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 font-bold"
                        >
                          Offer Draw
                        </button>
                        <button
                          onClick={() => {
                            handleGameComplete({ winner: 'b', reason: 'Resignation', pgn: '' });
                          }}
                          className="text-xs text-red-300 hover:text-white px-3 py-1.5 rounded-lg bg-red-950/60 hover:bg-red-900/90 border border-red-500/40 font-bold"
                        >
                          Resign
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex justify-center">
                  <ChessBoard
                    key={`match-${selectedTournament.id}-${selectedTournament.currentRound}`}
                    initialFen={matchFen}
                    lastMoveHighlight={matchLastMove}
                    orientation="w"
                    playerColor="w"
                    customTheme="crimson_sapphire"
                    onGameOver={handleGameComplete}
                    onMove={handleTournamentMoveMade}
                    interactive={!isOpponentThinking}
                  />
                </div>
              </div>
            ) : (
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0c1427] to-[#120e1e] border border-blue-500/30 shadow-2xl space-y-6">
                
                {/* Header info & Join Actions */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Crown className="text-red-400" size={22} fill="#ef4444" />
                      <h2 className="text-xl sm:text-2xl font-black text-white font-cinzel">
                        {selectedTournament.name}
                      </h2>
                    </div>

                    {selectedTournament.isClubOnly && (
                      <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                        <Shield size={14} className="text-amber-400" />
                        <span>Club Exclusive: <strong>{selectedTournament.clubName || 'Guild Club'}</strong></span>
                        {userClubIds.includes(selectedTournament.clubId || '') ? (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                            ✓ Member Verified
                          </span>
                        ) : (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/40">
                            🔒 Club Members Only
                          </span>
                        )}
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-0.5">
                      <span className="text-blue-300 font-semibold">{formatBadgeLabels[selectedTournament.format]}</span>
                      <span>•</span>
                      <span>Time: {selectedTournament.timeControl}</span>
                      <span>•</span>
                      <span>Scheduled: {selectedTournament.scheduledTime}</span>
                      <span>•</span>
                      <span className="font-semibold text-slate-300">{selectedTournament.participants.length} Players Enrolled</span>
                    </div>
                  </div>

                  {/* Actions & Join Button */}
                  <div className="flex flex-wrap items-center gap-2">
                    
                    {/* Primary Join Tournament Button */}
                    {!isUserInSelectedTour && selectedTournament.status !== 'completed' && (
                      isSelectedClubRestricted ? (
                        <button
                          onClick={() => showToast(`This tournament is exclusive to members of "${selectedTournament.clubName}". Please join the club first!`, 'error')}
                          className="px-4 py-2.5 rounded-xl bg-amber-950/80 hover:bg-amber-900/90 text-amber-200 border border-amber-500/50 font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
                        >
                          <Lock size={14} /> Join Club to Enter
                        </button>
                      ) : (
                        <button
                          onClick={() => handleJoinTournament(selectedTournament.id)}
                          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-900/40 active:scale-95 border border-emerald-400/40 transition-all"
                        >
                          <UserPlus size={15} /> Join Tournament
                        </button>
                      )
                    )}

                    {/* Joined Status / Withdraw Option */}
                    {isUserInSelectedTour && selectedTournament.status !== 'completed' && (
                      <div className="flex items-center gap-2">
                        {isUserWithdrawnFromSelectedTour ? (
                          <>
                            <span className="px-3.5 py-2.5 rounded-xl bg-slate-800/80 text-slate-400 border border-slate-700 font-bold text-xs flex items-center gap-1.5 shadow-sm">
                              Unregistered
                            </span>
                            <button
                              onClick={() => handleRejoinTournament(selectedTournament.id)}
                              title="Rejoin tournament"
                              className="px-3.5 py-2.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/90 text-emerald-300 hover:text-white border border-emerald-500/40 hover:border-emerald-400 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
                            >
                              <UserPlus size={13} /> Join
                            </button>
                          </>
                        ) : (
                          <>
                            <span className="px-3.5 py-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold text-xs flex items-center gap-1.5 shadow-sm">
                              <CheckCircle size={14} /> Registered ✓
                            </span>
                            {selectedTournament.status === 'upcoming' && (
                              <button
                                onClick={() => setWithdrawTourTarget(selectedTournament)}
                                title="Withdraw from tournament"
                                className="px-3.5 py-2.5 rounded-xl bg-red-950/60 hover:bg-red-900/90 text-red-300 hover:text-white border border-red-500/40 hover:border-red-400 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
                              >
                                <LogOut size={13} /> Withdraw
                              </button>
                            )}
                          </>
                        )}
                      </div>
                    )}

                    {/* Host Controls */}
                    {selectedTournament.status === 'upcoming' && (
                      <button
                        onClick={() => {
                          if (selectedTournament.participants.length < 2) {
                            showToast('Minimum 2 players required to start a tournament.', 'error');
                          } else {
                            startTournament(selectedTournament.id);
                          }
                        }}
                        className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95"
                      >
                        <Play size={14} /> Start Tournament
                      </button>
                    )}

                    {selectedTournament.status === 'ongoing' && (
                      <button
                        onClick={() => simulateNextRound(selectedTournament.id)}
                        className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95"
                      >
                        <Zap size={14} /> Advance Round ({selectedTournament.currentRound}/{selectedTournament.totalRounds})
                      </button>
                    )}

                    {selectedTournament.status !== 'completed' && isUserInSelectedTour && (
                      <button
                        onClick={() => handleStartMatch({ name: 'Grandmaster Vishy', rating: 1720, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' })}
                        className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-black text-xs flex items-center gap-1.5 shadow-md active:scale-95 border border-blue-400/30"
                      >
                        <Swords size={14} /> Play Match
                      </button>
                    )}
                  </div>
                </div>

                {/* Tournament Winners Showcase if completed */}
                {selectedTournament.status === 'completed' && selectedTournament.winners && selectedTournament.participants.length > 2 && (
                  <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-[#101b33] to-[#1c0f24] border-2 border-blue-500/60 space-y-4 shadow-xl">
                    <div className="text-center space-y-1">
                      <div className="flex items-center justify-center gap-1.5 text-blue-300 font-extrabold text-sm font-cinzel">
                        <Sparkles size={16} className="text-red-400" /> Tournament Concluded — Official Medals Awarded
                      </div>
                      <p className="text-xs text-slate-300">
                        Top 4 Finishers received custom Chaturanga Medals with Crown, Date/Time, and Tournament details!
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { tier: 'gold' as const, place: 1 as const, p: selectedTournament.winners.gold },
                        { tier: 'silver' as const, place: 2 as const, p: selectedTournament.winners.silver },
                        { tier: 'bronze' as const, place: 3 as const, p: selectedTournament.winners.bronze },
                        { tier: 'brass' as const, place: 4 as const, p: selectedTournament.winners.brass },
                      ].map((win) => (
                        <TournamentMedal
                          key={win.place}
                          size="sm"
                          medal={{
                            id: `m_showcase_${win.place}`,
                            tournamentId: selectedTournament.id,
                            tournamentName: selectedTournament.name,
                            format: selectedTournament.format,
                            tier: win.tier,
                            placement: win.place,
                            dateTimeStr: selectedTournament.scheduledTime,
                            awardedTo: win.p?.username || `Place ${win.place}`,
                            awardedAt: selectedTournament.createdAt
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* 2-Player Duel Completion Notice (No medals for 2 player tournaments) */}
                {selectedTournament.status === 'completed' && selectedTournament.participants.length <= 2 && (
                  <div className="p-5 rounded-3xl bg-[#0c1427] border border-blue-500/40 text-center space-y-2 shadow-lg">
                    <div className="flex items-center justify-center gap-2 text-amber-300 font-bold text-sm font-cinzel">
                      <Trophy size={18} className="text-amber-400" /> 2-Player Duel Concluded
                    </div>
                    <p className="text-xs text-slate-300">
                      Winner: <strong className="text-white">{selectedTournament.participants[0]?.username || 'Player 1'}</strong> (Score: {selectedTournament.participants[0]?.score} pts).
                    </p>
                    <p className="text-[11px] text-slate-400">
                      <em>Note: Official Chaturanga Medals are reserved exclusively for multi-player tournaments (&gt;2 participants).</em>
                    </p>
                  </div>
                )}

                {/* Standings Table */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-200">
                      Live Standings & Leaderboard
                    </h3>
                    <span className="text-[11px] text-slate-400">
                      Format: <strong className="text-blue-300 capitalize">{selectedTournament.format.replace('_', ' ')}</strong>
                    </span>
                  </div>

                  <div className="overflow-x-auto rounded-2xl border border-blue-500/30 bg-[#080d1a]">
                    <table className="w-full text-left text-xs text-slate-300">
                      <thead className="bg-[#0e162a] text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-800">
                        <tr>
                          <th className="py-2.5 px-3">#</th>
                          <th className="py-2.5 px-3">Participant</th>
                          <th className="py-2.5 px-3">Rating</th>
                          <th className="py-2.5 px-3 text-center">W-D-L</th>
                          <th className="py-2.5 px-3 text-center">Score</th>
                          <th className="py-2.5 px-3 text-right">Placement Prize</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/80">
                        {selectedTournament.participants.map((part, idx) => {
                          const medalTier = idx === 0 ? 'Gold' : idx === 1 ? 'Silver' : idx === 2 ? 'Bronze' : idx === 3 ? 'Brass' : null;
                          return (
                            <tr key={part.id} className="hover:bg-slate-800/40 transition-colors">
                              <td className="py-3 px-3 font-bold text-slate-400 font-mono">
                                {idx + 1}
                              </td>
                              <td className="py-3 px-3">
                                <div className="flex items-center gap-2">
                                  <img src={part.avatar} alt={part.username} className="w-6 h-6 rounded-full object-cover" />
                                  <span className="font-bold text-white">
                                    {part.username}
                                  </span>
                                  {part.id === user?.id && (
                                    <span className="text-[9px] font-extrabold px-1.5 py-0.2 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded shadow-sm">
                                      YOU
                                    </span>
                                  )}
                                  {part.withdrawn && (
                                    <span className="text-[9px] font-bold px-1.5 py-0.2 bg-red-950/80 text-red-300 border border-red-500/40 rounded">
                                      Withdrawn
                                    </span>
                                  )}
                                </div>
                              </td>
                              <td className="py-3 px-3 font-mono text-blue-400">
                                {part.rating}
                              </td>
                              <td className="py-3 px-3 text-center font-mono text-slate-400">
                                {part.wins}-{part.draws}-{part.losses}
                              </td>
                              <td className="py-3 px-3 text-center font-extrabold text-sm text-blue-300 font-mono">
                                {part.score.toFixed(1)}
                              </td>
                              <td className="py-3 px-3 text-right">
                                {medalTier ? (
                                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                                    idx === 0 ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 shadow-sm' :
                                    idx === 1 ? 'bg-slate-300/20 text-slate-200 border border-slate-300/40' :
                                    idx === 2 ? 'bg-amber-700/20 text-amber-400 border border-amber-700/40' :
                                    'bg-yellow-700/20 text-yellow-500 border border-yellow-700/40'
                                  }`}>
                                    <Crown size={10} /> {medalTier} Medal
                                  </span>
                                ) : (
                                  <span className="text-[10px] text-slate-600">—</span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

          </div>
        )}
      </div>

      {/* Host Tournament Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-gradient-to-b from-[#0e172a] to-[#160d24] border border-blue-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(59,130,246,0.3)] max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-black text-white font-cinzel mb-4 flex items-center gap-2">
              <Trophy className="text-red-400" size={22} />
              Host Chaturanga Tournament
            </h2>

            <form onSubmit={handleCreateTournament} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Tournament Title</label>
                <input
                  type="text"
                  value={tourName}
                  onChange={(e) => setTourName(e.target.value)}
                  placeholder="e.g. Royal Grand Blitz Cup"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Tournament Format</label>
                  <select
                    value={tourFormat}
                    onChange={(e) => setTourFormat(e.target.value as TournamentFormat)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-400"
                  >
                    <option value="swiss">Swiss Tournament</option>
                    <option value="arena">Arena Tournament</option>
                    <option value="round_robin">Round Robin</option>
                    <option value="double_round_robin">Double Round Robin</option>
                    <option value="knockout">Knockout (Cup)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Time Control</label>
                  <select
                    value={timeControl}
                    onChange={(e) => setTimeControl(e.target.value as TimeControl)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-400"
                  >
                    <option value="1+0">Bullet (1+0)</option>
                    <option value="3+0">Blitz (3+0)</option>
                    <option value="3+2">Blitz (3+2)</option>
                    <option value="5+0">Blitz (5+0)</option>
                    <option value="10+0">Rapid (10+0)</option>
                    <option value="15+10">Rapid (15+10)</option>
                    <option value="30+0">Rapid (30+0)</option>
                  </select>
                </div>
              </div>

              {tourFormat !== 'knockout' && (
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Total Rounds</label>
                  <input
                    type="number"
                    min="3"
                    max="12"
                    value={rounds}
                    onChange={(e) => setRounds(Number(e.target.value))}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#0a0f1d] border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-400"
                  />
                </div>
              )}

              {/* Club-Exclusive Hosting Option */}
              <div className="p-3.5 rounded-2xl bg-[#0a0f1d] border border-amber-500/40 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isClubOnly}
                      onChange={(e) => setIsClubOnly(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-700 text-amber-500 focus:ring-amber-400 bg-slate-900"
                    />
                    <span className="text-xs font-extrabold text-amber-300 flex items-center gap-1.5">
                      <Shield size={14} className="text-amber-400" />
                      Club / Team Exclusive Tournament
                    </span>
                  </label>
                </div>

                {isClubOnly && (
                  <div className="space-y-2 pt-1 border-t border-slate-800">
                    <label className="block text-[11px] font-bold text-slate-300">
                      Select Host Club or Team (Only members of this club can join)
                    </label>
                    <select
                      value={selectedClubId}
                      onChange={(e) => setSelectedClubId(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#141a2e] border border-amber-500/50 text-xs text-amber-200 font-bold focus:outline-none focus:border-amber-400"
                    >
                      {clubs.map((c) => {
                        const isMember = c.members.some((m) => m.userId === user?.id);
                        return (
                          <option key={c.id} value={c.id}>
                            {c.name} ({c.tag}) {isMember ? '• Your Club ✓' : ''}
                          </option>
                        );
                      })}
                    </select>
                    <p className="text-[10px] text-amber-400/80 leading-tight">
                      🔒 Only authenticated players who are registered members of this club will be allowed to join this tournament.
                    </p>
                  </div>
                )}
              </div>

              {/* Medals Guarantee Note */}
              <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-950/40 to-red-950/40 border border-blue-500/30 text-xs text-slate-300 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-blue-300">
                  <Crown size={14} className="text-red-400" /> Official Medals Awarded to Winners:
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  🥇 1st: Gold Medal • 🥈 2nd: Silver Medal • 🥉 3rd: Bronze Medal • 🎖️ 4th: Brass Medal
                  (Custom engraved with Crown, Date/Time, and Tournament Title).
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-black text-xs shadow-lg transition-all"
                >
                  Publish & Open Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Withdraw Tournament Confirmation Modal */}
      {withdrawTourTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-gradient-to-b from-[#0e172a] to-[#1a0f1d] border border-red-500/50 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-red-400">
              <div className="p-3 rounded-2xl bg-red-500/20 border border-red-500/30">
                <AlertCircle size={24} />
              </div>
              <div>
                <h3 className="text-base font-black text-white font-cinzel">Withdraw from Tournament</h3>
                <p className="text-xs text-slate-300">{withdrawTourTarget.name}</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Are you sure you want to withdraw from this tournament?{' '}
              {withdrawTourTarget.status === 'ongoing'
                ? 'You will be removed from subsequent matchmaking rounds while keeping your historic results.'
                : 'Your registration slot will be vacated.'}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setWithdrawTourTarget(null)}
                className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
              >
                Keep Registration
              </button>
              <button
                type="button"
                onClick={() => {
                  handleLeaveTournament(withdrawTourTarget.id);
                  setWithdrawTourTarget(null);
                }}
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-bold transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5"
              >
                <LogOut size={14} /> Confirm Withdrawal
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

