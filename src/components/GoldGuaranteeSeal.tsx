import React from 'react';
import { ShieldCheck, Star, Award, Check } from 'lucide-react';

export const GoldGuaranteeSeal: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center select-none">
      {/* Golden Glow Backdrop */}
      <div className="absolute w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-amber-400/20 blur-xl pointer-events-none" />

      {/* Outer Golden Medallion Body */}
      <div 
        className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1.5 shadow-2xl flex items-center justify-center border-2 border-amber-300/80"
        style={{
          background: 'radial-gradient(circle, #ffe082 0%, #ffc107 40%, #ff8f00 80%, #ff6f00 100%)',
          boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.8), inset 0 -2px 4px rgba(0, 0, 0, 0.4)'
        }}
      >
        {/* Inner Ring with Dashed Stitches */}
        <div className="w-full h-full rounded-full border-2 border-dashed border-amber-950/40 p-2 flex flex-col items-center justify-center text-center bg-gradient-to-b from-amber-400 via-amber-300 to-amber-500 shadow-inner">
          
          {/* Top Stars */}
          <div className="flex gap-0.5 text-amber-950 mb-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 fill-amber-950 text-amber-950" />
            ))}
          </div>

          <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-amber-950 leading-none">
            GARANTIA
          </span>

          <span className="font-serif text-2xl sm:text-3xl font-black text-amber-950 leading-none my-0.5 drop-shadow-xs">
            7 DIAS
          </span>

          <span className="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-tight text-amber-900 leading-tight">
            100% INCONDICIONAL
          </span>

        </div>

        {/* Ribbon Tails hanging underneath */}
        <div className="absolute -bottom-3 flex justify-center gap-1">
          <div className="w-5 h-5 bg-amber-600 transform rotate-45 rounded-xs border border-amber-300 shadow-xs" />
          <div className="w-5 h-5 bg-amber-600 transform rotate-45 rounded-xs border border-amber-300 shadow-xs" />
        </div>
      </div>

      {/* Micro-label underneath */}
      <span className="mt-4 text-xs font-bold text-amber-400 tracking-wide uppercase">
        Risco Zero Absoluto
      </span>
    </div>
  );
};
