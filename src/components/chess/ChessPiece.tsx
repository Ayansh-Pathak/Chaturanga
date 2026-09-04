import React from 'react';

export type PieceSymbol = 'p' | 'n' | 'b' | 'r' | 'q' | 'k';
export type PieceColor = 'w' | 'b';

interface ChessPieceProps {
  type: PieceSymbol;
  color: PieceColor;
  square?: string;
  className?: string;
  size?: number | string;
}

export const ChessPiece: React.FC<ChessPieceProps> = React.memo(({
  type,
  color,
  square,
  className = '',
  size = '100%',
}) => {
  const isWhite = color === 'w';

  // Optimized rendering using SVG symbols defined in App.tsx
  const mainFill = isWhite ? '#ffffff' : '#1e2430';
  const strokeColor = isWhite ? '#2c3345' : '#e2e8f0';

  const isKnight = type.toLowerCase() === 'n';
  const file = square ? square[0] : '';

  // Knights face each other:
  // White knights on kingside (e-h files, including g1) face left.
  // Black knights on queenside (a-d files, including b8) face left.
  // Base piece faces right, so mirroring (flipping left) is applied to these cases.
  const shouldMirror = isKnight && (
    (color === 'w' && file >= 'e') ||
    (color === 'b' && file && file <= 'd')
  );

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-md select-none pointer-events-none"
        style={{
          width: size,
          height: size,
          fill: mainFill,
          stroke: strokeColor,
          color: strokeColor,
        }}
      >
        <g transform={shouldMirror ? "translate(100, 0) scale(-1, 1)" : undefined}>
          <use href={`#piece-${type.toLowerCase()}`} />
        </g>
      </svg>
    </div>
  );
});
