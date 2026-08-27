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

    {
      title: 'Chess Fundamentals by José Raúl Capablanca',
      url: 'https://forwardchess.com/product/chess-fundamentals',
    },
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
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-slate-200">
        Library
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-slate-300">
          Chess e‑Books
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {ebooks.map((book) => (
            <li key={book.title} className="text-slate-400 hover:text-slate-200">
              <a
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {book.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3 text-slate-300">
          Chess YouTube Channels
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {youtubeChannels.map((channel) => (
            <li key={channel.name} className="text-slate-400 hover:text-slate-200">
              <a
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {channel.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

