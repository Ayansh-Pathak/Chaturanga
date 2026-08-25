import React, { useState } from 'react';
import { useClubs } from '../../context/ClubContext';
import { useAuth } from '../../context/AuthContext';
import { Club } from '../../types/chess';
import {
  Users,
  Shield,
  Crown,
  MessageSquare,
  Send,
  PlusCircle,
  Trophy,
  Sparkles,
  LogOut,
  UserPlus,
  Flame,
  Search,
  Lock,
  Unlock,
  KeyRound,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ClubsAndTeamsHub: React.FC = () => {
  const { clubs, createClub, joinClub, leaveClub, postMessage } = useClubs();
  const { user } = useAuth();

  const [filterType, setFilterType] = useState<'all' | 'clubs' | 'teams'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClub, setSelectedClub] = useState<Club>(clubs[0] || null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [chatInput, setChatInput] = useState('');

  // Password join modal state
  const [passwordModalClub, setPasswordModalClub] = useState<Club | null>(null);
  const [enteredJoinPassword, setEnteredJoinPassword] = useState('');
  const [joinError, setJoinError] = useState<string | null>(null);
  const [joinSuccess, setJoinSuccess] = useState<string | null>(null);

  // Create form
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');
  const [description, setDescription] = useState('');
  const [isTeam, setIsTeam] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [clubPassword, setClubPassword] = useState('');
  const [banner, setBanner] = useState('');

  const filteredClubs = clubs.filter((c) => {
    if (filterType === 'clubs' && c.isTeam) return false;
    if (filterType === 'teams' && !c.isTeam) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        c.name.toLowerCase().includes(q) ||
        c.tag.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !tag.trim()) return;

    const newClub = createClub(
      name.trim(),
      tag.trim(),
      description.trim(),
      isTeam,
      banner,
      isPrivate,
      clubPassword.trim()
    );
    setSelectedClub(newClub);
    setShowCreateModal(false);
    setName('');
    setTag('');
    setDescription('');
    setIsPrivate(false);
    setClubPassword('');

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {}
  };

  const handleJoinClick = (club: Club) => {
    if (club.isPrivate && club.password) {
      setPasswordModalClub(club);
      setEnteredJoinPassword('');
      setJoinError(null);
    } else {
      const res = joinClub(club.id);
      if (res.success) {
        setJoinSuccess(res.message);
        setTimeout(() => setJoinSuccess(null), 3000);
      } else {
        setJoinError(res.message);
      }
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordModalClub) return;

    const res = joinClub(passwordModalClub.id, enteredJoinPassword);
    if (res.success) {
      setJoinSuccess(res.message);
      setPasswordModalClub(null);
      setEnteredJoinPassword('');
      setJoinError(null);
      setTimeout(() => setJoinSuccess(null), 3000);
    } else {
      setJoinError(res.message);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || !selectedClub) return;
    postMessage(selectedClub.id, chatInput);
    setChatInput('');
  };

  const isMember = selectedClub?.members?.some((m) => m.userId === user?.id);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0c1427] via-[#0b1021] to-[#1f0f1e] border border-blue-500/30 shadow-[0_10px_35px_rgba(37,99,235,0.15)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2.5 mb-1">
            <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600 to-red-600 shadow-md">
              <Users className="text-white" size={24} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white font-cinzel">
              Clubs & Teams Arena
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Form mighty guilds, recruit fellow grandmasters, participate in team matches, join private factions via secret passwords, and compete on the global Chaturanga leaderboard.
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="relative z-10 flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-black text-xs sm:text-sm shadow-xl shadow-blue-600/20 transition-all active:scale-95 border border-blue-400/40"
        >
          <PlusCircle size={18} />
          <span>Create Club / Team</span>
        </button>
      </div>

      {joinSuccess && (
        <div className="p-3.5 rounded-2xl bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 text-xs font-bold flex items-center gap-2">
          <CheckCircle2 size={16} />
          <span>{joinSuccess}</span>
        </div>
      )}

      {/* Main Grid: Directory + Selected Club Wall */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Directory (4 Cols) */}
        <div className="lg:col-span-4 space-y-3">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-3.5 top-3 text-blue-400" size={15} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search clubs & teams directory..."
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#0c1222] border border-blue-500/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
            />
          </div>

          {/* Tabs */}
          <div className="flex gap-1.5 p-1 bg-[#090e1c] rounded-2xl border border-slate-800">
            {(['all', 'clubs', 'teams'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`flex-1 py-2 text-xs font-bold rounded-xl capitalize transition-all ${
                  filterType === t
                    ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* List */}
          <div className="space-y-2.5 max-h-[640px] overflow-y-auto pr-1">
            {filteredClubs.map((club) => {
              const isSelected = selectedClub?.id === club.id;
              return (
                <div
                  key={club.id}
                  onClick={() => setSelectedClub(club)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-br from-[#101b33] to-[#1e1026] border-blue-500/80 shadow-[0_0_20px_rgba(59,130,246,0.3)] ring-1 ring-blue-400/50'
                      : 'bg-[#0c1222] border-slate-800 hover:border-blue-500/40 hover:bg-[#11192e]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600/30 to-red-600/30 border border-blue-500/40 flex items-center justify-center text-xl shadow-inner">
                      {club.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold text-white truncate font-cinzel">
                          {club.name}
                        </h4>
                        <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300 border border-blue-500/40 uppercase">
                          [{club.tag}]
                        </span>
                        {club.isPrivate && (
                          <Lock size={12} className="text-amber-400" title="Password Protected" />
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 truncate">{club.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-400 mt-3 pt-2 border-t border-slate-800">
                    <span className="flex items-center gap-1">
                      <Users size={12} className="text-blue-400" />
                      {club.members.length} Members
                    </span>
                    <span className="flex items-center gap-1 text-red-400 font-semibold">
                      <Trophy size={12} /> {club.totalWins} Wins
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Club Detail View (8 Cols) */}
        {selectedClub && (
          <div className="lg:col-span-8 space-y-6">
            {/* Banner Card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0c1427] to-[#120e1e] border border-blue-500/30 shadow-2xl">
              <div className="h-36 w-full relative">
                <img
                  src={selectedClub.banner}
                  alt={selectedClub.name}
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1427] via-transparent to-transparent" />
              </div>

              <div className="p-6 -mt-12 relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#10192e] border-2 border-blue-400/80 shadow-2xl flex items-center justify-center text-3xl">
                    {selectedClub.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl sm:text-2xl font-black text-white font-cinzel">
                        {selectedClub.name}
                      </h2>
                      <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-sm">
                        {selectedClub.tag}
                      </span>
                      {selectedClub.isPrivate && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                          <Lock size={11} /> Password Protected
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-300 mt-1 max-w-xl">{selectedClub.description}</p>
                  </div>
                </div>

                {/* Membership Action */}
                <div>
                  {isMember ? (
                    <button
                      onClick={() => leaveClub(selectedClub.id)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-red-950/80 border border-slate-700 hover:border-red-500/60 text-slate-300 hover:text-red-300 text-xs font-bold transition-all"
                    >
                      <LogOut size={14} /> Leave
                    </button>
                  ) : (
                    <button
                      onClick={() => handleJoinClick(selectedClub)}
                      className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-black text-xs shadow-lg transition-all active:scale-95 border border-blue-400/30"
                    >
                      <UserPlus size={16} /> Join {selectedClub.isTeam ? 'Team' : 'Club'}
                    </button>
                  )}
                </div>
              </div>

              {/* Club Metrics */}
              <div className="grid grid-cols-3 border-t border-slate-800 divide-x divide-slate-800 bg-[#080d1a]/80 py-3 text-center text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Total Members</span>
                  <strong className="text-white text-sm">{selectedClub.members.length}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Tournament Victories</span>
                  <strong className="text-red-400 text-sm">🏆 {selectedClub.totalWins}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Leaderboard Rank</span>
                  <strong className="text-blue-300 text-sm">#1 Tier</strong>
                </div>
              </div>
            </div>

            {/* Two Column Section: Roster & Wall Chat */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Member Roster (5 Cols) */}
              <div className="md:col-span-5 p-5 rounded-2xl bg-gradient-to-b from-[#0c1427] to-[#120e1e] border border-blue-500/20 shadow-lg space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center justify-between">
                  <span>Guild Roster</span>
                  <span className="text-blue-400 font-mono">{selectedClub.members.length}</span>
                </h3>

                <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                  {selectedClub.members.map((m) => (
                    <div
                      key={m.userId}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#090e1c] border border-slate-800/80 hover:border-blue-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <img src={m.avatar} alt={m.username} className="w-7 h-7 rounded-lg object-cover" />
                        <div>
                          <div className="text-xs font-bold text-white flex items-center gap-1">
                            {m.username}
                            {m.role === 'owner' && <Crown size={12} className="text-amber-400" />}
                          </div>
                          <span className="text-[10px] text-blue-300 font-mono">⚡ {m.rating} Elo</span>
                        </div>
                      </div>

                      <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {m.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat & Discussion Wall (7 Cols) */}
              <div className="md:col-span-7 p-5 rounded-2xl bg-gradient-to-b from-[#0c1427] to-[#120e1e] border border-blue-500/20 shadow-lg flex flex-col justify-between h-[360px]">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
                    <MessageSquare size={14} className="text-red-400" />
                    Guild Wall & Strategy Chat
                  </h3>

                  <div className="space-y-2.5 overflow-y-auto max-h-56 pr-1">
                    {selectedClub.messages.map((msg) => (
                      <div key={msg.id} className="p-2.5 rounded-xl bg-[#090e1c] border border-slate-800/80 space-y-1">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="font-bold text-blue-300">{msg.authorName}</span>
                          <span className="text-slate-500">{msg.createdAt}</span>
                        </div>
                        <p className="text-xs text-slate-200">{msg.content}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <form onSubmit={handleSendMessage} className="pt-3 border-t border-slate-800 flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder={isMember ? 'Post announcement or message...' : 'Join to participate in chat'}
                    disabled={!isMember}
                    className="flex-1 px-3 py-2 rounded-xl bg-[#090e1c] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={!isMember || !chatInput.trim()}
                    className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white transition-all disabled:opacity-50"
                  >
                    <Send size={15} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Password Required to Join Modal */}
      {passwordModalClub && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-sm bg-gradient-to-b from-[#0e172a] to-[#160d24] border border-amber-500/40 rounded-3xl p-6 shadow-2xl">
            <h2 className="text-lg font-black text-white font-cinzel mb-2 flex items-center gap-2">
              <KeyRound className="text-amber-400" size={20} />
              Password Protected {passwordModalClub.isTeam ? 'Team' : 'Club'}
            </h2>
            <p className="text-xs text-slate-300 mb-4">
              Enter the secret password to join <strong>{passwordModalClub.name}</strong>.
            </p>

            {joinError && (
              <div className="p-2.5 rounded-xl bg-red-950/80 border border-red-500/60 text-red-300 text-xs font-semibold mb-3 flex items-center gap-2">
                <AlertCircle size={15} />
                <span>{joinError}</span>
              </div>
            )}

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={enteredJoinPassword}
                  onChange={(e) => setEnteredJoinPassword(e.target.value)}
                  placeholder="Enter club password..."
                  autoFocus
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0f1d] border border-amber-500/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setPasswordModalClub(null);
                    setJoinError(null);
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-black text-xs shadow-lg transition-all"
                >
                  Confirm & Join
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-gradient-to-b from-[#0e172a] to-[#160d24] border border-blue-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(59,130,246,0.3)] max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-black text-white font-cinzel mb-4 flex items-center gap-2">
              <Shield className="text-red-400" size={22} />
              Found a New Guild / Team
            </h2>

            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Organization Type</label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsTeam(false)}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                      !isTeam
                        ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    Social Club
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsTeam(true)}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                      isTeam
                        ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    Competitive Team
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Guild / Team Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Royal Gaja Brotherhood"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Tag (3-6 characters)</label>
                <input
                  type="text"
                  maxLength={6}
                  value={tag}
                  onChange={(e) => setTag(e.target.value.toUpperCase())}
                  placeholder="e.g. GAJA"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 uppercase font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Motto / Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your tactics and goals..."
                  rows={2}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                />
              </div>

              {/* Password Protection Option */}
              <div className="p-3.5 rounded-2xl bg-[#080d1a] border border-slate-800 space-y-2">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                    <Lock size={14} className="text-amber-400" />
                    Require Password to Join (Private Faction)
                  </span>
                  <input
                    type="checkbox"
                    checked={isPrivate}
                    onChange={(e) => setIsPrivate(e.target.checked)}
                    className="accent-amber-500"
                  />
                </label>

                {isPrivate && (
                  <input
                    type="password"
                    value={clubPassword}
                    onChange={(e) => setClubPassword(e.target.value)}
                    placeholder="Set secret password for members..."
                    required={isPrivate}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#0d1424] border border-amber-500/40 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                )}
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-black text-xs shadow-lg transition-all"
                >
                  Found Organization
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
