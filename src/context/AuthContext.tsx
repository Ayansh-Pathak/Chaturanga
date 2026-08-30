import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, TournamentMedalData, GameRecord } from '../types/chess';
import confetti from 'canvas-confetti';
import { auth, db } from '../utils/arena-env';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateEmail as firebaseUpdateEmail
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp
} from 'firebase/firestore';
import { logger } from '@/src/utils/logger';

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (emailOrUser: string, pass: string) => Promise<{ success: boolean; message: string }>;
  signup: (username: string, email: string, pass: string, avatar: string, country?: string, countryFlag?: string) => Promise<{ success: boolean; message: string }>;
  logout: () => Promise<void>;
  updateEmail: (newEmail: string, currentPasswordRequired: string) => Promise<{ success: boolean; message: string }>;
  revertEmail: (currentPasswordRequired: string) => Promise<{ success: boolean; message: string }>;
  updateProfile: (updatedData: Partial<UserProfile>) => Promise<{ success: boolean; message: string }>;
  grantAnnouncerStatus: () => Promise<void>;
  updateRating: (category: 'rapid' | 'blitz' | 'bullet' | 'puzzle', delta: number) => Promise<void>;
  awardTournamentMedal: (medal: Omit<TournamentMedalData, 'id' | 'awardedTo' | 'awardedAt'>) => Promise<void>;
  addGameRecord: (record: Omit<GameRecord, 'id'>) => Promise<void>;
  completeDailyPuzzle: (puzzleId: number) => Promise<void>;
  gameHistory: GameRecord[];
  allUsers: UserProfile[];
  directMessages: import('../types/chess').DirectMessage[];
  chatHistory: { sender: string; text: string; time: string }[];
  setChatHistory: React.Dispatch<React.SetStateAction<{ sender: string; text: string; time: string }[]>>;
  sendDirectMessage: (recipientName: string, text: string) => { success: boolean; message: string };
}

