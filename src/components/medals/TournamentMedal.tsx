import React, { useState } from 'react';
import { TournamentMedalData, MedalTier } from '../../types/chess';
import { Crown, Clock, ShieldCheck, RotateCw } from 'lucide-react';

interface TournamentMedalProps {
  medal: TournamentMedalData;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
}

export const TournamentMedal: React.FC<TournamentMedalProps> = ({
  medal,
  size = 'md',
  interactive = true,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getTierStyles = (tier: MedalTier) => {
    switch (tier) {
      case 'gold':
        return {
          gradient: 'from-amber-300 via-yellow-400 to-amber-600',
          border: 'border-yellow-300/90',
          glow: 'shadow-[0_0_25px_rgba(234,179,8,0.45)]',
          crownColor: '#fef08a',
          ribbonGradient: 'from-red-700 via-amber-600 to-red-800',
          metalText: 'text-amber-950',
          label: '1st Place • Gold',
          rimColor: '#eab308',
        };
      case 'silver':
        return {
          gradient: 'from-slate-100 via-slate-300 to-zinc-400',
          border: 'border-slate-200/90',
          glow: 'shadow-[0_0_25px_rgba(203,213,225,0.4)]',
          crownColor: '#ffffff',
          ribbonGradient: 'from-blue-700 via-slate-600 to-blue-800',
          metalText: 'text-slate-900',
          label: '2nd Place • Silver',
          rimColor: '#cbd5e1',
        };
      case 'bronze':
        return {
          gradient: 'from-amber-600 via-amber-700 to-amber-900',
          border: 'border-amber-500/80',
          glow: 'shadow-[0_0_20px_rgba(217,119,6,0.35)]',
          crownColor: '#fed7aa',
          ribbonGradient: 'from-orange-800 via-amber-700 to-orange-950',
          metalText: 'text-amber-100',
          label: '3rd Place • Bronze',
          rimColor: '#b45309',
        };
      case 'brass':
        return {
          gradient: 'from-yellow-600 via-yellow-700 to-stone-800',
          border: 'border-yellow-600/80',
          glow: 'shadow-[0_0_20px_rgba(202,138,4,0.3)]',
          crownColor: '#fef08a',
          ribbonGradient: 'from-emerald-800 via-yellow-800 to-emerald-950',
          metalText: 'text-yellow-100',
          label: '4th Place • Brass',
          rimColor: '#a16207',
        };
    }
  };

  const style = getTierStyles(medal.tier);

  const sizeClasses = {
    sm: 'w-44 min-h-[220px] p-3.5',
    md: 'w-56 min-h-[260px] p-4',
    lg: 'w-72 min-h-[320px] p-6',
  }[size];

  const crownSize = {
    sm: 28,
    md: 40,
    lg: 56,
  }[size];

  const formatLabels: Record<string, string> = {
    swiss: 'Swiss System',
    arena: 'Arena Blitz',
    round_robin: 'Round Robin',
    double_round_robin: 'Double Round Robin',
    knockout: 'Knockout Cup',
  };

  return (
    <div
      id={`medal-${medal.id}`}
      onClick={() => interactive && setIsFlipped(!isFlipped)}
      className={`relative flex flex-col items-center justify-between rounded-2xl bg-gradient-to-b from-[#181c26] to-[#0e121a] border border-[#2c3448] text-center cursor-pointer transition-all duration-300 select-none ${sizeClasses} ${
        interactive ? 'hover:scale-105 hover:border-amber-500/50' : ''
      } ${style.glow}`}
      title="Click to flip medal"
    >
      {/* Front Face */}
      {!isFlipped ? (
        <>
          {/* Top Ribbon */}
          <div
            className={`w-14 h-3.5 rounded-t-sm bg-gradient-to-r ${style.ribbonGradient} shadow-sm -mt-2 flex items-center justify-center border-t border-white/20`}
          >
            <div className="w-1.5 h-full bg-yellow-400/40 mx-auto" />
          </div>

          {/* Format of the tournament at the TOP */}
          <div className="w-full mt-1">
            <span className="text-[10px] font-extrabold tracking-wider text-amber-300 uppercase px-2.5 py-0.5 rounded-full bg-[#1e2536] border border-amber-500/30 shadow-inner inline-block">
              {formatLabels[medal.format] || medal.format}
            </span>
          </div>

          {/* Central Circular Medal Coin with CROWN in the middle */}
          <div
            className={`relative my-2 rounded-full bg-gradient-to-tr ${style.gradient} p-1 shadow-2xl border-2 ${style.border} flex items-center justify-center`}
            style={{
              width: size === 'sm' ? '80px' : size === 'md' ? '104px' : '130px',
              height: size === 'sm' ? '80px' : size === 'md' ? '104px' : '130px',
            }}
          >
            <div className="w-full h-full rounded-full border border-black/25 flex flex-col items-center justify-center bg-radial from-white/20 to-black/30 backdrop-blur-xs relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-60 pointer-events-none" />

              {/* CROWN IN THE MIDDLE */}
              <Crown
                size={crownSize}
                className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] z-10"
                color={style.crownColor}
                fill={style.crownColor}
              />

              <span
                className={`text-[10px] font-black uppercase tracking-widest mt-0.5 z-10 ${style.metalText}`}
              >
                {medal.placement === 1
                  ? '1ST'
                  : medal.placement === 2
                  ? '2ND'
                  : medal.placement === 3
                  ? '3RD'
                  : '4TH'}
              </span>
            </div>
          </div>

          {/* Tournament Name at the BOTTOM */}
          <div className="w-full mt-auto space-y-1">
            <p className="text-xs font-black text-slate-100 line-clamp-1 font-cinzel">
              {medal.tournamentName}
            </p>
            <div className="flex items-center justify-center gap-1 text-[9px] text-slate-400">
              <RotateCw size={10} className="text-amber-400" />
              <span>Click to view back</span>
            </div>
          </div>
        </>
      ) : (
        /* Back Face: Date & Time when won */
        <div className="w-full h-full flex flex-col items-center justify-between p-2 text-center space-y-2 animate-fade-in">
          <div className="flex items-center gap-1 text-amber-400 font-bold text-[11px] font-cinzel">
            <ShieldCheck size={14} /> Official Certificate
          </div>

          <div className="p-3 rounded-xl bg-[#090d18] border border-amber-500/30 w-full space-y-2 shadow-inner">
            <div>
              <span className="text-[9px] uppercase font-bold text-slate-400 block">Awarded To</span>
              <strong className="text-xs text-white font-cinzel">{medal.awardedTo}</strong>
            </div>

            <div className="border-t border-slate-800 pt-1.5">
              <span className="text-[9px] uppercase font-bold text-amber-400/90 block flex items-center justify-center gap-1">
                <Clock size={10} /> Date & Time Won
              </span>
              <strong className="text-[11px] font-mono text-slate-200 block mt-0.5">
                {medal.dateTimeStr}
              </strong>
            </div>

            <div className="border-t border-slate-800 pt-1">
              <span className="text-[9px] uppercase text-slate-400 block">Placement</span>
              <strong className="text-[10px] text-amber-300 font-bold">{style.label}</strong>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1 text-[9px] text-slate-400">
            <RotateCw size={10} className="text-amber-400" />
            <span>Click to flip front</span>
          </div>
        </div>
      )}
    </div>
  );
};
