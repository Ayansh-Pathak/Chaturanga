import React from 'react';

export type PieceSymbol = 'p' | 'n' | 'b' | 'r' | 'q' | 'k';
export type PieceColor = 'w' | 'b';

interface ChessPieceProps {
  type: PieceSymbol;
  color: PieceColor;
  className?: string;
  size?: number | string;
}

export const ChessPiece: React.FC<ChessPieceProps> = React.memo(({
  type,
  color,
  className = '',
  size = '100%',
}) => {
  const isWhite = color === 'w';

  // Optimized rendering using SVG symbols defined in App.tsx
  const mainFill = isWhite ? '#ffffff' : '#1e2430';
  const strokeColor = isWhite ? '#2c3345' : '#e2e8f0';

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-md select-none pointer-events-none"
        style={{ width: size, height: size, fill: mainFill, stroke: strokeColor }}
      >
        <use href={`#piece-${type.toLowerCase()}`} />
      </svg>
    </div>
  );
});
