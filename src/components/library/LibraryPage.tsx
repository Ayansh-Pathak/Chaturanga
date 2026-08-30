import React from 'react';

// Simple static library page showing a few chess e‑books and popular YouTube channels.
// The UI follows the Tailwind styling used throughout the app.
export const LibraryPage: React.FC = () => {
  const ebooks = [
    {
      title: 'Modern Chess Strategy',
      url: 'https://www.scribd.com/doc/126356288/Modern-Chess-Strategy-pdf',
    },
    {
      title: 'My System by Aron Nimzowitsch',
      url: 'https://www.scribd.com/doc/207711696/My-system-by-Aron-Nimzowitsch',
    },
    {
      title: 'Chess Fundamentals by José Raúl Capablanca',
      url: 'https://forwardchess.com/product/chess-fundamentals',
    },
  ];

  const onlineLessons = [
    {
      name: 'ChessKid Lessons & Tutorials',
      url: 'https://www.chesskid.com/learn/lessons',
      provider: 'ChessKid'
    },
    {
      name: 'Chess.com Interactive Lessons',
      url: 'https://www.chess.com/lessons',
      provider: 'Chess.com'
    }
  ];

  const famousPlayers = [
    { name: 'Magnus Carlsen', title: 'GM', rating: 2832, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80' },
    { name: 'Viswanathan Anand', title: 'GM', rating: 2751, avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80' },
    { name: 'Hikaru Nakamura', title: 'GM', rating: 2802, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' },
    { name: 'Alireza Firouzja', title: 'GM', rating: 2737, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80' },
    { name: 'Rameshbabu Praggnanandhaa', title: 'GM', rating: 2747, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80' },
    { name: 'Levy Rozman', title: 'IM', rating: 2322, avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80' }
  ];

  const youtubeChannels = [
    {
      name: 'GothamChess',
      url: 'https://www.youtube.com/c/GothamChess',
    },
    {
      name: 'ChessNetwork',
      url: 'https://www.youtube.com/c/ChessNetwork',
    },
    {
      name: 'Agadmator',
      url: 'https://www.youtube.com/c/Agadmator',
    },
    {
      name: 'Hikaru Nakamura',
      url: 'https://www.youtube.com/c/HikaruNakamura',
    },
    {name: 'ChessBase India',
      url: 'https://www.youtube.com/@ChessBaseIndiachannel',
    },
    {name: 'Viswanathan Anand Masterclass',
      url: 'https://www.chesskid.com/learn/articles/video-series-vishy-anands-masterclass',
    }
  ];
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-white font-cinzel tracking-tight">
          Chess Knowledge Library
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Explore curated resources from top grandmasters and platforms to sharpen your tactical elephant bishop maneuvers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Resources */}
        <div className="lg:col-span-7 space-y-8">
          <section className="p-6 rounded-3xl bg-[#0c1427] border border-blue-500/30 shadow-xl">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2 font-cinzel">
              <BookOpen className="text-blue-400" size={22} />
              Educational Lessons
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {onlineLessons.map((lesson) => (
                <a
                  key={lesson.name}
                  href={lesson.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#141926] border border-slate-800 hover:border-blue-500/50 transition-all group"
                >
                  <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">{lesson.provider}</div>
                  <div className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{lesson.name}</div>
                  <div className="text-[10px] text-slate-500 mt-2">Open external link ↗</div>
                </a>
              ))}
            </div>
          </section>

          <section className="p-6 rounded-3xl bg-[#0c1427] border border-slate-800 shadow-xl">
            <h2 className="text-xl font-black text-white mb-4 font-cinzel">Chess e‑Books</h2>
            <div className="space-y-3">
              {ebooks.map((book) => (
                <a
                  key={book.title}
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#090e1c] border border-slate-800 hover:bg-[#111a30] transition-all group"
                >
                  <span className="text-sm text-slate-400 group-hover:text-slate-200">{book.title}</span>
                  <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>
              ))}
            </div>
          </section>

          <section className="p-6 rounded-3xl bg-[#0c1427] border border-slate-800 shadow-xl">
            <h2 className="text-xl font-black text-white mb-4 font-cinzel">YouTube Mentors</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {youtubeChannels.map((channel) => (
                <a
                  key={channel.name}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-[#090e1c] border border-slate-800 hover:border-red-500/30 text-xs font-bold text-slate-400 hover:text-red-400 text-center transition-all"
                >
                  {channel.name}
                </a>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: FIDE Rated Players */}
        <div className="lg:col-span-5 space-y-6">
          <section className="p-6 rounded-3xl bg-gradient-to-b from-[#160d24] to-[#0c1427] border border-amber-500/30 shadow-2xl">
            <h2 className="text-xl font-black text-white mb-6 flex items-center gap-2 font-cinzel">
              <Users className="text-amber-400" size={22} />
              FIDE Hall of Fame
            </h2>
            <div className="space-y-4">
              {famousPlayers.map((player) => (
                <div key={player.name} className="flex items-center justify-between p-3 rounded-2xl bg-black/40 border border-slate-800 group hover:border-amber-500/40 transition-all">
                  <div className="flex items-center gap-3">
                    <img src={player.avatar} alt={player.name} className="w-10 h-10 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all" />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="px-1 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[9px] font-black">{player.title}</span>
                        <span className="text-sm font-black text-slate-200">{player.name}</span>
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">Global Elo: {player.rating}</div>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-[10px] text-amber-500 font-bold group-hover:scale-110 transition-transform">
                    {player.name.charAt(0)}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-center">
              <button className="text-[10px] font-black text-amber-400 uppercase tracking-widest hover:text-amber-300 transition-colors">
                View All FIDE Rated Players (10,000+)
              </button>
            </div>
          </section>

          <div className="p-6 rounded-3xl bg-[#090e1c] border border-blue-500/20 shadow-xl">
             <div className="text-xs font-bold text-blue-300 mb-2 uppercase">Did you know?</div>
             <p className="text-xs text-slate-400 italic leading-relaxed">
               "The Elephant Bishop in Chaturanga originates from the Gaja-Vyuha formation, where powerful diagonals were used to flank the enemy crown king."
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};


