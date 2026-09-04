import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Crown, Swords, Puzzle, Trophy, Users, MessageSquare, Flame, LogIn, BookOpen } from 'lucide-react';

interface NavbarProps {
  activeTab: 'play' | 'puzzles' | 'tournaments' | 'clubs' | 'chat' | 'feedback' | 'profile' | 'library';
  setActiveTab: (tab: 'play' | 'puzzles' | 'tournaments' | 'clubs' | 'chat' | 'feedback' | 'profile' | 'library') => void;
  onOpenAuth: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenAuth,
}) => {
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'play' as const, label: 'Play Arena', icon: <Swords size={17} /> },
    { id: 'puzzles' as const, label: '5000+ Puzzles', icon: <Puzzle size={17} />, badge: '5K+' },
    { id: 'tournaments' as const, label: 'Tournaments', icon: <Trophy size={17} /> },
    { id: 'clubs' as const, label: 'Clubs & Teams', icon: <Users size={17} /> },
    { id: 'chat' as const, label: 'Player Chat', icon: <MessageSquare size={17} /> },
    { id: 'feedback' as const, label: 'Feedback', icon: <MessageSquare size={17} /> },
    { id: 'profile' as const, label: 'Profile & Medals', icon: <Crown size={17} /> },
    { id: 'library' as const, label: 'Library', icon: <BookOpen size={17} /> },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#080d1a]/95 border-b border-[#1e293b] backdrop-blur-md shadow-[0_4px_25px_rgba(37,99,235,0.12)]">
      {/* Top dual red & blue accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-red-600 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* LOGO: "Chaturanga" with "चतुरङ्ग" in Sanskrit written under it */}
        <button
          onClick={() => setActiveTab('play')}
          className="flex items-center gap-3 cursor-pointer group select-none bg-transparent border-none p-0 text-left outline-none"
          aria-label="Chaturanga Home"
        >
          {/* Custom Royal Red & Blue Shield Icon */}
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-red-600 p-[2px] shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-transform group-hover:scale-105">
            <div className="w-full h-full rounded-[10px] bg-[#0b1021] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-radial from-blue-500/20 to-red-500/10 opacity-70 pointer-events-none" />
              <img
                src="/chaturanga-crown.png"
                alt="Crown"
                className="w-7 h-7 object-contain drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const fallback = (e.target as HTMLImageElement).nextElementSibling;
                  if (fallback) (fallback as HTMLElement).style.display = 'block';
                }}
              />
              <div className="hidden">
                <Crown size={22} className="text-amber-400" fill="#fbbf24" />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:hidden">
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-red-400 font-cinzel leading-none">
                CHATURANGA
              </span>
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            </div>
            {/* Chess in Sanskrit written under chaturanga */}
            <span className="text-[11px] sm:text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-red-300 font-sanskrit tracking-widest mt-0.5 leading-none">
              चतुरङ्गम् • The Grand Chess Arena
            </span>
          </div>

          {/* Desktop/Tablet Logo Image */}
          <div className="hidden md:block">
            <img
              src="/chaturanga-logo.png"
              alt="Chaturanga Grand Chess Arena"
              className="h-10 sm:h-12 w-auto object-contain"
              onError={(e) => {
                // Fallback if image doesn't exist
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).parentElement?.classList.add('flex-col');
                const textFallback = (e.target as HTMLImageElement).nextElementSibling;
                if (textFallback) (textFallback as HTMLElement).style.display = 'flex';
              }}
            />
            {/* Hidden fallback text for desktop if image fails */}
            <div className="hidden flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-red-400 font-cinzel leading-none">
                  CHATURANGA
                </span>
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              </div>
              <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-red-300 font-sanskrit tracking-widest mt-0.5 leading-none">
                चतुरङ्गम् • The Grand Chess Arena
              </span>
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-blue-900/60 to-red-950/60 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                    : 'text-slate-300 hover:text-white hover:bg-[#111827]/80 hover:border-slate-700/50 border border-transparent'
                }`}
              >
                <span className={isActive ? 'text-blue-400' : 'text-slate-400'}>{item.icon}</span>
                <span>{item.label}</span>
                {item.badge && (
                  <span className="px-1.5 py-0.2 text-[10px] font-black uppercase bg-gradient-to-r from-blue-500 to-red-500 text-white rounded-full shadow-sm">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* User Account / Quick Stats */}
        <div className="flex items-center gap-3">
          {user ? (
            <button
              onClick={() => setActiveTab('profile')}
              className="flex items-center gap-2.5 p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-gradient-to-r from-[#0c1427] to-[#1a0f1e] border border-blue-500/30 hover:border-red-500/50 transition-all cursor-pointer group shadow-[0_0_12px_rgba(59,130,246,0.15)] text-left outline-none"
              type="button"
            >
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-8 h-8 rounded-lg object-cover ring-2 ring-blue-500/70 group-hover:ring-red-500/80 transition-all"
                />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-gradient-to-br from-blue-500 to-red-500 rounded-full border-2 border-[#0b1021] flex items-center justify-center text-[7px] font-black text-white">
                  ★
                </span>
              </div>

              <div className="hidden sm:flex flex-col text-left">
                <span className="text-xs font-bold text-slate-100 group-hover:text-blue-300 transition-colors leading-tight flex items-center gap-1.5">
                  <span>{user.countryFlag || '🇮🇳'}</span>
                  <span>{user.username}</span>
                </span>
                <div className="flex items-center gap-2 text-[10px] font-semibold">
                  <span className="text-blue-400 flex items-center gap-0.5">⚡ {user.stats.rapid} Elo</span>
                  <span className="flex items-center gap-0.5 text-red-400 font-bold">
                    <Flame size={10} /> {user.stats.currentStreak}
                  </span>
                </div>
              </div>
            </button>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all active:scale-95 border border-blue-400/30"
            >
              <LogIn size={15} />
              <span>Login / Signup</span>
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#111827] text-slate-300 hover:text-blue-400 border border-slate-700/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1d] border-b border-[#1e293b] px-4 py-3 space-y-1.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-blue-900/60 to-red-950/60 text-blue-200 border border-blue-500/40'
                  : 'text-slate-300 hover:bg-[#111827]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {item.icon}
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="px-1.5 py-0.5 text-[9px] font-bold bg-gradient-to-r from-blue-500 to-red-500 text-white rounded">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
