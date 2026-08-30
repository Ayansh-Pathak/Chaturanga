import React, { createContext, useContext, useState, useEffect } from 'react';
import { Tournament, TournamentFormat, TimeControl, TournamentParticipant } from '../types/chess';
import { useAuth } from './AuthContext';
import { db } from './arena-init';
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  arrayUnion,
  arrayRemove,
  getDoc,
  Timestamp,
  deleteDoc
} from 'firebase/firestore';

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
  }) => Promise<Tournament>;
  joinTournament: (tournamentId: string, userClubIds?: string[]) => Promise<JoinTournamentResult>;
  leaveTournament: (tournamentId: string) => Promise<{ success: boolean; message: string }>;
  withdrawTournament: (tournamentId: string) => Promise<{ success: boolean; message: string }>;
  rejoinTournament: (tournamentId: string) => Promise<{ success: boolean; message: string }>;
  startTournament: (tournamentId: string) => Promise<void>;
  simulateNextRound: (tournamentId: string) => Promise<void>;
  completeTournament: (tournamentId: string) => Promise<void>;
}

const initialTournaments: Tournament[] = [];

const TournamentContext = createContext<TournamentContextType | undefined>(undefined);

export const TournamentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, awardTournamentMedal } = useAuth();
  const [tournaments, setTournaments] = useState<Tournament[]>([]);

  const [activeTournament, setActiveTournament] = useState<Tournament | null>(null);

  // Sync Tournaments from Firestore
  useEffect(() => {
    const q = query(collection(db, 'tournaments'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Tournament[];
      setTournaments(data);
    });
    return unsubscribe;
  }, []);

  const createTournament = async ({
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

    const newTourData: Omit<Tournament, 'id'> = {
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

    const docRef = await addDoc(collection(db, 'tournaments'), newTourData);
    return { id: docRef.id, ...newTourData } as Tournament;
  };

  const joinTournament = async (tournamentId: string, userClubIds?: string[]): Promise<JoinTournamentResult> => {
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

    const newParticipant: TournamentParticipant = {
      id: user.id,
      username: user.username,
      avatar: user.avatar,
      rating: user.stats.rapid,
      score: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      streak: 0
    };

    await updateDoc(doc(db, 'tournaments', tournamentId), {
      participants: arrayUnion(newParticipant)
    });

    return { success: true, message: `Successfully registered for "${targetTour.name}"!` };
  };

  const withdrawTournament = async (tournamentId: string): Promise<{ success: boolean; message: string }> => {
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

    if (targetTour.status === 'upcoming') {
      const participantToRemove = targetTour.participants.find(p => p.id === user.id);
      if (participantToRemove) {
        await updateDoc(doc(db, 'tournaments', tournamentId), {
          participants: arrayRemove(participantToRemove)
        });
      }
    } else {
      // Ongoing: mark user as withdrawn
      const updatedParticipants = targetTour.participants.map((p) =>
        p.id === user.id ? { ...p, withdrawn: true } : p
      );
      await updateDoc(doc(db, 'tournaments', tournamentId), {
        participants: updatedParticipants
      });
    }

    return { success: true, message: `Successfully withdrawn from "${targetTour.name}".` };
  };

  const rejoinTournament = async (tournamentId: string): Promise<{ success: boolean; message: string }> => {
    if (!user) {
      return { success: false, message: 'Please sign in to manage tournament registrations.' };
    }
    const targetTour = tournaments.find(t => t.id === tournamentId);
    if (!targetTour) return { success: false, message: 'Tournament not found' };

    const updatedParticipants = targetTour.participants.map((p) =>
      p.id === user.id ? { ...p, withdrawn: false } : p
    );

    await updateDoc(doc(db, 'tournaments', tournamentId), {
      participants: updatedParticipants
    });

    return { success: true, message: 'Successfully rejoined tournament.' };
  };

  const leaveTournament = withdrawTournament;

  const startTournament = async (tournamentId: string) => {
    await updateDoc(doc(db, 'tournaments', tournamentId), {
      status: 'ongoing',
      currentRound: 1,
    });
  };

  const simulateNextRound = async (tournamentId: string) => {
    const t = tournaments.find(tour => tour.id === tournamentId);
    if (!t) return;

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

      await updateDoc(doc(db, 'tournaments', tournamentId), {
        status: 'completed',
        currentRound: t.totalRounds,
        participants: updatedParticipants,
        winners: hasMedals ? {
          gold: gold || updatedParticipants[0],
          silver: silver || updatedParticipants[1],
          bronze: bronze || updatedParticipants[2],
          brass: brass || updatedParticipants[3],
        } : undefined
      });
    } else {
      await updateDoc(doc(db, 'tournaments', tournamentId), {
        currentRound: nextRound,
        participants: updatedParticipants
      });
    }
  };

  const completeTournament = async (tournamentId: string) => {
    await simulateNextRound(tournamentId);
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
