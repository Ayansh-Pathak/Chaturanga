import React, { useState, Suspense, lazy, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { TournamentProvider } from './context/TournamentContext';
import { ClubProvider } from './context/ClubContext';
import { FeedbackProvider } from './context/FeedbackContext';
import { PuzzleProvider } from './context/PuzzleContext';
import { Navbar } from './components/layout/Navbar';
import { AuthModal } from './components/auth/AuthModal';
import { useAuth } from './context/AuthContext';
import { Crown } from 'lucide-react';

const PlayHub = lazy(() => import('./components/play/PlayHub').then(module => ({ default: module.PlayHub })));
const PuzzleTrainer = lazy(() => import('./components/puzzles/PuzzleTrainer').then(module => ({ default: module.PuzzleTrainer })));
const TournamentHub = lazy(() => import('./components/tournaments/TournamentHub').then(module => ({ default: module.TournamentHub })));
const ClubsAndTeamsHub = lazy(() => import('./components/clubs/ClubsAndTeamsHub').then(module => ({ default: module.ClubsAndTeamsHub })));
const FeedbackPage = lazy(() => import('./components/feedback/FeedbackPage').then(module => ({ default: module.FeedbackPage })));
const ProfilePage = lazy(() => import('./components/profile/ProfilePage').then(module => ({ default: module.ProfilePage })));
const PlayerChat = lazy(() => import('./components/chat/PlayerChat').then(module => ({ default: module.PlayerChat })));
const GeminiChatbot = lazy(() => import('./components/chat/GeminiChatbot').then(module => ({ default: module.GeminiChatbot })));
const LibraryPage = lazy(() => import('./components/library/LibraryPage').then(module => ({ default: module.LibraryPage })));

type TabId = 'play' | 'puzzles' | 'tournaments' | 'clubs' | 'chat' | 'feedback' | 'profile' | 'library';
const VALID_TABS: TabId[] = ['play', 'puzzles', 'tournaments', 'clubs', 'chat', 'feedback', 'profile', 'library'];

function getInitialTab(): TabId {
  // Support ?tab=puzzles or #puzzles in the URL (for GitHub Pages deep links)
  const hash = window.location.hash.replace('#', '').toLowerCase() as TabId;
  if (VALID_TABS.includes(hash)) return hash;
  const search = new URLSearchParams(window.location.search).get('tab') as TabId;
  if (search && VALID_TABS.includes(search)) return search;
  return 'play';
}

function ChaturangaApp() {
  const { loading } = useAuth();
  const [activeTab, setActiveTab] = useState<TabId>(getInitialTab);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Keep URL hash in sync with active tab so the link is shareable
  useEffect(() => {
    window.location.hash = activeTab;
  }, [activeTab]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#070a14] flex flex-col items-center justify-center p-6 text-center">
        <div className="relative mb-12">
          {/* Animated Background Glow */}
          <div className="absolute -inset-16 bg-gradient-to-tr from-blue-600/20 via-transparent to-red-600/20 blur-3xl animate-pulse rounded-full" />

          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-[#10172a] to-[#1a0d24] border-2 border-blue-500/30 flex items-center justify-center shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-radial from-blue-500/10 to-red-500/5" />
            <Crown size={56} className="text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)] animate-bounce duration-[3000ms]" fill="#fbbf24" />
          </div>

          {/* Spinner Ring */}
          <div className="absolute -top-3 -left-3 w-[calc(100%+24px)] h-[calc(100%+24px)] border-4 border-slate-800 rounded-[36px]"></div>
          <div className="absolute -top-3 -left-3 w-[calc(100%+24px)] h-[calc(100%+24px)] border-4 border-blue-500 border-t-transparent border-r-transparent rounded-[36px] animate-spin"></div>
        </div>

        <div className="space-y-4 relative">
          <h1 className="text-2xl sm:text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-100 to-red-400 font-cinzel">
            CHATURANGA
          </h1>
          <div className="flex flex-col gap-1.5 items-center">
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500/80 animate-pulse">Initializing Global Chess Arena</span>
             <div className="flex items-center gap-1.5 py-1 px-3 rounded-full bg-slate-900/50 border border-slate-800">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[9px] font-bold text-slate-400 uppercase">Synchronizing with Firebase</span>
             </div>
          </div>
        </div>

        <div className="absolute bottom-12 text-slate-600 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
           <span className="w-1 h-1 rounded-full bg-slate-700" />
           Version 1.5.4 Powered by Gemini AI
           <span className="w-1 h-1 rounded-full bg-slate-700" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-black">
      
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAuth={() => setIsAuthOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1 pb-16 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-red-600 to-amber-500 opacity-20" />
        <Suspense fallback={
          <div className="flex-1 h-[70vh] flex flex-col items-center justify-center py-20 animate-in fade-in duration-500">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-slate-800 rounded-full"></div>
              <div className="absolute top-0 left-0 w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <span className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-slate-500 animate-pulse">Initializing Arena...</span>
          </div>
        }>
          {activeTab === 'play' && <PlayHub />}
          {activeTab === 'puzzles' && <PuzzleTrainer />}
          {activeTab === 'tournaments' && <TournamentHub />}
          {activeTab === 'clubs' && <ClubsAndTeamsHub />}
          {activeTab === 'chat' && <PlayerChat />}
          {activeTab === 'feedback' && <FeedbackPage />}
          {activeTab === 'profile' && <ProfilePage />}
          {activeTab === 'library' && <LibraryPage />}
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1b2234] bg-[#080b10] py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Crown size={16} className="text-amber-400" />
            <span className="font-cinzel font-bold text-slate-300">CHATURANGA</span>
            <span className="font-sanskrit text-amber-500/80 font-bold">चतुरङ्गम्</span>
            <span>— The Ancient Origin of Chess under FIDE Laws</span>
          </div>

          <div className="text-[11px] text-slate-400">
            Featuring Elephant Head Bishops & Crown Kings • Elo Rating System • Official Medals
          </div>
        </div>
      </footer>

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      {/* Global AI Chatbot */}
      <Suspense fallback={null}>
        <GeminiChatbot gameMode={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} />
      </Suspense>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <PuzzleProvider>
        <ClubProvider>
          <TournamentProvider>
            <FeedbackProvider>
              <ChaturangaApp />
            </FeedbackProvider>
          </TournamentProvider>
        </ClubProvider>
      </PuzzleProvider>
    </AuthProvider>
  );
}
