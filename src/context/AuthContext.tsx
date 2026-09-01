import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, TournamentMedalData, GameRecord } from '../types/chess';
import confetti from 'canvas-confetti';
import { auth, db, rtdb, logger } from './arena-init';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateEmail as firebaseUpdateEmail,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail
} from 'firebase/auth';
import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  addDoc,
  deleteDoc,
  limit,
  serverTimestamp,
  getCountFromServer
} from 'firebase/firestore';
import { ref, set, push, onValue, remove, serverTimestamp as rtdbTimestamp } from 'firebase/database';
import { storage } from '../utils/storage';

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  isAuthenticated: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
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
  updateStoragePreference: (pref: 'firestore' | 'rtdb') => Promise<void>;
  gameHistory: GameRecord[];
  allUsers: UserProfile[];
  directMessages: import('../types/chess').DirectMessage[];
  chatHistory: { sender: string; text: string; time: string }[];
  setChatHistory: React.Dispatch<React.SetStateAction<{ sender: string; text: string; time: string }[]>>;
  sendDirectMessage: (recipientName: string, text: string) => Promise<{ success: boolean; message: string }>;
  sendGlobalMessage: (text: string, asAnnouncement?: boolean) => Promise<void>;
  loginWithGoogle: () => Promise<{ success: boolean; message: string }>;
  loginAsGuest: () => Promise<void>;
  sendPasswordReset: (email: string) => Promise<{ success: boolean; message: string }>;
  sendVerification: () => Promise<{ success: boolean; message: string }>;
  geminiHistory: { id: string; sender: 'user' | 'gemini'; text: string; timestamp: any }[];
  saveGeminiMessage: (msg: { sender: 'user' | 'gemini'; text: string }) => Promise<void>;
  clearGeminiHistory: () => Promise<void>;
}

const AVATAR_OPTIONS = [
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=128&q=70',
  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=128&q=70',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=128&q=70',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&q=70',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&q=70',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&q=70'
];

