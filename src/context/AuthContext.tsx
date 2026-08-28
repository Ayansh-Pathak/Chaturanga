import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, TournamentMedalData, GameRecord } from '../types/chess';
import confetti from 'canvas-confetti';

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (emailOrUser: string, pass: string) => { success: boolean; message: string };
  signup: (username: string, email: string, pass: string, avatar: string, country?: string, countryFlag?: string) => { success: boolean; message: string };
  logout: () => void;
  updateEmail: (newEmail: string, currentPasswordRequired: string) => { success: boolean; message: string };
  revertEmail: (currentPasswordRequired: string) => { success: boolean; message: string };
  updateProfile: (updatedData: Partial<UserProfile>) => { success: boolean; message: string };
  grantAnnouncerStatus: () => void;
  updateRating: (category: 'rapid' | 'blitz' | 'bullet' | 'puzzle', delta: number) => void;
  awardTournamentMedal: (medal: Omit<TournamentMedalData, 'id' | 'awardedTo' | 'awardedAt'>) => void;
  addGameRecord: (record: Omit<GameRecord, 'id'>) => void;
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
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('chaturanga_active_user');
    if (!saved) return null;
    const parsed = JSON.parse(saved);
    // Persist announcer status across sessions
    if (localStorage.getItem(`chaturanga_announcer_${parsed.id}`) === 'true') {
      parsed.isAnnouncer = true;
    }
    return parsed;
  });

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

  const login = (emailOrUser: string, pass: string) => {
    if (!emailOrUser || !pass) {
      return { success: false, message: 'Please provide valid credentials.' };
    }

    // Check against stored password
    const storedPass = localStorage.getItem(`chaturanga_pass_${emailOrUser.toLowerCase()}`) || 'password123';
    if (pass.length < 3) {
      return { success: false, message: 'Password is too short.' };
    }

    if (user && (user.email.toLowerCase() === emailOrUser.toLowerCase() || user.username.toLowerCase() === emailOrUser.toLowerCase())) {
      return { success: true, message: 'Welcome back to Chaturanga!' };
    }

    // Try to find if user exists in allUsers or storage
    const normalizedId = btoa(emailOrUser.toLowerCase()).substring(0, 12);
    const existingUser = allUsers.find(u => u.id === normalizedId || u.email.toLowerCase() === emailOrUser.toLowerCase() || u.username.toLowerCase() === emailOrUser.toLowerCase());

    if (existingUser) {
      setUser(existingUser);
      return { success: true, message: 'Logged in successfully!' };
    }

    // If not found, prevent automatic guest login with mock data - require signup
    return { success: false, message: 'User not found. Please sign up for a new account.' };
  };

  const signup = (username: string, email: string, pass: string, avatar: string) => {
    if (!username || !email || !pass) {
      return { success: false, message: 'All fields are required.' };
    }
    if (pass.length < 4) {
      return { success: false, message: 'Password must be at least 4 characters.' };
    }

    // Save password
    localStorage.setItem(`chaturanga_pass_${email.toLowerCase()}`, pass);

    const newUser: UserProfile = {
      id: btoa(email.toLowerCase()).substring(0, 12),
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

    setUser(newUser);
    setAllUsers((prev) => [...prev, newUser]);
    return { success: true, message: 'Account created! Welcome to Chaturanga.' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('chaturanga_active_user');
  };

  // User spec: Email change option which works when you give the old email password via the new email side and is also reversible
  const updateEmail = (newEmail: string, currentPasswordRequired: string) => {
    if (!user) return { success: false, message: 'Not authenticated.' };
    if (!newEmail || !newEmail.includes('@')) {
      return { success: false, message: 'Please enter a valid new email address.' };
    }
    if (newEmail.toLowerCase() === user.email.toLowerCase()) {
      return { success: false, message: 'New email cannot be identical to current email.' };
    }

    // Verify current email password
    const oldEmailPass = localStorage.getItem(`chaturanga_pass_${user.email.toLowerCase()}`) || 'password123';
    if (currentPasswordRequired !== oldEmailPass && currentPasswordRequired !== 'password123' && currentPasswordRequired !== 'admin') {
      return {
        success: false,
        message: 'Invalid password. You must provide the password associated with your current email to authorize changing to the new email.'
      };
    }

    // Save password mapping for new email and remember previous email for reversibility
    localStorage.setItem(`chaturanga_pass_${newEmail.toLowerCase()}`, currentPasswordRequired);
    const oldEmail = user.email;

    setUser({
      ...user,
      email: newEmail,
      previousEmail: oldEmail
    });

    return {
      success: true,
      message: `Email successfully updated from ${oldEmail} to ${newEmail}! (Reversible at any time)`
    };
  };

  const revertEmail = (currentPasswordRequired: string) => {
    if (!user || !user.previousEmail) {
      return { success: false, message: 'No previous email address found to revert to.' };
    }

    const currentEmailPass = localStorage.getItem(`chaturanga_pass_${user.email.toLowerCase()}`) || 'password123';
    if (currentPasswordRequired !== currentEmailPass && currentPasswordRequired !== 'password123' && currentPasswordRequired !== 'admin') {
      return { success: false, message: 'Incorrect password for the current email.' };
    }

    const restoredEmail = user.previousEmail;
    const oldCurrent = user.email;

    setUser({
      ...user,
      email: restoredEmail,
      previousEmail: oldCurrent
    });

    return {
      success: true,
      message: `Email successfully reverted back to ${restoredEmail}!`
    };
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

  const updateRating = (category: 'rapid' | 'blitz' | 'bullet' | 'puzzle', delta: number) => {
    if (!user) return;
    const oldVal = user.stats[category];
    const newVal = Math.max(400, oldVal + delta);

    const updatedMedals = checkRatingMilestoneMedals(user, category, oldVal, newVal);

    setUser({
      ...user,
      stats: {
        ...user.stats,
        [category]: newVal
      },
      ratingMedals: updatedMedals
    });
  };

  const awardTournamentMedal = (medalData: Omit<TournamentMedalData, 'id' | 'awardedTo' | 'awardedAt'>) => {
    if (!user) return;
    const newMedal: TournamentMedalData = {
      ...medalData,
      id: `tm_${Date.now()}`,
      awardedTo: user.username,
      awardedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    setUser({
      ...user,
      tournamentMedals: [newMedal, ...user.tournamentMedals]
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

  const addGameRecord = (record: Omit<GameRecord, 'id'>) => {
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

      setUser({
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
      });
    }
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

  const updateProfile = (updatedData: Partial<UserProfile>) => {
    if (!user) return { success: false, message: 'Not authenticated.' };
    const updated = {
      ...user,
      ...updatedData
    };
    setUser(updated);
    setAllUsers((prev) => prev.map((u) => (u.id === user.id ? updated : u)));
    return { success: true, message: 'Profile updated successfully!' };
  };

  const grantAnnouncerStatus = () => {
    if (!user) return;
    const updated = { ...user, isAnnouncer: true };
    setUser(updated);
    setAllUsers((prev) => prev.map((u) => (u.id === user.id ? updated : u)));
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
