import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { TournamentProvider } from './context/TournamentContext';
import { ClubProvider } from './context/ClubContext';
import { FeedbackProvider } from './context/FeedbackContext';
import { Navbar } from './components/layout/Navbar';
import { AuthModal } from './components/auth/AuthModal';
import { PlayHub } from './components/play/PlayHub';
import { PuzzleTrainer } from './components/puzzles/PuzzleTrainer';
import { TournamentHub } from './components/tournaments/TournamentHub';
import { ClubsAndTeamsHub } from './components/clubs/ClubsAndTeamsHub';
import { FeedbackPage } from './components/feedback/FeedbackPage';
import { ProfilePage } from './components/profile/ProfilePage';
import { Crown, Sparkles, Swords, Puzzle, Trophy, Users, MessageSquare } from 'lucide-react';

function ChaturangaApp() {
  const [activeTab, setActiveTab] = useState<'play' | 'puzzles' | 'tournaments' | 'clubs' | 'feedback' | 'profile'>('play');
  const [isAuthOpen, setIsAuthOpen] = useState(false);

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
        {activeTab === 'play' && <PlayHub />}
        {activeTab === 'puzzles' && <PuzzleTrainer />}
        {activeTab === 'tournaments' && <TournamentHub />}
        {activeTab === 'clubs' && <ClubsAndTeamsHub />}
        {activeTab === 'feedback' && <FeedbackPage />}
        {activeTab === 'profile' && <ProfilePage />}
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