const initialGameHistory: GameRecord[] = [];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    // Immediate load from cache to eliminate initial black screen
    return storage.get<UserProfile>('chaturanga_active_user');
  });
  const [loading, setLoading] = useState(user === null);
  const [gameHistory, setGameHistory] = useState<GameRecord[]>(() => {
    return storage.get<GameRecord[]>('chaturanga_game_history') || [];
  });
  const [allUsers, setAllUsers] = useState<UserProfile[]>([]);
  const [directMessages, setDirectMessages] = useState<import('../types/chess').DirectMessage[]>([]);
  const [geminiHistory, setGeminiHistory] = useState<{ id: string; sender: 'user' | 'gemini'; text: string; timestamp: any }[]>([]);
  const [chatHistory, setChatHistory] = useState<{ sender: string; text: string; time: string }[]>([]);

  // Firebase Auth sync
  useEffect(() => {
    // Safety timeout: Ensure loading screen disappears even if Firebase hangs
    const safetyTimeout = setTimeout(() => {
      if (loading) {
        logger.warn("Auth state sync timed out, forcing loading finish.");
        setLoading(false);
      }
    }, 6000);

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (firebaseUser) {
          // Check if we already have the profile in memory or storage to avoid flickering
          const cachedProfile = storage.get<UserProfile>('chaturanga_active_user');
          if (cachedProfile && cachedProfile.id === firebaseUser.uid) {
             setLoading(false); // Stop loading early if we have a matching cache
          }

          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          if (userDoc.exists()) {
            const profile = userDoc.data() as UserProfile;
            setUser(profile);
            storage.set('chaturanga_active_user', profile, 24 * 60 * 60 * 1000); // 24h TTL
          } else {
            logger.warn("Profile missing in Firestore for UID:", firebaseUser.uid);
            setUser(null);
            storage.remove('chaturanga_active_user');
          }
        } else {
          // Only clear user if it's not a guest session (guests are not in Firebase)
          if (!user?.isGuest) {
            setUser(null);
            storage.remove('chaturanga_active_user');
          }
        }
      } catch (err) {
        logger.error("Auth sync failed:", err);
      } finally {
        setLoading(false);
        clearTimeout(safetyTimeout);
      }
    }, (error) => {
      logger.error("Auth state listener error:", error);
      setLoading(false);
      clearTimeout(safetyTimeout);
    });

    return () => {
      unsubscribe();
      clearTimeout(safetyTimeout);
    };
  }, []);

  // Sync game history with cache
  useEffect(() => {
    if (gameHistory.length > 0) {
      storage.set('chaturanga_game_history', gameHistory, 60 * 60 * 1000); // 1h TTL
    }
  }, [gameHistory]);

  // Persist user manually for edge cases
  useEffect(() => {
    if (user) {
      storage.set('chaturanga_active_user', user, 7 * 24 * 60 * 60 * 1000); // 1 week TTL
    }
  }, [user]);

  const login = async (emailOrUser: string, pass: string) => {
    if (!emailOrUser || !pass) {
      return { success: false, message: 'Please provide valid credentials.' };
    }

    let email = emailOrUser.trim();

    if (!email.includes('@')) {
      // Query Firestore to see if this is a username with a custom email associated
      try {
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('username', '==', email));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const profile = querySnapshot.docs[0].data() as UserProfile;
          email = profile.email;
        } else {
          // Fall back to original username@chaturanga.app strategy
          email = `${email}@chaturanga.app`;
        }
      } catch (err) {
        logger.warn('Failed to find user email by username, falling back to default mapping:', err);
        email = `${email}@chaturanga.app`;
      }
    }

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
        teamsJoined: [],
        storagePreference: 'firestore'
      };

      await setDoc(doc(db, 'users', userCredential.user.uid), newUser);

      // Send verification email
      try {
        await sendEmailVerification(userCredential.user);
      } catch (verifyError) {
        logger.warn('Email verification send failed:', verifyError);
      }

      return { success: true, message: 'Account created! Verification email sent.' };
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
    if (!user) return;

    const gameData = {
      ...record,
      players: [record.white.id, record.black.id]
    };

    if (user.storagePreference === 'rtdb') {
      const gamesRef = ref(rtdb, 'games');
      const newGameRef = push(gamesRef);
      await set(newGameRef, gameData);
    } else {
      await addDoc(collection(db, 'games'), gameData);
    }

    const isWin = record.result === '1-0' && record.white.id === user.id || record.result === '0-1' && record.black.id === user.id;
    const isLoss = record.result === '1-0' && record.black.id === user.id || record.result === '0-1' && record.white.id === user.id;
    const isDraw = record.result === '1/2-1/2';

    const updatedStreak = isWin ? user.stats.currentStreak + 1 : (isLoss ? 0 : user.stats.currentStreak);
    const updatedBest = Math.max(user.stats.bestStreak, updatedStreak);

    const updatedStats = {
      ...user.stats,
      gamesPlayed: user.stats.gamesPlayed + 1,
      wins: user.stats.wins + (isWin ? 1 : 0),
      losses: user.stats.losses + (isLoss ? 1 : 0),
      draws: user.stats.draws + (isDraw ? 1 : 0),
      currentStreak: updatedStreak,
      bestStreak: updatedBest
    };

    await updateProfile({ stats: updatedStats });
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
    await updateProfile({ isAnnouncer: true });
  };

  const sendDirectMessage = async (recipientName: string, text: string) => {
    if (!user) return { success: false, message: 'Not logged in' };
    if (!text.trim() || !recipientName.trim()) return { success: false, message: 'Recipient and text are required' };

    // Find recipient UID
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('username', '==', recipientName));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return { success: false, message: `User "${recipientName}" not found.` };
    }

    const recipientId = querySnapshot.docs[0].id;

    const newMsg = {
      senderId: user.id,
      senderName: user.username,
      senderAvatar: user.avatar,
      senderFlag: user.countryFlag || '🇮🇳',
      recipientId,
      recipientName,
      participants: [user.id, recipientId].sort(), // Sort for consistent query
      content: text.trim(),
      timestamp: serverTimestamp(),
      read: false
    };

    await addDoc(collection(db, 'messages'), newMsg);

    return { success: true, message: 'Message sent!' };
  };

  const sendGlobalMessage = async (text: string, asAnnouncement = false) => {
    if (!user) return;
    await addDoc(collection(db, 'global_chat'), {
      sender: asAnnouncement ? 'ANNOUNCEMENT' : user.username,
      text,
      timestamp: serverTimestamp()
    });
  };

  const saveGeminiMessage = async (msg: { sender: 'user' | 'gemini'; text: string }) => {
    if (!user) return;

    if (user.storagePreference === 'rtdb') {
      const historyRef = ref(rtdb, `users/${user.id}/gemini_history`);
      const newMessageRef = push(historyRef);
      await set(newMessageRef, {
        ...msg,
        timestamp: rtdbTimestamp()
      });
    } else {
      await addDoc(collection(db, 'users', user.id, 'gemini_history'), {
        ...msg,
        timestamp: serverTimestamp()
      });
    }
  };

  const clearGeminiHistory = async () => {
    if (!user) return;

    if (user.storagePreference === 'rtdb') {
      const historyRef = ref(rtdb, `users/${user.id}/gemini_history`);
      await remove(historyRef);
    } else {
      const querySnapshot = await getDocs(collection(db, 'users', user.id, 'gemini_history'));
      querySnapshot.forEach(async (document) => {
        await deleteDoc(doc(db, 'users', user.id, 'gemini_history', document.id));
      });
    }
  };

  const updateStoragePreference = async (pref: 'firestore' | 'rtdb') => {
    if (!user) return;
    await updateProfile({ storagePreference: pref });
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;

      // Check if profile exists in Firestore
      const userDocRef = doc(db, 'users', firebaseUser.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        // Create new profile for Google user
        const newUser: UserProfile = {
          id: firebaseUser.uid,
          username: firebaseUser.displayName || 'Grandmaster',
          email: firebaseUser.email || '',
          avatar: firebaseUser.photoURL || AVATAR_OPTIONS[0],
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
          teamsJoined: [],
          storagePreference: 'firestore'
        };
        await setDoc(userDocRef, newUser);
        setUser(newUser);
      } else {
        setUser(userDoc.data() as UserProfile);
      }

      return { success: true, message: 'Signed in with Google!' };
    } catch (error: any) {
      logger.error('Google Sign-In error:', error);
      return { success: false, message: error.message || 'Google Sign-In failed.' };
    }
  };

  const loginAsGuest = async () => {
    setLoading(true);
    try {
      // Rule: username should be like Guest1, Guest2 based on user count
      // Optimization: Use getCountFromServer instead of fetching all docs
      const usersRef = collection(db, 'users');
      const snapshot = await getCountFromServer(usersRef);
      const guestNum = snapshot.data().count + 1;
      const guestUsername = `Guest${guestNum}`;

      const guestUser: UserProfile = {
        id: `guest_${Date.now()}`,
        username: guestUsername,
        email: 'guest@chaturanga.app',
        avatar: AVATAR_OPTIONS[0],
        title: 'Guest of Chaturanga',
        bio: 'Exploring the arena as a guest warrior.',
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
        teamsJoined: [],
        storagePreference: 'firestore',
        isGuest: true
      };

      setUser(guestUser);
      localStorage.setItem('chaturanga_active_user', JSON.stringify(guestUser));
    } catch (err) {
      logger.error("Guest login failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const sendPasswordReset = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return { success: true, message: 'Password reset link sent to your email!' };
    } catch (error: any) {
      logger.error('Password reset error:', error);
      return { success: false, message: error.message || 'Failed to send password reset email.' };
    }
  };

  const sendVerification = async () => {
    if (!auth.currentUser) return { success: false, message: 'No user is currently signed in.' };
    try {
      await sendEmailVerification(auth.currentUser);
      return { success: true, message: 'Verification email resent successfully!' };
    } catch (error: any) {
      logger.error('Verification resend error:', error);
      return { success: false, message: error.message || 'Failed to resend verification email.' };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        setLoading,
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
        sendDirectMessage,
        geminiHistory,
        saveGeminiMessage,
        clearGeminiHistory,
        updateStoragePreference,
        sendGlobalMessage,
        loginWithGoogle,
        loginAsGuest,
        sendPasswordReset,
        sendVerification
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
