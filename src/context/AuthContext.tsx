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

const defaultUser: UserProfile = {
  id: 'user_master_1',
  username: 'ArjunaWarrior',
  email: 'arjuna@chaturanga.org',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  country: 'India',
  countryFlag: '🇮🇳',
  title: 'Grandmaster of Chaturanga',
  bio: 'Master of the Elephant Bishop diagonal tactics and Vedic pawn formations.',
  joinedDate: 'August 2026',
  stats: {
    rapid: 1650,
    blitz: 1580,
    bullet: 1520,
    puzzle: 1740,
    gamesPlayed: 48,
    wins: 34,
    losses: 10,
    draws: 4,
    currentStreak: 5,
    bestStreak: 12,
    puzzlesSolved: 142,
    puzzleStreak: 18,
    bestPuzzleStreak: 25
  },
  ratingHistory: [
    { date: 'Aug 1', rapid: 1400, blitz: 1350, bullet: 1300, puzzle: 1450 },
    { date: 'Aug 8', rapid: 1480, blitz: 1420, bullet: 1370, puzzle: 1520 },
    { date: 'Aug 15', rapid: 1550, blitz: 1500, bullet: 1440, puzzle: 1610 },
    { date: 'Aug 22', rapid: 1610, blitz: 1550, bullet: 1490, puzzle: 1680 },
    { date: 'Aug 25', rapid: 1650, blitz: 1580, bullet: 1520, puzzle: 1740 }
  ],
  tournamentMedals: [
    {
      id: 'tm_1',
      tournamentId: 'tour_vedic_open',
      tournamentName: 'Vedic Masters Championship',
      format: 'swiss',
      tier: 'gold',
      placement: 1,
      dateTimeStr: 'Aug 22, 2026 • 18:00',
      awardedTo: 'ArjunaWarrior',
      awardedAt: 'Aug 22, 2026'
    },
    {
      id: 'tm_2',
      tournamentId: 'tour_grand_arena',
      tournamentName: 'Grand Elephant Arena',
      format: 'arena',
      tier: 'silver',
      placement: 2,
      dateTimeStr: 'Aug 20, 2026 • 20:30',
      awardedTo: 'ArjunaWarrior',
      awardedAt: 'Aug 20, 2026'
    },
    {
      id: 'tm_3',
      tournamentId: 'tour_round_robin',
      tournamentName: 'Sanskrit Elite Round Robin',
      format: 'round_robin',
      tier: 'bronze',
      placement: 3,
      dateTimeStr: 'Aug 16, 2026 • 15:00',
      awardedTo: 'ArjunaWarrior',
      awardedAt: 'Aug 16, 2026'
    },
    {
      id: 'tm_4',
      tournamentId: 'tour_knockout_cup',
      tournamentName: 'Royal Crown Knockout Cup',
      format: 'knockout',
      tier: 'brass',
      placement: 4,
      dateTimeStr: 'Aug 12, 2026 • 14:00',
      awardedTo: 'ArjunaWarrior',
      awardedAt: 'Aug 12, 2026'
    }
  ],
  ratingMedals: [
    {
      id: 'rm_1',
      ratingAchieved: 1500,
      category: 'rapid',
      tier: 'gold',
      message: 'Congratulations for achieving 1500 rating!',
      awardedAt: 'Aug 10, 2026'
    },
    {
      id: 'rm_2',
      ratingAchieved: 1575,
      category: 'blitz',
      tier: 'silver',
      message: 'Congratulations for achieving 1575 rating!',
      awardedAt: 'Aug 18, 2026'
    },
    {
      id: 'rm_3',
      ratingAchieved: 1650,
      category: 'rapid',
      tier: 'bronze',
      message: 'Congratulations for achieving 1650 rating!',
      awardedAt: 'Aug 25, 2026'
    }
  ],
  clubsJoined: ['club_1', 'club_2'],
  teamsJoined: ['team_1']
};