const initialGameHistory: GameRecord[] = [];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const [gameHistory, setGameHistory] = useState<GameRecord[]>(() => {
    const saved = localStorage.getItem('chaturanga_game_history');
    return saved ? JSON.parse(saved) : initialGameHistory;
  });

  // Keep all stored users
  const [allUsers, setAllUsers] = useState<UserProfile[]>([]);

  const [chatHistory, setChatHistory] = useState<{ sender: string; text: string; time: string }[]>(() => {
    const saved = localStorage.getItem('chaturanga_chat_history');
    return saved ? JSON.parse(saved) : [];
  });

  // Sync with Firebase Auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Fetch profile from Firestore
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        if (userDoc.exists()) {
          const profile = userDoc.data() as UserProfile;
          // Persist announcer status across sessions
          if (localStorage.getItem(`chaturanga_announcer_${profile.id}`) === 'true') {
            profile.isAnnouncer = true;
          }
          setUser(profile);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Persist user and passwords
  useEffect(() => {
    if (user) {
      localStorage.setItem('chaturanga_active_user', JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('chaturanga_chat_history', JSON.stringify(chatHistory));
  }, [chatHistory]);

  useEffect(() => {
    localStorage.setItem('chaturanga_game_history', JSON.stringify(gameHistory));
  }, [gameHistory]);

  const login = async (emailOrUser: string, pass: string) => {
    if (!emailOrUser || !pass) {
      return { success: false, message: 'Please provide valid credentials.' };
    }

    const email = emailOrUser.includes('@') ? emailOrUser : `${emailOrUser}@chaturanga.app`;

    try {
      await signInWithEmailAndPassword(auth, email, pass);
      return { success: true, message: 'Welcome back to Chaturanga!' };
    } catch (error: any) {
      logger.error('Login error:', error);
      return { success: false, message: error.message || 'Login failed.' };
    }
  };

  const signup = async (username: string, email: string, pass: string, avatar: string) => {
    if (!username || !email || !pass) {
      return { success: false, message: 'All fields are required.' };
    }
    if (pass.length < 4) {
      return { success: false, message: 'Password must be at least 4 characters.' };
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      const newUser: UserProfile = {
        id: userCredential.user.uid,
        username,
        email,
        avatar: avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
        title: 'Novice of Chaturanga',
        bio: 'Practicing tactical maneuvers and king defenses.',
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        stats: {
          rapid: 1200,
          blitz: 1200,
          bullet: 1200,
          puzzle: 1200,
          gamesPlayed: 0,
          wins: 0,
          losses: 0,
          draws: 0,
          currentStreak: 0,
          bestStreak: 0,
          puzzlesSolved: 0,
          puzzleStreak: 0,
          bestPuzzleStreak: 0
        },
        ratingHistory: [
          { date: 'Today', rapid: 1200, blitz: 1200, bullet: 1200, puzzle: 1200 }
        ],
        tournamentMedals: [],
        ratingMedals: [],
        clubsJoined: [],
        teamsJoined: []
      };

      await setDoc(doc(db, 'users', userCredential.user.uid), newUser);
      return { success: true, message: 'Account created! Welcome to Chaturanga.' };
    } catch (error: any) {
      logger.error('Signup error:', error);
      return { success: false, message: error.message || 'Signup failed.' };
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    localStorage.removeItem('chaturanga_active_user');
  };

  // User spec: Email change option which works when you give the old email password via the new email side and is also reversible
  const updateEmail = async (newEmail: string, currentPasswordRequired: string) => {
    if (!user || !auth.currentUser) return { success: false, message: 'Not authenticated.' };
    if (!newEmail || !newEmail.includes('@')) {
      return { success: false, message: 'Please enter a valid new email address.' };
    }

    try {
      await firebaseUpdateEmail(auth.currentUser, newEmail);

      const oldEmail = user.email;
      const updatedProfile = {
        ...user,
        email: newEmail,
        previousEmail: oldEmail
      };

      await updateDoc(doc(db, 'users', auth.currentUser.uid), {
        email: newEmail,
        previousEmail: oldEmail
      });

      setUser(updatedProfile);
      return {
        success: true,
        message: `Email successfully updated from ${oldEmail} to ${newEmail}! (Reversible at any time)`
      };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  };

  const revertEmail = async (currentPasswordRequired: string) => {
    if (!user || !user.previousEmail || !auth.currentUser) {
      return { success: false, message: 'No previous email address found to revert to.' };
    }

    try {
      const restoredEmail = user.previousEmail;
      await firebaseUpdateEmail(auth.currentUser, restoredEmail);

      const oldCurrent = user.email;
      const updatedProfile = {
        ...user,
        email: restoredEmail,
        previousEmail: oldCurrent
      };

      await updateDoc(doc(db, 'users', auth.currentUser.uid), {
        email: restoredEmail,
        previousEmail: oldCurrent
      });

      setUser(updatedProfile);
      return {
        success: true,
        message: `Email successfully reverted back to ${restoredEmail}!`
      };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  };

  // Check and award Rating Milestones
  // Rule: Bronze for every 50 elo gained, silver for every 75 elo gained and gold for every 100 elo gained.
  const checkRatingMilestoneMedals = (currentUser: UserProfile, category: 'rapid' | 'blitz' | 'bullet' | 'puzzle', oldRating: number, newRating: number) => {
    if (newRating <= oldRating) return currentUser.ratingMedals;

    const updatedMedals = [...currentUser.ratingMedals];
    let newMedalAwarded = false;

    // Check 100-elo steps (Gold)
    for (let r = 1000; r <= newRating; r += 100) {
      if (oldRating < r && newRating >= r) {
        const id = `rm_gold_${category}_${r}`;
        if (!updatedMedals.some((m) => m.id === id)) {
          updatedMedals.push({
            id,
            ratingAchieved: r,
            category,
            tier: 'gold',
            message: `Congratulations for achieving ${r} rating!`,
            awardedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
          });
          newMedalAwarded = true;
        }
      }
    }

    // Check 75-elo steps (Silver)
    for (let r = 1075; r <= newRating; r += 75) {
      if (oldRating < r && newRating >= r && r % 100 !== 0) {
        const id = `rm_silver_${category}_${r}`;
        if (!updatedMedals.some((m) => m.id === id)) {
          updatedMedals.push({
            id,
            ratingAchieved: r,
            category,
            tier: 'silver',
            message: `Congratulations for achieving ${r} rating!`,
            awardedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
          });
          newMedalAwarded = true;
        }
      }
    }

    // Check 50-elo steps (Bronze)
    for (let r = 1050; r <= newRating; r += 50) {
      if (oldRating < r && newRating >= r && r % 100 !== 0 && r % 75 !== 0) {
        const id = `rm_bronze_${category}_${r}`;
        if (!updatedMedals.some((m) => m.id === id)) {
          updatedMedals.push({
            id,
            ratingAchieved: r,
            category,
            tier: 'bronze',
            message: `Congratulations for achieving ${r} rating!`,
            awardedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
          });
          newMedalAwarded = true;
        }
      }
    }

    if (newMedalAwarded) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // no-op
      }
    }

    return updatedMedals;
  };

  const updateRating = async (category: 'rapid' | 'blitz' | 'bullet' | 'puzzle', delta: number) => {
    if (!user) return;
    const oldVal = user.stats[category];
    const newVal = Math.max(400, oldVal + delta);

    const updatedMedals = checkRatingMilestoneMedals(user, category, oldVal, newVal);

    const updatedUser = {
      ...user,
      stats: {
        ...user.stats,
        [category]: newVal
      },
      ratingMedals: updatedMedals
    };

    setUser(updatedUser);
    await updateDoc(doc(db, 'users', user.id), {
      stats: updatedUser.stats,
      ratingMedals: updatedUser.ratingMedals
    });
  };

  const awardTournamentMedal = async (medalData: Omit<TournamentMedalData, 'id' | 'awardedTo' | 'awardedAt'>) => {
    if (!user) return;
    const newMedal: TournamentMedalData = {
      ...medalData,
      id: `tm_${Date.now()}`,
      awardedTo: user.username,
      awardedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    const updatedUser = {
      ...user,
      tournamentMedals: [newMedal, ...user.tournamentMedals]
    };

    setUser(updatedUser);
    await updateDoc(doc(db, 'users', user.id), {
      tournamentMedals: updatedUser.tournamentMedals
    });

    try {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.5 }
      });
    } catch {
      // no-op
    }
  };

  const addGameRecord = async (record: Omit<GameRecord, 'id'>) => {
    const newRecord: GameRecord = {
      ...record,
      id: `game_${Date.now()}`
    };
    setGameHistory((prev) => [newRecord, ...prev]);

    if (user) {
      const isWin = record.result === '1-0' && record.white.name === user.username || record.result === '0-1' && record.black.name === user.username;
      const isLoss = record.result === '1-0' && record.black.name === user.username || record.result === '0-1' && record.white.name === user.username;
      const isDraw = record.result === '1/2-1/2';

      const updatedStreak = isWin ? user.stats.currentStreak + 1 : (isLoss ? 0 : user.stats.currentStreak);
      const updatedBest = Math.max(user.stats.bestStreak, updatedStreak);

      const updatedUser = {
        ...user,
        stats: {
          ...user.stats,
          gamesPlayed: user.stats.gamesPlayed + 1,
          wins: user.stats.wins + (isWin ? 1 : 0),
          losses: user.stats.losses + (isLoss ? 1 : 0),
          draws: user.stats.draws + (isDraw ? 1 : 0),
          currentStreak: updatedStreak,
          bestStreak: updatedBest
        }
      };

      setUser(updatedUser);
      await updateDoc(doc(db, 'users', user.id), {
        stats: updatedUser.stats
      });
    }
  };

  const completeDailyPuzzle = async (puzzleId: number) => {
    if (!user) return;
    const today = new Date().toLocaleDateString();

    // Check if already completed today
    if (user.stats.lastPuzzleDate === today) return;

    const newStreak = user.stats.puzzleStreak + 1;
    const newBestStreak = Math.max(user.stats.bestPuzzleStreak, newStreak);

    const updatedUser = {
      ...user,
      stats: {
        ...user.stats,
        puzzlesSolved: user.stats.puzzlesSolved + 1,
        puzzleStreak: newStreak,
        bestPuzzleStreak: newBestStreak,
        lastPuzzleDate: today,
        lastPuzzleId: puzzleId
      }
    };

    setUser(updatedUser);
    await updateDoc(doc(db, 'users', user.id), {
      stats: updatedUser.stats
    });

    try {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.5 }
      });
    } catch {}
  };

  const [directMessages, setDirectMessages] = useState<import('../types/chess').DirectMessage[]>(() => {
    const saved = localStorage.getItem('chaturanga_direct_msgs');
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('chaturanga_direct_msgs', JSON.stringify(directMessages));
  }, [directMessages]);

  const updateProfile = async (updatedData: Partial<UserProfile>) => {
    if (!user) return { success: false, message: 'Not authenticated.' };
    const updated = {
      ...user,
      ...updatedData
    };
    setUser(updated);
    await updateDoc(doc(db, 'users', user.id), updatedData);
    return { success: true, message: 'Profile updated successfully!' };
  };

  const grantAnnouncerStatus = async () => {
    if (!user) return;
    const updated = { ...user, isAnnouncer: true };
    setUser(updated);
    await updateDoc(doc(db, 'users', user.id), { isAnnouncer: true });
    localStorage.setItem(`chaturanga_announcer_${user.id}`, 'true');
  };

  const sendDirectMessage = (recipientName: string, text: string) => {
    if (!user) return { success: false, message: 'Not logged in' };
    if (!text.trim() || !recipientName.trim()) return { success: false, message: 'Recipient and text are required' };

    const newMsg: import('../types/chess').DirectMessage = {
      id: `dm_${Date.now()}`,
      senderId: user.id,
      senderName: user.username,
      senderAvatar: user.avatar,
      senderFlag: user.countryFlag || '🇮🇳',
      recipientId: `recip_${recipientName.toLowerCase()}`,
      recipientName,
      content: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      read: true
    };

    setDirectMessages((prev) => [...prev, newMsg]);

    return { success: true, message: 'Message sent!' };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        updateEmail,
        revertEmail,
        updateProfile,
        grantAnnouncerStatus,
        updateRating,
        awardTournamentMedal,
        addGameRecord,
        completeDailyPuzzle,
        gameHistory,
        allUsers,
        directMessages,
        chatHistory,
        setChatHistory,
        sendDirectMessage
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
};
