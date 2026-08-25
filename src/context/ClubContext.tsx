import React, { createContext, useContext, useState, useEffect } from 'react';
import { Club, ClubMember, ClubMessage } from '../types/chess';
import { useAuth } from './AuthContext';

interface JoinClubResult {
  success: boolean;
  message: string;
}

interface ClubContextType {
  clubs: Club[];
  createClub: (
    name: string,
    tag: string,
    description: string,
    isTeam: boolean,
    banner: string,
    isPrivate?: boolean,
    password?: string
  ) => Club;
  joinClub: (clubId: string, password?: string) => JoinClubResult;
  leaveClub: (clubId: string) => void;
  postMessage: (clubId: string, text: string) => void;
  getClubById: (clubId: string) => Club | undefined;
}

const initialClubs: Club[] = [
  {
    id: 'club_1',
    name: 'Vajra Chess Brotherhood',
    tag: 'VAJRA',
    description: 'Premier grandmaster guild dedicated to mastery of the elephant bishop tactics, queen sacrifices, and Vedic endgame precision.',
    banner: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80',
    icon: '⚡',
    isTeam: false,
    ownerId: 'user_master_1',
    ownerName: 'ArjunaWarrior',
    createdAt: 'August 2026',
    isPrivate: false,
    members: [
      { userId: 'user_master_1', username: 'ArjunaWarrior', rating: 1650, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80', role: 'owner', joinedAt: 'Aug 1, 2026' },
      { userId: 'bot_1', username: 'Grandmaster Vishy', rating: 1720, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', role: 'admin', joinedAt: 'Aug 2, 2026' },
      { userId: 'bot_2', username: 'Sage Chanakya', rating: 1610, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', role: 'member', joinedAt: 'Aug 5, 2026' },
    ],
    messages: [
      { id: 'm1', authorId: 'user_master_1', authorName: 'ArjunaWarrior', authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80', content: 'Welcome all warriors to Vajra! Prepare for our upcoming Swiss Championship.', createdAt: 'Aug 24, 14:00' },
      { id: 'm2', authorId: 'bot_1', authorName: 'Grandmaster Vishy', authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', content: 'The elephant bishop maneuver on c4 proved unstoppable in yesterday’s rapid session.', createdAt: 'Aug 24, 16:30' }
    ],
    totalWins: 42,
    totalTournaments: 8
  },
  {
    id: 'team_1',
    name: 'Gaja Strikers Team',
    tag: 'GAJA',
    description: 'Competitive team representing ancient elephant tactics in inter-team leagues, rapid arenas, and knockout tournaments.',
    banner: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=800&q=80',
    icon: '🐘',
    isTeam: true,
    ownerId: 'user_master_1',
    ownerName: 'ArjunaWarrior',
    createdAt: 'August 2026',
    isPrivate: true,
    password: 'gaja',
    members: [
      { userId: 'user_master_1', username: 'ArjunaWarrior', rating: 1650, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80', role: 'owner', joinedAt: 'Aug 3, 2026' },
      { userId: 'bot_3', username: 'Gaja Tactician', rating: 1540, avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80', role: 'member', joinedAt: 'Aug 10, 2026' },
      { userId: 'bot_6', username: 'Drona Strategist', rating: 1680, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80', role: 'admin', joinedAt: 'Aug 12, 2026' },
    ],
    messages: [
      { id: 'tm1', authorId: 'user_master_1', authorName: 'ArjunaWarrior', authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80', content: 'Team battle scheduled for this weekend. Practice puzzle streaks!', createdAt: 'Aug 25, 09:15' }
    ],
    totalWins: 29,
    totalTournaments: 5
  },
  {
    id: 'club_2',
    name: 'Vedic Tacticians Academy',
    tag: 'VEDA',
    description: 'Deep study of Chaturanga openings, king fortress defenses, and classical puzzle training.',
    banner: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=80',
    icon: '📜',
    isTeam: false,
    ownerId: 'bot_2',
    ownerName: 'Sage Chanakya',
    createdAt: 'August 2026',
    isPrivate: false,
    members: [
      { userId: 'bot_2', username: 'Sage Chanakya', rating: 1610, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', role: 'owner', joinedAt: 'Aug 2, 2026' },
      { userId: 'user_master_1', username: 'ArjunaWarrior', rating: 1650, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80', role: 'member', joinedAt: 'Aug 4, 2026' }
    ],
    messages: [
      { id: 'vm1', authorId: 'bot_2', authorName: 'Sage Chanakya', authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', content: 'Remember: the center control decides 80% of royal battles.', createdAt: 'Aug 25, 11:20' }
    ],
    totalWins: 18,
    totalTournaments: 4
  }
];

const ClubContext = createContext<ClubContextType | undefined>(undefined);

export const ClubProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [clubs, setClubs] = useState<Club[]>(() => {
    const saved = localStorage.getItem('chaturanga_clubs');
    return saved ? JSON.parse(saved) : initialClubs;
  });

  useEffect(() => {
    localStorage.setItem('chaturanga_clubs', JSON.stringify(clubs));
  }, [clubs]);

  const createClub = (
    name: string,
    tag: string,
    description: string,
    isTeam: boolean,
    banner: string,
    isPrivate: boolean = false,
    password: string = ''
  ) => {
    const defaultBanner = isTeam
      ? 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=800&q=80'
      : 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80';

    const newClub: Club = {
      id: `${isTeam ? 'team' : 'club'}_${Date.now()}`,
      name,
      tag: tag.toUpperCase(),
      description,
      banner: banner || defaultBanner,
      icon: isTeam ? '🛡️' : '👑',
      isTeam,
      ownerId: user ? user.id : 'guest',
      ownerName: user ? user.username : 'ArjunaWarrior',
      createdAt: 'August 2026',
      isPrivate,
      password: password.trim() || undefined,
      members: [
        {
          userId: user ? user.id : 'guest',
          username: user ? user.username : 'ArjunaWarrior',
          avatar: user ? user.avatar : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
          rating: user ? user.stats.rapid : 1650,
          role: 'owner',
          joinedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        }
      ],
      messages: [
        {
          id: `msg_${Date.now()}`,
          authorId: user ? user.id : 'guest',
          authorName: user ? user.username : 'ArjunaWarrior',
          authorAvatar: user ? user.avatar : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
          content: `Welcome to ${name}! Let the royal games begin.`,
          createdAt: 'Just now'
        }
      ],
      totalWins: 0,
      totalTournaments: 0
    };

    setClubs((prev) => [newClub, ...prev]);
    return newClub;
  };

  const joinClub = (clubId: string, enteredPassword?: string): JoinClubResult => {
    if (!user) {
      return { success: false, message: 'Please sign in to join clubs or teams.' };
    }

    const targetClub = clubs.find((c) => c.id === clubId);
    if (!targetClub) {
      return { success: false, message: 'Club not found.' };
    }

    if (targetClub.members.some((m) => m.userId === user.id)) {
      return { success: true, message: 'Already a member.' };
    }

    if (targetClub.isPrivate && targetClub.password) {
      if (!enteredPassword || enteredPassword.trim() !== targetClub.password.trim()) {
        return { success: false, message: 'Incorrect club password. Please check and retry.' };
      }
    }

    setClubs((prev) =>
      prev.map((c) => {
        if (c.id === clubId) {
          const newMember: ClubMember = {
            userId: user.id,
            username: user.username,
            avatar: user.avatar,
            rating: user.stats.rapid,
            role: 'member',
            joinedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
          };
          return {
            ...c,
            members: [...c.members, newMember]
          };
        }
        return c;
      })
    );

    return { success: true, message: `Successfully joined ${targetClub.name}!` };
  };

  const leaveClub = (clubId: string) => {
    if (!user) return;
    setClubs((prev) =>
      prev.map((c) => {
        if (c.id === clubId) {
          return {
            ...c,
            members: c.members.filter((m) => m.userId !== user.id)
          };
        }
        return c;
      })
    );
  };

  const postMessage = (clubId: string, text: string) => {
    if (!user || !text.trim()) return;
    const newMsg: ClubMessage = {
      id: `msg_${Date.now()}`,
      authorId: user.id,
      authorName: user.username,
      authorAvatar: user.avatar,
      content: text.trim(),
      createdAt: 'Just now'
    };

    setClubs((prev) =>
      prev.map((c) => {
        if (c.id === clubId) {
          return {
            ...c,
            messages: [...c.messages, newMsg]
          };
        }
        return c;
      })
    );
  };

  const getClubById = (clubId: string) => {
    return clubs.find((c) => c.id === clubId);
  };

  return (
    <ClubContext.Provider
      value={{
        clubs,
        createClub,
        joinClub,
        leaveClub,
        postMessage,
        getClubById
      }}
    >
      {children}
    </ClubContext.Provider>
  );
};

export const useClubs = () => {
  const ctx = useContext(ClubContext);
  if (!ctx) throw new Error('useClubs must be used within a ClubProvider');
  return ctx;
};
