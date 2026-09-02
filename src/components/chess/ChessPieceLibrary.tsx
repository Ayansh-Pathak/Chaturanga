import React from 'react';

/**
 * Optimized Chess Piece Sprite Sheet
 * Uses SVG symbols to define pieces once and reuse them.
 * This significantly reduces the size of the DOM and speeds up rendering of boards.
 */

export const PieceSpriteSheet: React.FC = () => (
  <svg style={{ display: 'none' }} xmlns="http://www.w3.org/2000/svg">
    <symbol id="piece-p" viewBox="0 0 100 100">
      <path d="M26 84 C30 76 70 76 74 84 L78 88 C78 90 22 90 22 88 Z" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M35 76 C35 55 42 45 42 38 C42 34 58 34 58 38 C58 45 65 55 65 76 Z" strokeWidth="3.5" />
      <ellipse cx="50" cy="40" rx="14" ry="4" strokeWidth="2.5" />
      <circle cx="50" cy="24" r="14" strokeWidth="3.5" />
    </symbol>

    <symbol id="piece-r" viewBox="0 0 100 100">
      <path d="M24 85 C28 78 72 78 76 85 L80 89 C80 92 20 92 20 89 Z" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M30 78 L34 38 L66 38 L70 78 Z" strokeWidth="3.5" />
      <path d="M24 38 L24 20 L34 20 L34 27 L44 27 L44 20 L56 20 L56 27 L66 27 L66 20 L76 20 L76 38 Z" strokeWidth="3.5" strokeLinejoin="round" />
      <rect x="30" y="38" width="40" height="6" strokeWidth="2.5" />
    </symbol>

    <symbol id="piece-n" viewBox="0 0 100 100">
       <path d="M24 85 C28 78 72 78 76 85 L80 89 C80 92 20 92 20 89 Z" strokeWidth="3.5" strokeLinejoin="round" />
       <path d="M30 84 C30 68 25 50 32 30 C34 22 40 14 46 12 C47 12 47 16 48 18 C50 16 52 14 55 14 C56 16 55 20 54 22 C62 20 72 23 76 30 C78 34 76 40 70 44 C67 46 64 45 61 44 C68 49 71 56 70 65 C68 74 65 79 68 84 Z" strokeWidth="3.5" strokeLinejoin="round" />
       <path d="M46 12 L49 6 L52 14 Z" strokeWidth="2.5" strokeLinejoin="round" />
       <path d="M52 14 L56 7 L58 16 Z" strokeWidth="2.5" strokeLinejoin="round" />
    </symbol>

    <symbol id="piece-b" viewBox="0 0 100 100">
      <path d="M24 85 C28 78 72 78 76 85 L80 89 C80 92 20 92 20 89 Z" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M32 82 C30 68 26 56 30 42 C33 32 40 22 50 20 C60 22 67 32 70 42 C74 56 70 68 68 82 Z" strokeWidth="3.5" />
      <path d="M32 40 C22 36 16 46 18 58 C20 68 28 72 32 68" strokeWidth="3" strokeLinejoin="round" />
      <path d="M68 40 C78 36 84 46 82 58 C80 68 72 72 68 68" strokeWidth="3" strokeLinejoin="round" />
      <path d="M45 46 C45 60 42 70 46 76 C48 80 54 82 58 78 C61 74 59 68 53 68 C50 68 49 71 50 73" fill="none" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    </symbol>

    <symbol id="piece-q" viewBox="0 0 100 100">
      <path d="M22 85 C26 78 74 78 78 85 L82 89 C82 92 18 92 18 89 Z" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M30 78 L34 50 L66 50 L70 78 Z" strokeWidth="3.5" />
      <path d="M20 34 L28 54 L50 42 L72 54 L80 34 L66 48 L50 26 L34 48 Z" strokeWidth="3.5" strokeLinejoin="round" />
      <circle cx="20" cy="32" r="4.5" strokeWidth="2" />
      <circle cx="50" cy="24" r="5.5" strokeWidth="2.5" />
      <circle cx="80" cy="32" r="4.5" strokeWidth="2" />
      <rect x="28" y="58" width="44" height="6" rx="3" strokeWidth="2" />
    </symbol>

    <symbol id="piece-k" viewBox="0 0 100 100">
      <path d="M20 85 C25 78 75 78 80 85 L84 89 C84 92 16 92 16 89 Z" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M28 78 L32 48 L68 48 L72 78 Z" strokeWidth="3.5" />
      <path d="M22 46 L20 26 L36 38 L50 16 L64 38 L80 26 L78 46 Z" strokeWidth="3.5" strokeLinejoin="round" />
      <circle cx="20" cy="24" r="4.5" strokeWidth="2" />
      <circle cx="36" cy="36" r="3.5" strokeWidth="2" />
      <circle cx="50" cy="14" r="6" strokeWidth="2.5" />
      <circle cx="64" cy="36" r="3.5" strokeWidth="2" />
      <circle cx="80" cy="24" r="4.5" strokeWidth="2" />
      <rect x="26" y="52" width="48" height="8" rx="4" strokeWidth="2.5" />
    </symbol>
  </svg>
);
