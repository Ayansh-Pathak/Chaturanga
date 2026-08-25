import React, { createContext, useContext, useState, useEffect } from 'react';
import { Tournament, TournamentFormat, TimeControl, TournamentParticipant, TournamentMedalData } from '../types/chess';
import { useAuth } from './AuthContext';

export interface JoinTournamentResult {
  success: boolean;
  message: string;
}

interface TournamentContextType {
  tournaments: Tournament[];
  activeTournament: Tournament | null;
  setActiveTournament: (t: Tournament | null) => void;
  createTournament: (params: {
    name: string;
    format: TournamentFormat;
    timeControl: TimeControl;
    totalRounds: number;
    isClubOnly?: boolean;
    clubId?: string;
    clubName?: string;
  }) => Tournament;
  joinTournament: (tournamentId: string, userClubIds?: string[]) => JoinTournamentResult;
  leaveTournament: (tournamentId: string) => { success: boolean; message: string };
  withdrawTournament: (tournamentId: string) => { success: boolean; message: string };
  startTournament: (tournamentId: string) => void;
  simulateNextRound: (tournamentId: string) => void;
  completeTournament: (tournamentId: string) => void;
}

const initialTournaments: Tournament[] = [
  {
    id: 'tour_vajra_club_championship',
    name: 'Vajra Brotherhood Club Cup',
    format: 'swiss',
    timeControl: '10+0',
    totalRounds: 4,
    currentRound: 1,
    status: 'upcoming',
    createdAt: 'Aug 25, 2026',
    scheduledTime: 'Aug 26, 2026 • 19:00',
    hostId: 'user_master_1',
    hostName: 'ArjunaWarrior',
    isClubOnly: true,
    clubId: 'club_1',
    clubName: 'Vajra Chess Brotherhood',
    participants: [
      { id: 'user_master_1', username: 'ArjunaWarrior', rating: 1650, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80', score: 0, wins: 0, draws: 0, losses: 0, streak: 0 },
      { id: 'bot_1', username: 'Grandmaster Vishy', rating: 1720, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', score: 0, wins: 0, draws: 0, losses: 0, streak: 0, isBot: true },
      { id: 'bot_2', username: 'Sage Chanakya', rating: 1610, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', score: 0, wins: 0, draws: 0, losses: 0, streak: 0, isBot: true },
    ],
    matches: []
  },
  {
    id: 'tour_swiss_championship',
    name: 'Vedic Masters Swiss Cup',
    format: 'swiss',
    timeControl: '5+0',
    totalRounds: 5,
    currentRound: 3,
    status: 'ongoing',
    createdAt: 'Aug 24, 2026',
    scheduledTime: 'Aug 25, 2026 • 18:00',
    hostId: 'user_master_1',
    hostName: 'ArjunaWarrior',
    isClubOnly: false,
    participants: [
      { id: 'user_master_1', username: 'ArjunaWarrior', rating: 1650, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80', score: 2.5, wins: 2, draws: 1, losses: 0, streak: 2 },
      { id: 'bot_1', username: 'Grandmaster Vishy', rating: 1720, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', score: 3.0, wins: 3, draws: 0, losses: 0, streak: 3, isBot: true },
      { id: 'bot_2', username: 'Sage Chanakya', rating: 1610, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', score: 2.0, wins: 2, draws: 0, losses: 1, streak: 1, isBot: true },
      { id: 'bot_3', username: 'Gaja Tactician', rating: 1540, avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80', score: 1.5, wins: 1, draws: 1, losses: 1, streak: 0, isBot: true },
      { id: 'bot_4', username: 'Bhisma Defender', rating: 1480, avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80', score: 1.0, wins: 1, draws: 0, losses: 2, streak: 0, isBot: true },
      { id: 'bot_5', username: 'Karna The Archer', rating: 1590, avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80', score: 1.0, wins: 1, draws: 0, losses: 2, streak: 0, isBot: true },
      { id: 'bot_6', username: 'Drona Strategist', rating: 1680, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80', score: 0.5, wins: 0, draws: 1, losses: 2, streak: 0, isBot: true },
      { id: 'bot_7', username: 'Yudhishthira', rating: 1450, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80', score: 0.5, wins: 0, draws: 1, losses: 2, streak: 0, isBot: true }
    ],
    matches: []
  },
  {
    id: 'tour_arena_blitz',
    name: 'Gaja Elephant Arena',
    format: 'arena',
    timeControl: '3+0',
    totalRounds: 10,
    currentRound: 1,
    status: 'ongoing',
    createdAt: 'Aug 25, 2026',
    scheduledTime: 'Aug 25, 2026 • 20:00',
    hostId: 'bot_1',
    hostName: 'Grandmaster Vishy',
    isClubOnly: false,
    participants: [
      { id: 'bot_1', username: 'Grandmaster Vishy', rating: 1720, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', score: 12, wins: 4, draws: 0, losses: 0, streak: 4, isBot: true },
      { id: 'user_master_1', username: 'ArjunaWarrior', rating: 1650, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80', score: 9, wins: 3, draws: 0, losses: 1, streak: 2 },
      { id: 'bot_2', username: 'Sage Chanakya', rating: 1610, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', score: 6, wins: 2, draws: 0, losses: 2, streak: 0, isBot: true },
      { id: 'bot_5', username: 'Karna The Archer', rating: 1590, avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80', score: 4, wins: 1, draws: 1, losses: 2, streak: 0, isBot: true },
    ],
    matches: []
  },
  {
    id: 'tour_knockout_cup',
    name: 'Imperial Crown Knockout Cup',
    format: 'knockout',
    timeControl: '10+0',
    totalRounds: 3,
    currentRound: 1,
    status: 'upcoming',
    createdAt: 'Aug 25, 2026',
    scheduledTime: 'Aug 26, 2026 • 15:30',
    hostId: 'user_master_1',
    hostName: 'ArjunaWarrior',
    isClubOnly: false,
    participants: [
      { id: 'user_master_1', username: 'ArjunaWarrior', rating: 1650, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80', score: 0, wins: 0, draws: 0, losses: 0, streak: 0 },
      { id: 'bot_1', username: 'Grandmaster Vishy', rating: 1720, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', score: 0, wins: 0, draws: 0, losses: 0, streak: 0, isBot: true },
      { id: 'bot_2', username: 'Sage Chanakya', rating: 1610, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', score: 0, wins: 0, draws: 0, losses: 0, streak: 0, isBot: true },
      { id: 'bot_3', username: 'Gaja Tactician', rating: 1540, avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80', score: 0, wins: 0, draws: 0, losses: 0, streak: 0, isBot: true }
    ],
    matches: []
  },
  {
    id: 'tour_round_robin',
    name: 'Sanskrit Elite Round Robin',
    format: 'round_robin',
    timeControl: '3+2',
    totalRounds: 4,
    currentRound: 4,
    status: 'completed',
    createdAt: 'Aug 15, 2026',
    scheduledTime: 'Aug 16, 2026 • 15:00',
    hostId: 'user_master_1',
    hostName: 'ArjunaWarrior',
    isClubOnly: false,
    participants: [
      { id: 'bot_1', username: 'Grandmaster Vishy', rating: 1720, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', score: 3.5, wins: 3, draws: 1, losses: 0, streak: 3, isBot: true },
      { id: 'user_master_1', username: 'ArjunaWarrior', rating: 1650, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80', score: 3.0, wins: 3, draws: 0, losses: 1, streak: 2 },
      { id: 'bot_2', username: 'Sage Chanakya', rating: 1610, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', score: 2.0, wins: 2, draws: 0, losses: 2, streak: 0, isBot: true },
      { id: 'bot_6', username: 'Drona Strategist', rating: 1680, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80', score: 1.0, wins: 1, draws: 0, losses: 3, streak: 0, isBot: true },
    ],
    matches: []
  },
  {
    id: 'tour_double_robin',
    name: 'Mahabharata Double Round Robin',
    format: 'double_round_robin',
    timeControl: '15+10',
    totalRounds: 6,
    currentRound: 1,
    status: 'upcoming',
    createdAt: 'Aug 25, 2026',
    scheduledTime: 'Aug 27, 2026 • 17:00',
    hostId: 'user_master_1',
    hostName: 'ArjunaWarrior',
    isClubOnly: false,
    participants: [
      { id: 'user_master_1', username: 'ArjunaWarrior', rating: 1650, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80', score: 0, wins: 0, draws: 0, losses: 0, streak: 0 },
      { id: 'bot_1', username: 'Grandmaster Vishy', rating: 1720, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', score: 0, wins: 0, draws: 0, losses: 0, streak: 0, isBot: true },
      { id: 'bot_5', username: 'Karna The Archer', rating: 1590, avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80', score: 0, wins: 0, draws: 0, losses: 0, streak: 0, isBot: true },
      { id: 'bot_6', username: 'Drona Strategist', rating: 1680, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80', score: 0, wins: 0, draws: 0, losses: 0, streak: 0, isBot: true },
    ],
    matches: []
  }
];

const TournamentContext = createContext<TournamentContextType | undefined>(undefined);

export const TournamentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, awardTournamentMedal } = useAuth();
  const [tournaments, setTournaments] = useState<Tournament[]>(() => {
    const saved = localStorage.getItem('chaturanga_tournaments');
    return saved ? JSON.parse(saved) : initialTournaments;
  });

  const [activeTournament, setActiveTournament] = useState<Tournament | null>(null);

  useEffect(() => {
    localStorage.setItem('chaturanga_tournaments', JSON.stringify(tournaments));
  }, [tournaments]);

  const createTournament = ({
    name,
    format,
    timeControl,
    totalRounds,
    isClubOnly,
    clubId,
    clubName,
  }: {
    name: string;
    format: TournamentFormat;
    timeControl: TimeControl;
    totalRounds: number;
    isClubOnly?: boolean;
    clubId?: string;
    clubName?: string;
  }) => {
    const now = new Date();
    const dateFormatted = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const timeFormatted = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

    // Seed with realistic participants
    const botParticipants: TournamentParticipant[] = [
      { id: 'bot_1', username: 'Grandmaster Vishy', rating: 1720, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', score: 0, wins: 0, draws: 0, losses: 0, streak: 0, isBot: true },
      { id: 'bot_2', username: 'Sage Chanakya', rating: 1610, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', score: 0, wins: 0, draws: 0, losses: 0, streak: 0, isBot: true },
      { id: 'bot_3', username: 'Gaja Tactician', rating: 1540, avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80', score: 0, wins: 0, draws: 0, losses: 0, streak: 0, isBot: true },
      { id: 'bot_4', username: 'Bhisma Defender', rating: 1480, avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80', score: 0, wins: 0, draws: 0, losses: 0, streak: 0, isBot: true },
      { id: 'bot_5', username: 'Karna The Archer', rating: 1590, avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80', score: 0, wins: 0, draws: 0, losses: 0, streak: 0, isBot: true },
      { id: 'bot_6', username: 'Drona Strategist', rating: 1680, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80', score: 0, wins: 0, draws: 0, losses: 0, streak: 0, isBot: true },
      { id: 'bot_7', username: 'Yudhishthira', rating: 1450, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80', score: 0, wins: 0, draws: 0, losses: 0, streak: 0, isBot: true },
    ];

    const hostParticipant: TournamentParticipant = user ? {
      id: user.id,
      username: user.username,
      avatar: user.avatar,
      rating: user.stats.rapid,
      score: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      streak: 0,
    } : {
      id: 'guest',
      username: 'Guest Player',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      rating: 1200,
      score: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      streak: 0,
    };

    const newTour: Tournament = {
      id: `tour_${Date.now()}`,
      name,
      format,
      timeControl,
      totalRounds: format === 'knockout' ? 3 : totalRounds,
      currentRound: 0,
      status: 'upcoming',
      createdAt: dateFormatted,
      scheduledTime: `${dateFormatted} • ${timeFormatted}`,
      hostId: user ? user.id : 'guest',
      hostName: user ? user.username : 'Guest Player',
      isClubOnly: !!isClubOnly,
      clubId,
      clubName,
      participants: [hostParticipant, ...botParticipants.slice(0, format === 'knockout' ? 7 : (isClubOnly ? 3 : 7))],
      matches: []
    };

    setTournaments((prev) => [newTour, ...prev]);
    return newTour;
  };

  const joinTournament = (tournamentId: string, userClubIds?: string[]): JoinTournamentResult => {
    if (!user) {
      return { success: false, message: 'Please sign in to join tournaments.' };
    }

    const targetTour = tournaments.find((t) => t.id === tournamentId);
    if (!targetTour) {
      return { success: false, message: 'Tournament not found.' };
    }

    if (targetTour.status === 'completed') {
      return { success: false, message: 'This tournament has already ended.' };
    }

    if (targetTour.participants.some((p) => p.id === user.id)) {
      return { success: true, message: 'You are already registered in this tournament!' };
    }

    // Check Club-only restriction
    if (targetTour.isClubOnly && targetTour.clubId) {
      const isMember = userClubIds?.includes(targetTour.clubId) || targetTour.hostId === user.id;
      if (!isMember) {
        return {
          success: false,
          message: `Restricted: Only members of "${targetTour.clubName || 'the hosting club'}" can join this tournament.`
        };
      }
    }

    setTournaments((prev) =>
      prev.map((t) => {
        if (t.id === tournamentId) {
          return {
            ...t,
            participants: [
              ...t.participants,
              {
                id: user.id,
                username: user.username,
                avatar: user.avatar,
                rating: user.stats.rapid,
                score: 0,
                wins: 0,
                draws: 0,
                losses: 0,
                streak: 0
              }
            ]
          };
        }
        return t;
      })
    );

    return { success: true, message: `Successfully registered for "${targetTour.name}"!` };
  };

  const withdrawTournament = (tournamentId: string): { success: boolean; message: string } => {
    if (!user) {
      return { success: false, message: 'Please sign in to manage tournament registrations.' };
    }

    const targetTour = tournaments.find((t) => t.id === tournamentId);
    if (!targetTour) {
      return { success: false, message: 'Tournament not found.' };
    }

    if (targetTour.status === 'completed') {
      return { success: false, message: 'This tournament has already ended.' };
    }

    setTournaments((prev) =>
      prev.map((t) => {
        if (t.id === tournamentId) {
          if (t.status === 'upcoming') {
            return {
              ...t,
              participants: t.participants.filter((p) => p.id !== user.id)
            };
          } else {
            // Ongoing: mark user as withdrawn
            return {
              ...t,
              participants: t.participants.map((p) =>
                p.id === user.id ? { ...p, withdrawn: true } : p
              )
            };
          }
        }
        return t;
      })
    );

    return { success: true, message: `Successfully withdrawn from "${targetTour.name}".` };
  };

  const leaveTournament = withdrawTournament;

  const startTournament = (tournamentId: string) => {
    setTournaments((prev) =>
      prev.map((t) => {
        if (t.id === tournamentId) {
          return {
            ...t,
            status: 'ongoing',
            currentRound: 1,
          };
        }
        return t;
      })
    );
  };

  const simulateNextRound = (tournamentId: string) => {
    setTournaments((prev) =>
      prev.map((t) => {
        if (t.id === tournamentId) {
          const nextRound = t.currentRound + 1;
          const isFinal = nextRound > t.totalRounds;

          // Update scores procedurally
          const updatedParticipants = t.participants.map((p) => {
            if (p.isBot) {
              const outcome = Math.random();
              const scoreInc = outcome > 0.4 ? 1 : outcome > 0.2 ? 0.5 : 0;
              return {
                ...p,
                score: p.score + scoreInc,
                wins: p.wins + (scoreInc === 1 ? 1 : 0),
                draws: p.draws + (scoreInc === 0.5 ? 1 : 0),
                losses: p.losses + (scoreInc === 0 ? 1 : 0),
                streak: scoreInc === 1 ? p.streak + 1 : 0
              };
            }
            return p;
          });

          // Sort by score desc
          updatedParticipants.sort((a, b) => b.score - a.score || b.rating - a.rating);

          if (isFinal) {
            // Award medals for top 4
            const [gold, silver, bronze, brass] = updatedParticipants;
            
            // If user is in top 4, award tournament medal
            if (user) {
              const userIdx = updatedParticipants.findIndex((p) => p.id === user.id);
              if (userIdx >= 0 && userIdx < 4) {
                const tierMap: ('gold' | 'silver' | 'bronze' | 'brass')[] = ['gold', 'silver', 'bronze', 'brass'];
                const place = (userIdx + 1) as (1 | 2 | 3 | 4);
                awardTournamentMedal({
                  tournamentId: t.id,
                  tournamentName: t.name,
                  format: t.format,
                  tier: tierMap[userIdx],
                  placement: place,
                  dateTimeStr: t.scheduledTime
                });
              }
            }

            return {
              ...t,
              status: 'completed',
              currentRound: t.totalRounds,
              participants: updatedParticipants,
              winners: {
                gold: gold || updatedParticipants[0],
                silver: silver || updatedParticipants[1],
                bronze: bronze || updatedParticipants[2],
                brass: brass || updatedParticipants[3],
              }
            };
          }

          return {
            ...t,
            currentRound: nextRound,
            participants: updatedParticipants
          };
        }
        return t;
      })
    );
  };

  const completeTournament = (tournamentId: string) => {
    simulateNextRound(tournamentId);
  };

  return (
    <TournamentContext.Provider
      value={{
        tournaments,
        activeTournament,
        setActiveTournament,
        createTournament,
        joinTournament,
        leaveTournament,
        withdrawTournament,
        startTournament,
        simulateNextRound,
        completeTournament
      }}
    >
      {children}
    </TournamentContext.Provider>
  );
};

export const useTournaments = () => {
  const ctx = useContext(TournamentContext);
  if (!ctx) throw new Error('useTournaments must be used within a TournamentProvider');
  return ctx;
};

