import React, { useState, Suspense, lazy, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { TournamentProvider } from './context/TournamentContext';
import { ClubProvider } from './context/ClubContext';
import { FeedbackProvider } from './context/FeedbackContext';
import { Navbar } from './components/layout/Navbar';
import { AuthModal } from './components/auth/AuthModal';
import { Crown } from 'lucide-react';

const PlayHub = lazy(() => import('./components/play/PlayHub').then(module => ({ default: module.PlayHub })));
const PuzzleTrainer = lazy(() => import('./components/puzzles/PuzzleTrainer').then(module => ({ default: module.PuzzleTrainer })));
const TournamentHub = lazy(() => import('./components/tournaments/TournamentHub').then(module => ({ default: module.TournamentHub })));
const ClubsAndTeamsHub = lazy(() => import('./components/clubs/ClubsAndTeamsHub').then(module => ({ default: module.ClubsAndTeamsHub })));
const FeedbackPage = lazy(() => import('./components/feedback/FeedbackPage').then(module => ({ default: module.FeedbackPage })));
const ProfilePage = lazy(() => import('./components/profile/ProfilePage').then(module => ({ default: module.ProfilePage })));
const PlayerChat = lazy(() => import('./components/chat/PlayerChat').then(module => ({ default: module.PlayerChat })));
const GeminiChatbot = lazy(() => import('./components/chat/GeminiChatbot').then(module => ({ default: module.GeminiChatbot })));

type TabId = 'play' | 'puzzles' | 'tournaments' | 'clubs' | 'chat' | 'feedback' | 'profile';
const VALID_TABS: TabId[] = ['play', 'puzzles', 'tournaments', 'clubs', 'chat', 'feedback', 'profile'];

function getInitialTab(): TabId {
  // Support ?tab=puzzles or #puzzles in the URL (for GitHub Pages deep links)
  const hash = window.location.hash.replace('#', '').toLowerCase() as TabId;
  if (VALID_TABS.includes(hash)) return hash;
  const search = new URLSearchParams(window.location.search).get('tab') as TabId;
  if (search && VALID_TABS.includes(search)) return search;
  return 'play';
}

function ChaturangaApp() {
  const [activeTab, setActiveTab] = useState<TabId>(getInitialTab);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Keep URL hash in sync with active tab so the link is shareable
  useEffect(() => {
    window.location.hash = activeTab;
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-black">
      
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAuth={() => setIsAuthOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1 pb-16">
        <Suspense fallback={<div className="flex-1 h-full flex flex-col items-center justify-center py-20 text-slate-400"><span className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></span><span className="mt-4 text-sm">Loading module...</span></div>}>
          {activeTab === 'play' && <PlayHub />}
          {activeTab === 'puzzles' && <PuzzleTrainer />}
          {activeTab === 'tournaments' && <TournamentHub />}
          {activeTab === 'clubs' && <ClubsAndTeamsHub />}
          {activeTab === 'chat' && <PlayerChat />}
          {activeTab === 'feedback' && <FeedbackPage />}
          {activeTab === 'profile' && <ProfilePage />}
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
      <ClubProvider>
        <TournamentProvider>
          <FeedbackProvider>
            <ChaturangaApp />
          </FeedbackProvider>
        </TournamentProvider>
      </ClubProvider>
    </AuthProvider>
  );
}
