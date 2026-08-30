import React, { createContext, useContext, useState, useEffect } from 'react';
import { Club, ClubMember, ClubMessage } from '../types/chess';
import { useAuth } from './AuthContext';
import { db } from './arena-init';
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  onSnapshot,
  query,
  arrayUnion,
  arrayRemove,
  getDoc,
  Timestamp,
  deleteDoc
} from 'firebase/firestore';

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
    password?: string,
    icon?: string
  ) => Promise<Club>;
  joinClub: (clubId: string, password?: string) => Promise<JoinClubResult>;
  leaveClub: (clubId: string) => Promise<void>;
  deleteClub: (clubId: string) => Promise<void>;
  updateClubIcon: (clubId: string, icon: string) => Promise<void>;
  updateClubBanner: (clubId: string, banner: string) => Promise<void>;
  updateMemberAvatar: (clubId: string, userId: string, newAvatar: string) => Promise<void>;
  postMessage: (clubId: string, text: string) => Promise<void>;
  getClubById: (clubId: string) => Club | undefined;
}

const initialClubs: Club[] = [];

const ClubContext = createContext<ClubContextType | undefined>(undefined);

export const ClubProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [clubs, setClubs] = useState<Club[]>([]);

  // Sync Clubs from Firestore
  useEffect(() => {
    const q = query(collection(db, 'clubs'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const clubsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Club[];
      setClubs(clubsData);
    });
    return unsubscribe;
  }, []);

  const createClub = async (
    name: string,
    tag: string,
    description: string,
    isTeam: boolean,
    banner: string,
    isPrivate: boolean = false,
    password: string = '',
    icon?: string
  ) => {
    const defaultBanner = isTeam
      ? 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=800&q=80'
      : 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80';

    const defaultIcon = isTeam ? '🛡️' : '👑';

    const newClubData: Omit<Club, 'id'> = {
      name,
      tag: tag.toUpperCase(),
      description,
      banner: banner || defaultBanner,
      icon: icon?.trim() ? icon.trim() : defaultIcon,
      isTeam,
      ownerId: user ? user.id : 'guest',
      ownerName: user ? user.username : 'Guest Player',
      createdAt: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      isPrivate,
      password: password.trim() || undefined,
      members: [
        {
          userId: user ? user.id : 'guest',
          username: user ? user.username : 'Guest Player',
          avatar: user ? user.avatar : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
          rating: user ? user.stats.rapid : 1200,
          role: 'owner',
          joinedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        }
      ],
      messages: [
        {
          id: `msg_${Date.now()}`,
          authorId: user ? user.id : 'guest',
          authorName: user ? user.username : 'Guest Player',
          authorAvatar: user ? user.avatar : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
          content: `Welcome to ${name}! Let the royal games begin.`,
          createdAt: 'Just now'
        }
      ],
      totalWins: 0,
      totalTournaments: 0
    };

    const docRef = await addDoc(collection(db, 'clubs'), newClubData);
    return { id: docRef.id, ...newClubData } as Club;
  };

  const joinClub = async (clubId: string, enteredPassword?: string): Promise<JoinClubResult> => {
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

    const newMember: ClubMember = {
      userId: user.id,
      username: user.username,
      avatar: user.avatar,
      rating: user.stats.rapid,
      role: 'member',
      joinedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    await updateDoc(doc(db, 'clubs', clubId), {
      members: arrayUnion(newMember)
    });

    return { success: true, message: `Successfully joined ${targetClub.name}!` };
  };

  const leaveClub = async (clubId: string) => {
    if (!user) return;
    const targetClub = clubs.find(c => c.id === clubId);
    if (!targetClub) return;

    const memberToRemove = targetClub.members.find(m => m.userId === user.id);
    if (!memberToRemove) return;

    await updateDoc(doc(db, 'clubs', clubId), {
      members: arrayRemove(memberToRemove)
    });
  };

  const postMessage = async (clubId: string, text: string) => {
    if (!user || !text.trim()) return;
    const newMsg: ClubMessage = {
      id: `msg_${Date.now()}`,
      authorId: user.id,
      authorName: user.username,
      authorAvatar: user.avatar,
      content: text.trim(),
      createdAt: 'Just now'
    };

    await updateDoc(doc(db, 'clubs', clubId), {
      messages: arrayUnion(newMsg)
    });
  };

  const getClubById = (clubId: string) => {
    return clubs.find((c) => c.id === clubId);
  };

  const deleteClub = async (clubId: string) => {
    await deleteDoc(doc(db, 'clubs', clubId));
  };

  const updateClubBanner = async (clubId: string, banner: string) => {
    await updateDoc(doc(db, 'clubs', clubId), { banner });
  };

  const updateClubIcon = async (clubId: string, icon: string) => {
    await updateDoc(doc(db, 'clubs', clubId), { icon });
  };

  const updateMemberAvatar = async (clubId: string, userId: string, newAvatar: string) => {
    const targetClub = clubs.find(c => c.id === clubId);
    if (!targetClub) return;

    const updatedMembers = targetClub.members.map(m =>
      m.userId === userId ? { ...m, avatar: newAvatar } : m
    );

    await updateDoc(doc(db, 'clubs', clubId), {
      members: updatedMembers
    });
  };

  return (
    <ClubContext.Provider
      value={{
        clubs,
        createClub,
        joinClub,
        leaveClub,
        deleteClub,
        updateClubIcon,
        updateClubBanner,
        updateMemberAvatar,
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
