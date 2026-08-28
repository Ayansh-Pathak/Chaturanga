import React, { createContext, useContext, useState, useEffect } from 'react';
import { Tournament, TournamentFormat, TimeControl, TournamentParticipant } from '../types/chess';
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
  rejoinTournament: (tournamentId: string) => { success: boolean; message: string };
  startTournament: (tournamentId: string) => void;
  simulateNextRound: (tournamentId: string) => void;
  completeTournament: (tournamentId: string) => void;
}

const initialTournaments: Tournament[] = [];

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

    const botParticipants: TournamentParticipant[] = [];

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
      participants: [hostParticipant],
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

  const rejoinTournament = (tournamentId: string): { success: boolean; message: string } => {
    if (!user) {
      return { success: false, message: 'Please sign in to manage tournament registrations.' };
    }
    setTournaments((prev) =>
      prev.map((t) => {
        if (t.id === tournamentId) {
          return {
            ...t,
            participants: t.participants.map((p) =>
              p.id === user.id ? { ...p, withdrawn: false } : p
            )
          };
        }
        return t;
      })
    );
    return { success: true, message: 'Successfully rejoined tournament.' };
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
            const hasMedals = updatedParticipants.length > 2;
            const [gold, silver, bronze, brass] = updatedParticipants;
            
            // Medals are strictly awarded only if there are MORE than 2 participants (no medals for 2-player tournaments)
            if (user && hasMedals) {
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
              winners: hasMedals ? {
                gold: gold || updatedParticipants[0],
                silver: silver || updatedParticipants[1],
                bronze: bronze || updatedParticipants[2],
                brass: brass || updatedParticipants[3],
              } : undefined
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
        rejoinTournament,
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
