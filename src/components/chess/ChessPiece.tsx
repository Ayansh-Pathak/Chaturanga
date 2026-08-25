import React from 'react';

export type PieceSymbol = 'p' | 'n' | 'b' | 'r' | 'q' | 'k';
export type PieceColor = 'w' | 'b';

interface ChessPieceProps {
  type: PieceSymbol;
  color: PieceColor;
  className?: string;
  size?: number | string;
}

export const ChessPiece: React.FC<ChessPieceProps> = ({
  type,
  color,
  className = '',
  size = '100%',
}) => {
  const isWhite = color === 'w';

  // Distinctive palette for White vs Black pieces
  const mainFill = isWhite ? '#ffffff' : '#1e2430';
  const strokeColor = isWhite ? '#2c3345' : '#e2e8f0';
  const highlightColor = isWhite ? '#f8fafc' : '#2d3748';
  const accentGold = isWhite ? '#f59e0b' : '#fbbf24';
  const shadowColor = isWhite ? 'rgba(0,0,0,0.15)' : 'rgba(0,0,0,0.45)';

  const renderPiece = () => {
    switch (type.toLowerCase()) {
      case 'p': // Pawn
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md select-none pointer-events-none" style={{ width: size, height: size }}>
            <ellipse cx="50" cy="85" rx="30" ry="8" fill={shadowColor} />
            <path d="M26 84 C30 76 70 76 74 84 L78 88 C78 90 22 90 22 88 Z" fill={mainFill} stroke={strokeColor} strokeWidth="3.5" strokeLinejoin="round" />
            <path d="M35 76 C35 55 42 45 42 38 C42 34 58 34 58 38 C58 45 65 55 65 76 Z" fill={mainFill} stroke={strokeColor} strokeWidth="3.5" />
            <ellipse cx="50" cy="40" rx="14" ry="4" fill={accentGold} stroke={strokeColor} strokeWidth="2.5" />
            <circle cx="50" cy="24" r="14" fill={mainFill} stroke={strokeColor} strokeWidth="3.5" />
            {isWhite && <circle cx="46" cy="20" r="4" fill="#ffffff" opacity="0.8" />}
          </svg>
        );

      case 'r': // Rook
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md select-none pointer-events-none" style={{ width: size, height: size }}>
            <ellipse cx="50" cy="86" rx="32" ry="8" fill={shadowColor} />
            <path d="M24 85 C28 78 72 78 76 85 L80 89 C80 92 20 92 20 89 Z" fill={mainFill} stroke={strokeColor} strokeWidth="3.5" strokeLinejoin="round" />
            <path d="M30 78 L34 38 L66 38 L70 78 Z" fill={mainFill} stroke={strokeColor} strokeWidth="3.5" />
            <path d="M24 38 L24 20 L34 20 L34 27 L44 27 L44 20 L56 20 L56 27 L66 27 L66 20 L76 20 L76 38 Z" fill={mainFill} stroke={strokeColor} strokeWidth="3.5" strokeLinejoin="round" />
            <rect x="30" y="38" width="40" height="6" fill={accentGold} stroke={strokeColor} strokeWidth="2.5" />
            <rect x="46" y="48" width="8" height="18" rx="4" fill={strokeColor} opacity="0.6" />
          </svg>
        );

      case 'n': // Knight: Majestic Horse / War Stallion (Ashva)
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md select-none pointer-events-none" style={{ width: size, height: size }}>
            <ellipse cx="50" cy="86" rx="32" ry="8" fill={shadowColor} />
            {/* Pedestal Base */}
            <path d="M24 85 C28 78 72 78 76 85 L80 89 C80 92 20 92 20 89 Z" fill={mainFill} stroke={strokeColor} strokeWidth="3.5" strokeLinejoin="round" />
            
            {/* Horse Body, Arched Crest Neck, Snout & Muzzle */}
            <path
              d="M30 84 C30 68 25 50 32 30 C34 22 40 14 46 12 C47 12 47 16 48 18 C50 16 52 14 55 14 C56 16 55 20 54 22 C62 20 72 23 76 30 C78 34 76 40 70 44 C67 46 64 45 61 44 C68 49 71 56 70 65 C68 74 65 79 68 84 Z"
              fill={mainFill}
              stroke={strokeColor}
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            
            {/* Horse Pointed Ears */}
            <path d="M46 12 L49 6 L52 14 Z" fill={highlightColor} stroke={strokeColor} strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M52 14 L56 7 L58 16 Z" fill={highlightColor} stroke={strokeColor} strokeWidth="2.5" strokeLinejoin="round" />

            {/* Equine Mane (Flowing hair ridges) */}
            <path d="M32 32 C28 34 25 40 28 46" stroke={strokeColor} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M30 46 C26 49 24 55 28 60" stroke={strokeColor} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M29 60 C25 64 24 70 28 75" stroke={strokeColor} strokeWidth="3" fill="none" strokeLinecap="round" />

            {/* Horse Eye with Brow */}
            <path d="M56 26 C59 24 63 25 65 28" stroke={strokeColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <ellipse cx="61" cy="29" rx="3" ry="2.2" fill={strokeColor} />
            <circle cx="60.2" cy="28.2" r="0.9" fill="#ffffff" />

            {/* Muzzle, Nostril & Mouth */}
            <ellipse cx="73" cy="35" rx="2" ry="3" fill={strokeColor} transform="rotate(-15 73 35)" />
            <path d="M75 39 C72 41 68 40 66 38" stroke={strokeColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />

            {/* Cheek & Jaw Muscle Curve */}
            <path d="M58 36 C55 42 56 48 62 52" stroke={strokeColor} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />

            {/* Royal Warhorse Harness / Bridle Accent */}
            <path d="M50 22 L66 38" stroke={accentGold} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <circle cx="58" cy="30" r="2.5" fill={accentGold} stroke={strokeColor} strokeWidth="1.5" />
            <path d="M58 30 L52 50" stroke={accentGold} strokeWidth="2" fill="none" strokeDasharray="3,2" />
          </svg>
        );

      case 'b': // BISHOP: Elephant Head (Grand / Hastin) with crown & tusks
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md select-none pointer-events-none" style={{ width: size, height: size }}>
            <ellipse cx="50" cy="86" rx="32" ry="8" fill={shadowColor} />
            {/* Base */}
            <path d="M24 85 C28 78 72 78 76 85 L80 89 C80 92 20 92 20 89 Z" fill={mainFill} stroke={strokeColor} strokeWidth="3.5" strokeLinejoin="round" />
            
            {/* Elephant Neck & Head */}
            <path
              d="M32 82 C30 68 26 56 30 42 C33 32 40 22 50 20 C60 22 67 32 70 42 C74 56 70 68 68 82 Z"
              fill={mainFill}
              stroke={strokeColor}
              strokeWidth="3.5"
            />

            {/* Elephant Ears */}
            <path
              d="M32 40 C22 36 16 46 18 58 C20 68 28 72 32 68"
              fill={highlightColor}
              stroke={strokeColor}
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M68 40 C78 36 84 46 82 58 C80 68 72 72 68 68"
              fill={highlightColor}
              stroke={strokeColor}
              strokeWidth="3"
              strokeLinejoin="round"
            />

            {/* Curled Elephant Trunk */}
            <path
              d="M45 46 C45 60 42 70 46 76 C48 80 54 82 58 78 C61 74 59 68 53 68 C50 68 49 71 50 73"
              fill="none"
              stroke={strokeColor}
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Tusks */}
            <path
              d="M40 56 C34 59 34 65 37 68 C39 65 42 62 42 58 Z"
              fill="#fffbeb"
              stroke={strokeColor}
              strokeWidth="2.5"
            />
            <path
              d="M60 56 C66 59 66 65 63 68 C61 65 58 62 58 58 Z"
              fill="#fffbeb"
              stroke={strokeColor}
              strokeWidth="2.5"
            />

            {/* Elephant Eyes */}
            <circle cx="39" cy="38" r="3" fill={strokeColor} />
            <circle cx="61" cy="38" r="3" fill={strokeColor} />

            {/* Ornate Elephant Head Jewel / Tilak */}
            <path d="M47 18 L50 12 L53 18 L50 24 Z" fill={accentGold} stroke={strokeColor} strokeWidth="2" />
            <circle cx="50" cy="30" r="3" fill={accentGold} />
          </svg>
        );

      case 'q': // Queen: Majestic Crown with Jewels
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md select-none pointer-events-none" style={{ width: size, height: size }}>
            <ellipse cx="50" cy="86" rx="32" ry="8" fill={shadowColor} />
            <path d="M22 85 C26 78 74 78 78 85 L82 89 C82 92 18 92 18 89 Z" fill={mainFill} stroke={strokeColor} strokeWidth="3.5" strokeLinejoin="round" />
            <path d="M30 78 L34 50 L66 50 L70 78 Z" fill={mainFill} stroke={strokeColor} strokeWidth="3.5" />
            {/* Queen Crown Flaring Points */}
            <path
              d="M20 34 L28 54 L50 42 L72 54 L80 34 L66 48 L50 26 L34 48 Z"
              fill={mainFill}
              stroke={strokeColor}
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            <circle cx="20" cy="32" r="4.5" fill={accentGold} stroke={strokeColor} strokeWidth="2" />
            <circle cx="50" cy="24" r="5.5" fill={accentGold} stroke={strokeColor} strokeWidth="2.5" />
            <circle cx="80" cy="32" r="4.5" fill={accentGold} stroke={strokeColor} strokeWidth="2" />
            <rect x="28" y="58" width="44" height="6" rx="3" fill={accentGold} stroke={strokeColor} strokeWidth="2" />
          </svg>
        );

      case 'k': // KING: Imperial Royal Crown (strictly NO Christian cross)
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md select-none pointer-events-none" style={{ width: size, height: size }}>
            <ellipse cx="50" cy="86" rx="34" ry="8" fill={shadowColor} />
            {/* Base */}
            <path d="M20 85 C25 78 75 78 80 85 L84 89 C84 92 16 92 16 89 Z" fill={mainFill} stroke={strokeColor} strokeWidth="3.5" strokeLinejoin="round" />
            <path d="M28 78 L32 48 L68 48 L72 78 Z" fill={mainFill} stroke={strokeColor} strokeWidth="3.5" />
            
            {/* Royal Crown Structure instead of cross */}
            <path
              d="M22 46 L20 26 L36 38 L50 16 L64 38 L80 26 L78 46 Z"
              fill={mainFill}
              stroke={strokeColor}
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            
            {/* Imperial Crown Jewel Crests */}
            <circle cx="20" cy="24" r="4.5" fill={accentGold} stroke={strokeColor} strokeWidth="2" />
            <circle cx="36" cy="36" r="3.5" fill={accentGold} stroke={strokeColor} strokeWidth="2" />
            <circle cx="50" cy="14" r="6" fill={accentGold} stroke={strokeColor} strokeWidth="2.5" />
            <circle cx="64" cy="36" r="3.5" fill={accentGold} stroke={strokeColor} strokeWidth="2" />
            <circle cx="80" cy="24" r="4.5" fill={accentGold} stroke={strokeColor} strokeWidth="2" />
            
            {/* Royal Crown Headband */}
            <rect x="26" y="52" width="48" height="8" rx="4" fill={accentGold} stroke={strokeColor} strokeWidth="2.5" />
            <circle cx="38" cy="56" r="2" fill={strokeColor} />
            <circle cx="50" cy="56" r="2.5" fill={strokeColor} />
            <circle cx="62" cy="56" r="2" fill={strokeColor} />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {renderPiece()}
    </div>
  );
};
