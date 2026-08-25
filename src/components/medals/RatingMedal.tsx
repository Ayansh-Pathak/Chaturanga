import React from 'react';
import { RatingMilestoneMedalData } from '../../types/chess';
import { Trophy, Award, Star, Zap } from 'lucide-react';

interface RatingMedalProps {
  medal: RatingMilestoneMedalData;
  size?: 'sm' | 'md' | 'lg';
}

export const RatingMedal: React.FC<RatingMedalProps> = ({
  medal,
  size = 'md',
}) => {
  const getTierDetails = (tier: 'gold' | 'silver' | 'bronze') => {
    switch (tier) {
      case 'gold':
        return {
          gradient: 'from-amber-400 via-yellow-500 to-amber-600',
          bgBorder: 'border-yellow-400/70',
          glow: 'shadow-[0_0_20px_rgba(245,158,11,0.4)]',
          badgeText: 'text-amber-950 font-black',
          gainLabel: '+100 Elo Milestone',
          icon: <Trophy className="text-yellow-300" size={size === 'sm' ? 24 : 32} fill="#fef08a" />
        };
      case 'silver':
        return {
          gradient: 'from-slate-200 via-slate-300 to-zinc-400',
          bgBorder: 'border-slate-300/70',
          glow: 'shadow-[0_0_20px_rgba(226,232,240,0.35)]',
          badgeText: 'text-slate-900 font-black',
          gainLabel: '+75 Elo Milestone',
          icon: <Award className="text-slate-100" size={size === 'sm' ? 24 : 32} fill="#e2e8f0" />
        };
      case 'bronze':
        return {
          gradient: 'from-amber-700 via-amber-800 to-stone-900',
          bgBorder: 'border-amber-600/70',
          glow: 'shadow-[0_0_18px_rgba(180,83,9,0.35)]',
          badgeText: 'text-amber-100 font-black',
          gainLabel: '+50 Elo Milestone',
          icon: <Star className="text-amber-400" size={size === 'sm' ? 24 : 32} fill="#fbbf24" />
        };
    }
  };

  const config = getTierDetails(medal.tier);

  return (
    <div
      id={`rating-medal-${medal.id}`}
      className={`relative flex flex-col items-center justify-between p-4 rounded-2xl bg-gradient-to-b from-[#161a24] to-[#0c0f17] border border-[#2b3346] ${config.glow} transition-all duration-300 hover:scale-[1.03] hover:border-amber-400/50`}
    >
      {/* Top Badge */}
      <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#20273a] border border-slate-700/50 mb-3">
        <Zap size={12} className="text-amber-400" />
        <span className="text-[10px] font-bold tracking-wider uppercase text-amber-200">
          {config.gainLabel}
        </span>
      </div>

      {/* Emblem Coin */}
      <div className={`w-16 h-16 rounded-full bg-gradient-to-tr ${config.gradient} p-1 shadow-lg border-2 ${config.bgBorder} flex items-center justify-center mb-3`}>
        <div className="w-full h-full rounded-full bg-black/20 flex flex-col items-center justify-center">
          {config.icon}
        </div>
      </div>

      {/* Required Text: "Congratulations for achieving {rating} rating!" */}
      <div className="text-center space-y-1">
        <h4 className="text-xs font-extrabold text-amber-400 font-cinzel tracking-wide leading-tight">
          Congratulations for achieving {medal.ratingAchieved} rating!
        </h4>
        <p className="text-[10px] text-slate-400">
          Category: <span className="capitalize text-slate-200 font-semibold">{medal.category}</span>
        </p>
        <span className="text-[9px] text-slate-500 block">
          Awarded: {medal.awardedAt}
        </span>
      </div>
    </div>
  );
};
