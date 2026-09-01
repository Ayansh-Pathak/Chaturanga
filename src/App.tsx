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
import { PieceSpriteSheet } from './components/chess/ChessPieceLibrary';

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
  const { loading, setLoading, loginAsGuest } = useAuth();
  const [activeTab, setActiveTab] = useState<TabId>(getInitialTab);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [showRescueButton, setShowRescueButton] = useState(false);
  const [isDashboardReady, setIsDashboardReady] = useState(false);

  // Safety timer to show a rescue button if loading hangs
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) setShowRescueButton(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, [loading]);

  // Keep URL hash in sync with active tab so the link is shareable
  useEffect(() => {
    window.location.hash = activeTab;
  }, [activeTab]);

  // Remove initial splash and mark dashboard ready
  useEffect(() => {
    if (!loading) {
      const splash = document.getElementById('initial-splash');
      if (splash) {
        splash.classList.add('splash-fade-out');
        setTimeout(() => {
          splash.remove();
          setIsDashboardReady(true);
        }, 400);
      } else {
        setIsDashboardReady(true);
      }
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#070a14] flex flex-col items-center justify-center p-6 text-center">
        {showRescueButton && (
          <div className="animate-in fade-in zoom-in duration-700">
             <p className="text-[10px] text-slate-500 mb-3 italic">Taking longer than usual?</p>
             <button
               onClick={() => loginAsGuest()}
               className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all cursor-pointer"
             >
               Skip to Arena (Guest Mode)
             </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-black">
      <PieceSpriteSheet />

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

          {activeTab === 'puzzles' && (
            <PuzzleProvider>
              <PuzzleTrainer />
            </PuzzleProvider>
          )}

          {activeTab === 'tournaments' && (
            <TournamentProvider>
              <TournamentHub />
            </TournamentProvider>
          )}

          {activeTab === 'clubs' && (
            <ClubProvider>
              <ClubsAndTeamsHub />
            </ClubProvider>
          )}

          {activeTab === 'feedback' && (
            <FeedbackProvider>
              <FeedbackPage />
            </FeedbackProvider>
          )}

          {activeTab === 'chat' && <PlayerChat />}
          {activeTab === 'profile' && <ProfilePage />}
          {activeTab === 'library' && <LibraryPage />}
        </Suspense>
      </main>

      {/* Footer - Defer rendering */}
      {isDashboardReady && (
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
      )}

      {/* Authentication Modal - Only mount if open */}
      {isAuthOpen && (
        <AuthModal
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
        />
      )}

      {/* Global AI Chatbot - Defer mount */}
      {isDashboardReady && (
        <Suspense fallback={null}>
          <GeminiChatbot gameMode={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} />
        </Suspense>
      )}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ChaturangaApp />
    </AuthProvider>
  );
}
