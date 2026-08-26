import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { TournamentMedal } from '../medals/TournamentMedal';
import { RatingMedal } from '../medals/RatingMedal';
import { GameReviewModal } from '../analysis/GameReviewModal';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import {
  Trophy,
  Crown,
  Award,
  Flame,
  Mail,
  Lock,
  ShieldCheck,
  History,
  TrendingUp,
  Sparkles,
  RefreshCw,
  Edit3,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Camera,
  Globe
} from 'lucide-react';

const PRESET_AVATARS = [
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
];

const COUNTRY_OPTIONS = [
  { name: 'India', flag: '🇮🇳' },
  { name: 'United States', flag: '🇺🇸' },
  { name: 'Norway', flag: '🇳🇴' },
  { name: 'Germany', flag: '🇩🇪' },
  { name: 'France', flag: '🇫🇷' },
  { name: 'Uzbekistan', flag: '🇺🇿' },
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'Canada', flag: '🇨🇦' },
  { name: 'Armenia', flag: '🇦🇲' },
  { name: 'Netherlands', flag: '🇳🇱' },
  { name: 'Poland', flag: '🇵🇱' },
  { name: 'China', flag: '🇨🇳' },
];

export const ProfilePage: React.FC = () => {
  const { user, updateEmail, revertEmail, updateProfile, gameHistory } = useAuth();

  const [activeSubTab, setActiveSubTab] = useState<'trophies' | 'ratings' | 'graph' | 'history' | 'settings'>('trophies');

  // Edit Profile modal state
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editUsername, setEditUsername] = useState(user?.username || '');
  const [editAvatar, setEditAvatar] = useState(user?.avatar || '');
  const [editCountry, setEditCountry] = useState(user?.country || 'India');
  const [editFlag, setEditFlag] = useState(user?.countryFlag || '🇮🇳');
  const [editBio, setEditBio] = useState(user?.bio || '');
  const [editTitle, setEditTitle] = useState(user?.title || 'Grandmaster of Chaturanga');

  // Email management states
  const [newEmail, setNewEmail] = useState('');
  const [oldEmailPassword, setOldEmailPassword] = useState('');
  const [revertPassword, setRevertPassword] = useState('');
  const [settingsMessage, setSettingsMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Game review modal state
  const [selectedGameForReview, setSelectedGameForReview] = useState<any | null>(null);

  if (!user) {
    return (
      <div className="w-full max-w-4xl mx-auto p-12 text-center text-slate-400">
        Please sign in to view your grandmaster profile, statistics, and medals cabinet.
      </div>
    );
  }

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      username: editUsername.trim() || user.username,
      avatar: editAvatar.trim() || user.avatar,
      country: editCountry,
      countryFlag: editFlag,
      bio: editBio.trim() || user.bio,
      title: editTitle.trim() || user.title,
    });
    setIsEditingProfile(false);
  };

  const handleEmailUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    const res = updateEmail(newEmail, oldEmailPassword);
    if (res.success) {
      setSettingsMessage({ text: res.message, type: 'success' });
      setNewEmail('');
      setOldEmailPassword('');
    } else {
      setSettingsMessage({ text: res.message, type: 'error' });
    }
  };

  const handleEmailRevert = (e: React.FormEvent) => {
    e.preventDefault();
    const res = revertEmail(revertPassword);
    if (res.success) {
      setSettingsMessage({ text: res.message, type: 'success' });
      setRevertPassword('');
    } else {
      setSettingsMessage({ text: res.message, type: 'error' });
    }
  };

  const winRate =
    user.stats.gamesPlayed > 0
      ? Math.round((user.stats.wins / user.stats.gamesPlayed) * 100)
      : 0;

  // Format rating history data for recharts
  const chartData = user.ratingHistory?.length
    ? user.ratingHistory
    : [
        { date: 'Aug 1', rapid: 1400, blitz: 1350, bullet: 1300, puzzle: 1450 },
        { date: 'Aug 8', rapid: 1480, blitz: 1420, bullet: 1370, puzzle: 1520 },
        { date: 'Aug 15', rapid: 1550, blitz: 1500, bullet: 1440, puzzle: 1610 },
        { date: 'Aug 22', rapid: 1610, blitz: 1550, bullet: 1490, puzzle: 1680 },
        { date: 'Aug 25', rapid: user.stats.rapid, blitz: user.stats.blitz, bullet: user.stats.bullet, puzzle: user.stats.puzzle },
      ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Profile Header Hero Card in Red & Blue Immersive Design */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0c1427] via-[#0b1021] to-[#1f0f1e] border border-blue-500/30 shadow-[0_10px_35px_rgba(37,99,235,0.2)] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="relative group">
              <img
                src={user.avatar}
                alt={user.username}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover ring-2 ring-blue-400/80 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              />
              <button
                onClick={() => setIsEditingProfile(true)}
                className="absolute inset-0 bg-black/60 rounded-2xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white text-xs font-bold gap-1"
                title="Edit avatar & profile"
              >
                <Camera size={16} />
              </button>
              <div className="absolute -bottom-2 -right-2 p-1.5 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-lg border border-red-300/40">
                <Crown size={18} fill="#fff" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-white font-cinzel tracking-wide flex items-center gap-2">
                  <span className="text-2xl" title={user.country || 'India'}>{user.countryFlag || '🇮🇳'}</span>
                  <span>{user.username}</span>
                </h1>
                <span className="text-xs font-black px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md border border-blue-300/30">
                  {user.title || 'Grandmaster of Chaturanga'}
                </span>
                <button
                  onClick={() => setIsEditingProfile(true)}
                  className="p-1 text-slate-400 hover:text-amber-400 transition-colors"
                  title="Customize Profile"
                >
                  <Edit3 size={16} />
                </button>
              </div>

              <p className="text-xs text-slate-300 max-w-lg leading-relaxed">{user.bio}</p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1 font-mono text-blue-300">
                  <Mail size={13} className="text-blue-400" /> {user.email}
                </span>
                <span className="flex items-center gap-1">
                  <Globe size={13} className="text-amber-400" /> {user.country || 'India'}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={13} className="text-slate-400" /> Joined {user.joinedDate}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 w-full md:w-auto">
            <div className="p-3.5 rounded-2xl bg-[#080d1a]/90 border border-red-500/30 text-center min-w-[95px] shadow-md">
              <span className="text-[10px] font-bold uppercase text-slate-400 block">Streak</span>
              <strong className="text-base font-black text-red-400 flex items-center justify-center gap-0.5">
                <Flame size={15} className="animate-pulse" /> {user.stats.currentStreak} 🔥
              </strong>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#080d1a]/90 border border-blue-500/30 text-center min-w-[95px] shadow-md">
              <span className="text-[10px] font-bold uppercase text-slate-400 block">Win Rate</span>
              <strong className="text-base font-black text-blue-400">{winRate}%</strong>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#080d1a]/90 border border-purple-500/30 text-center min-w-[95px] shadow-md">
              <span className="text-[10px] font-bold uppercase text-slate-400 block">Medals</span>
              <strong className="text-base font-black text-amber-300 flex items-center justify-center gap-0.5">
                <Trophy size={15} /> {user.tournamentMedals.length + user.ratingMedals.length}
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* Ratings Dashboard Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Rapid Rating', val: user.stats.rapid, icon: '⚡', color: 'text-blue-400', border: 'border-blue-500/30', desc: '10m - 15m' },
          { label: 'Blitz Rating', val: user.stats.blitz, icon: '🔥', color: 'text-red-400', border: 'border-red-500/30', desc: '3m - 5m' },
          { label: 'Bullet Rating', val: user.stats.bullet, icon: '🎯', color: 'text-purple-400', border: 'border-purple-500/30', desc: '1m - 2m' },
          { label: 'Puzzle Elo', val: user.stats.puzzle, icon: '🧩', color: 'text-cyan-400', border: 'border-cyan-500/30', desc: '5,000+ Tactical' },
        ].map((r, i) => (
          <div key={i} className={`p-4 rounded-2xl bg-gradient-to-b from-[#0c1427] to-[#090d1c] border ${r.border} shadow-lg space-y-1`}>
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span className="font-semibold">{r.label}</span>
              <span>{r.icon}</span>
            </div>
            <div className={`text-2xl font-black font-mono ${r.color}`}>{r.val}</div>
            <span className="text-[10px] text-slate-500 block">{r.desc}</span>
          </div>
        ))}
      </div>

      {/* Tab Controls */}
      <div className="flex flex-wrap border-b border-slate-800 gap-2 pb-2">
        <button
          onClick={() => setActiveSubTab('trophies')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeSubTab === 'trophies'
              ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md font-black border border-blue-400/40'
              : 'text-slate-400 hover:text-white bg-[#0c1222] border border-slate-800'
          }`}
        >
          <Trophy size={15} />
          <span>Tournament Medals ({user.tournamentMedals.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('ratings')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeSubTab === 'ratings'
              ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md font-black border border-blue-400/40'
              : 'text-slate-400 hover:text-white bg-[#0c1222] border border-slate-800'
          }`}
        >
          <Award size={15} />
          <span>Rating Milestones ({user.ratingMedals.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('graph')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeSubTab === 'graph'
              ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md font-black border border-blue-400/40'
              : 'text-slate-400 hover:text-white bg-[#0c1222] border border-slate-800'
          }`}
        >
          <TrendingUp size={15} />
          <span>Rating Progression Graph</span>
        </button>

        <button
          onClick={() => setActiveSubTab('history')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeSubTab === 'history'
              ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md font-black border border-blue-400/40'
              : 'text-slate-400 hover:text-white bg-[#0c1222] border border-slate-800'
          }`}
        >
          <History size={15} />
          <span>Match History ({gameHistory.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('settings')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeSubTab === 'settings'
              ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md font-black border border-blue-400/40'
              : 'text-slate-400 hover:text-white bg-[#0c1222] border border-slate-800'
          }`}
        >
          <ShieldCheck size={15} />
          <span>Email & Security</span>
        </button>
      </div>

      {/* TAB 1: TOURNAMENT MEDALS CABINET */}
      {activeSubTab === 'trophies' && (
        <div className="space-y-4">
          <div className="p-5 rounded-3xl bg-gradient-to-r from-[#0c1427] to-[#120e1e] border border-blue-500/30 shadow-lg">
            <h3 className="text-sm font-black text-white font-cinzel flex items-center gap-2">
              <Trophy className="text-amber-400" size={18} />
              Tournament Honors & Medals Showcase
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Official medals earned from Swiss, Arena, Round Robin, Double Round Robin, and Knockout championships.
              Each medal features the royal crown in the middle, tournament name and format, with date & time recorded. Click on any medal to flip and see details!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {user.tournamentMedals.map((medal) => (
              <TournamentMedal key={medal.id} medal={medal} size="md" />
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: RATING MILESTONE MEDALS */}
      {activeSubTab === 'ratings' && (
        <div className="space-y-4">
          <div className="p-5 rounded-3xl bg-gradient-to-r from-[#0c1427] to-[#120e1e] border border-red-500/30 shadow-lg">
            <h3 className="text-sm font-black text-white font-cinzel flex items-center gap-2">
              <Sparkles className="text-amber-400" size={18} />
              Elo Progression Milestone Medals
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Medals awarded for advancing ratings: Bronze for every 50 Elo gained, Silver for every 75 Elo gained, and Gold for every 100 Elo gained.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {user.ratingMedals.map((medal) => (
              <RatingMedal key={medal.id} medal={medal} size="md" />
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: RECHARTS RATING PROGRESSION GRAPH */}
      {activeSubTab === 'graph' && (
        <div className="space-y-4">
          <div className="p-6 rounded-3xl bg-[#0c1427] border border-blue-500/30 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-black text-white font-cinzel flex items-center gap-2">
                  <TrendingUp className="text-blue-400" size={18} />
                  Rating Progression Analytics
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Visualized tracking of your Rapid, Blitz, Bullet, and Puzzle ratings over time
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono font-bold">
                <span className="text-blue-400 flex items-center gap-1">● Rapid ({user.stats.rapid})</span>
                <span className="text-red-400 flex items-center gap-1">● Blitz ({user.stats.blitz})</span>
                <span className="text-purple-400 flex items-center gap-1">● Bullet ({user.stats.bullet})</span>
                <span className="text-cyan-400 flex items-center gap-1">● Puzzle ({user.stats.puzzle})</span>
              </div>
            </div>

            {/* Recharts Component */}
            <div className="h-80 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRapid" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorBlitz" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPuzzle" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="date" stroke="#64748b" textAnchor="end" tick={{ fontSize: 11 }} />
                  <YAxis domain={['dataMin - 100', 'dataMax + 100']} stroke="#64748b" tick={{ fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0f172a',
                      borderColor: '#334155',
                      borderRadius: '12px',
                      color: '#f8fafc',
                      fontSize: '12px',
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="rapid"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorRapid)"
                    name="Rapid Elo"
                  />
                  <Area
                    type="monotone"
                    dataKey="blitz"
                    stroke="#ef4444"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorBlitz)"
                    name="Blitz Elo"
                  />
                  <Area
                    type="monotone"
                    dataKey="puzzle"
                    stroke="#06b6d4"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorPuzzle)"
                    name="Puzzle Elo"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: MATCH HISTORY & GAME REVIEW */}
      {activeSubTab === 'history' && (
        <div className="space-y-3">
          <div className="overflow-x-auto rounded-3xl border border-blue-500/30 bg-[#0c1222] shadow-xl">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-[#080d1a] text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Mode / Event</th>
                  <th className="py-3 px-4">Opponent</th>
                  <th className="py-3 px-4">Result</th>
                  <th className="py-3 px-4">Time Control</th>
                  <th className="py-3 px-4">Moves</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4 text-right">Review with AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {gameHistory.map((game) => {
                  const isWhite = game.white.name === user.username;
                  const opponent = isWhite ? game.black : game.white;
                  const isWin = (game.result === '1-0' && isWhite) || (game.result === '0-1' && !isWhite);
                  const isDraw = game.result === '1/2-1/2';

                  return (
                    <tr key={game.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-white">
                        {game.tournamentName || (game.mode === 'rated' ? 'Rated Arena Match' : 'Practice')}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <img src={opponent.avatar} alt={opponent.name} className="w-6 h-6 rounded-full object-cover" />
                          <span className="font-bold text-slate-200">{opponent.name}</span>
                          <span className="text-[10px] text-slate-500 font-mono">({opponent.rating})</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                            isWin
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                              : isDraw
                              ? 'bg-slate-500/20 text-slate-300 border border-slate-500/40'
                              : 'bg-red-500/20 text-red-400 border border-red-500/40'
                          }`}
                        >
                          {isWin ? 'Victory' : isDraw ? 'Draw' : 'Defeat'} ({game.result})
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-mono text-slate-400">{game.timeControl}</td>
                      <td className="py-3.5 px-4 font-mono text-slate-400">{game.movesCount} moves</td>
                      <td className="py-3.5 px-4 text-slate-500 text-[11px]">{game.date}</td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => setSelectedGameForReview(game)}
                          className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-amber-600/20 hover:from-amber-500/30 hover:to-amber-600/30 text-amber-300 border border-amber-500/40 text-[11px] font-bold flex items-center gap-1 ml-auto transition-all"
                        >
                          <Sparkles size={12} />
                          <span>Review Game</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 5: EMAIL CHANGE & REVERSIBILITY SETTINGS */}
      {activeSubTab === 'settings' && (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0c1427] to-[#120e1e] border border-blue-500/30 shadow-2xl space-y-6">
            <div>
              <h3 className="text-base font-black text-white font-cinzel flex items-center gap-2">
                <ShieldCheck className="text-blue-400" size={20} />
                Email Management & Verification
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                As required by Chaturanga security protocol: update your email by verifying ownership using the current email's password on the new email form. All changes remain fully reversible.
              </p>
            </div>

            {settingsMessage && (
              <div
                className={`p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2 ${
                  settingsMessage.type === 'success'
                    ? 'bg-emerald-950/80 border border-emerald-500/60 text-emerald-300'
                    : 'bg-red-950/80 border border-red-500/60 text-red-300'
                }`}
              >
                {settingsMessage.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                <span>{settingsMessage.text}</span>
              </div>
            )}

            {/* Current Email Info */}
            <div className="p-4 rounded-2xl bg-[#080d1a] border border-blue-500/20 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Current Registered Email</span>
                <span className="text-sm font-bold text-blue-300 font-mono">{user.email}</span>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                Active & Verified
              </span>
            </div>

            {/* Change Email Form */}
            <form onSubmit={handleEmailUpdate} className="space-y-4 pt-2">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-200 flex items-center gap-2">
                <Edit3 size={14} className="text-blue-400" />
                Change to New Email Address
              </h4>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">New Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 text-blue-400" size={16} />
                  <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="new.grandmaster@chaturanga.org"
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#080d1a] border border-blue-500/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  Current Email Password <span className="text-blue-400 font-normal">(Required to verify ownership)</span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3 text-blue-400" size={16} />
                  <input
                    type="password"
                    value={oldEmailPassword}
                    onChange={(e) => setOldEmailPassword(e.target.value)}
                    placeholder="Enter password for current email"
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#080d1a] border border-blue-500/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-black text-xs shadow-lg transition-all active:scale-95 border border-blue-400/30"
              >
                Confirm & Update Email with Current Password
              </button>
            </form>

            {/* Reversible Action */}
            {user.previousEmail && (
              <form onSubmit={handleEmailRevert} className="pt-6 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black uppercase tracking-wider text-blue-300 flex items-center gap-1.5">
                    <RefreshCw size={14} /> Revert to Previous Email
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400">{user.previousEmail}</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">Password to Revert Back</label>
                  <input
                    type="password"
                    value={revertPassword}
                    onChange={(e) => setRevertPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#080d1a] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#111a30] hover:bg-[#162242] text-blue-300 font-bold text-xs border border-blue-500/40 transition-all"
                >
                  Restore Previous Email ({user.previousEmail})
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Edit Profile Modal */}
      {isEditingProfile && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#101422] border-2 border-amber-500/60 rounded-3xl w-full max-w-lg p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white font-cinzel flex items-center gap-2">
                <Edit3 className="text-amber-400" size={18} />
                Customize Player Profile
              </h3>
              <button
                onClick={() => setIsEditingProfile(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Username</label>
                <input
                  type="text"
                  value={editUsername}
                  onChange={(e) => setEditUsername(e.target.value)}
                  required
                  className="w-full px-3.5 py-2 rounded-xl bg-[#151a2b] border border-slate-700 text-xs text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Country & Flag</label>
                <select
                  value={`${editCountry}|${editFlag}`}
                  onChange={(e) => {
                    const [cName, cFlag] = e.target.value.split('|');
                    setEditCountry(cName);
                    setEditFlag(cFlag);
                  }}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#151a2b] border border-slate-700 text-xs text-white focus:border-amber-400 focus:outline-none"
                >
                  {COUNTRY_OPTIONS.map((c) => (
                    <option key={c.name} value={`${c.name}|${c.flag}`} className="bg-[#151a2b]">
                      {c.flag} {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Title</label>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#151a2b] border border-slate-700 text-xs text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Bio / Chess Philosophy</label>
                <textarea
                  rows={2}
                  value={editBio}
                  onChange={(e) => setEditBio(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#151a2b] border border-slate-700 text-xs text-white focus:border-amber-400 focus:outline-none resize-none"
                />
              </div>

              {/* Avatar Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">Choose Avatar</label>
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {PRESET_AVATARS.map((av, i) => (
                    <img
                      key={i}
                      src={av}
                      alt="Avatar option"
                      onClick={() => setEditAvatar(av)}
                      className={`w-12 h-12 rounded-xl object-cover cursor-pointer border-2 transition-all ${
                        editAvatar === av ? 'border-amber-400 scale-105 shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditingProfile(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-black text-xs shadow-lg"
                >
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Game Review Modal for Historic Game */}
      {selectedGameForReview && (
        <GameReviewModal
          isOpen={true}
          onClose={() => setSelectedGameForReview(null)}
          pgn={selectedGameForReview.pgn}
          whitePlayerName={selectedGameForReview.white.name}
          blackPlayerName={selectedGameForReview.black.name}
          whiteRating={selectedGameForReview.white.rating}
          blackRating={selectedGameForReview.black.rating}
          timeControl={selectedGameForReview.timeControl}
          gameResult={selectedGameForReview.result}
          reason={selectedGameForReview.reason}
        />
      )}
    </div>
  );
};