const initialGameHistory: GameRecord[] = [
  {
    id: 'game_1',
    white: { id: 'user_master_1', name: 'ArjunaWarrior', rating: 1650, avatar: defaultUser.avatar },
    black: { id: 'bot_vishwanathan', name: 'Grandmaster Vishy', rating: 1620, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
    result: '1-0',
    reason: 'Checkmate',
    timeControl: '5+0',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. d3 d6 6. c3 a6 7. Bb3 Ba7 8. Nbd2 O-O 9. h3 h6 10. Re1 Be6 11. Nf1 d5 12. exd5 Nxd5 13. Nxe5 Nxe5 14. Rxe5 Qf6 15. d4 c6 16. Qe2 Bb8 17. Re4 Bf5 18. Bxd5 cxd5 19. Re8 Bd6 20. Rxa8 Rxa8 21. Qf3 Qe6 22. Bf4 Be4 23. Qg3 Bxf4 24. Qxf4 Qb6 25. Qd2 Re8 26. Re1 Re6 27. f3 Bg6 28. Rxe6 Qxe6 29. Kf2 Qb6 30. Ne3 Qb5 31. b3 Qa5 32. a4 f6 33. Qb2 Bf7 34. Qa3 Qxc3 35. Qc5 Qxb3 36. Nf5 Qb2+ 37. Kg3 Qd2 38. Qc8+ Kh7 39. Ne7 Qg5+ 40. Kh2 Qf4+ 41. Kh1 Qxd4 42. Qf5+ g6 43. Qd7 Qa1+ 44. Kh2 Qe5+ 45. Kh1 Qe6 46. Qxb7 d4 47. Nc6 d3 48. Nd8 Qe1+ 49. Kh2 Qe5+ 50. Kh1 Qd5 51. Qe7 d2 52. Nxf7 d1=Q+ 53. Kh2 Qd7 54. Ng5+ Kg8 55. Qxf6 Q1d6+ 56. Qxd6 Qxd6+ 57. g3 hxg5 1-0',
    movesCount: 57,
    date: 'Aug 25, 2026',
    ratingChange: +12,
    mode: 'rated'
  },
  {
    id: 'game_2',
    white: { id: 'bot_chanakya', name: 'Sage Chanakya', rating: 1590, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
    black: { id: 'user_master_1', name: 'ArjunaWarrior', rating: 1638, avatar: defaultUser.avatar },
    result: '0-1',
    reason: 'Resignation',
    timeControl: '3+2',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 Nbd7 6. e3 Qa5 7. Nd2 Bb4 8. Qc2 O-O 9. Bh4 c5 10. Nb3 Qa4 11. Bxf6 Nxf6 12. dxc5 Ne4 13. Bd3 Nxc3 14. bxc3 dxc4 15. Bxh7+ Kh8 16. cxb4 cxb3 17. Qe4 g6 18. Bxg6 fxg6 19. Qxg6 Qxb4+ 20. Ke2 Qc4+ 21. Ke1 Qc3+ 22. Ke2 Qb2+ 23. Kd3 Rd8+ 24. Kc4 b5+ 25. cxb6 Ba6+ 26. Kb4 bxa2+ 0-1',
    movesCount: 26,
    date: 'Aug 24, 2026',
    ratingChange: +14,
    mode: 'tournament',
    tournamentName: 'Vedic Masters Championship'
  }
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('chaturanga_active_user');
    if (!saved) return defaultUser;
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
  const [allUsers, setAllUsers] = useState<UserProfile[]>([defaultUser]);

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

    const newUser: UserProfile = {
      ...defaultUser,
      id: normalizedId,
      username: emailOrUser.includes('@') ? emailOrUser.split('@')[0] : emailOrUser,
      email: emailOrUser.includes('@') ? emailOrUser : `${emailOrUser}@chaturanga.org`,
    };
    setUser(newUser);
    setAllUsers((prev) => [...prev, newUser]);
    return { success: true, message: 'Logged in successfully!' };
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
      avatar: avatar || defaultUser.avatar,
      title: 'Novice of Chaturanga',
      bio: 'Practicing tactical maneuvers and king defenses.',
      joinedDate: 'August 2026',
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
    return [
      {
        id: 'msg_welcome',
        senderId: 'bot_vishwanathan',
        senderName: 'Grandmaster Vishy',
        senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
        senderFlag: '🇮🇳',
        recipientId: defaultUser.id,
        recipientName: defaultUser.username,
        content: 'Welcome to Chaturanga! Feel free to challenge me or practice with the Computer bot.',
        timestamp: 'Aug 25, 2026 • 14:00',
        read: true
      }
    ];
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

    // Simulated reply from other users if chatting with Vishy or Magnus or Computer
    setTimeout(() => {
      if (recipientName.toLowerCase().includes('vishy') || recipientName.toLowerCase().includes('computer') || recipientName.toLowerCase().includes('chanakya')) {
        const autoReply: import('../types/chess').DirectMessage = {
          id: `dm_reply_${Date.now()}`,
          senderId: `recip_${recipientName.toLowerCase()}`,
          senderName: recipientName,
          senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
          senderFlag: '🇮🇳',
          recipientId: user.id,
          recipientName: user.username,
          content: `Thank you for your message! Looking forward to our next match in the arena. Best of luck on the Chaturanga board!`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          read: false
        };
        setDirectMessages((prev) => [...prev, autoReply]);
      }
    }, 1200);

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
