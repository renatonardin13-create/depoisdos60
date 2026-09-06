import React from 'react';
import heroBundleImg from '../assets/hero-bundle.png';

interface ProductBundleMockupProps {
  onOpenCheckout?: () => void;
  className?: string;
}

export const ProductBundleMockup: React.FC<ProductBundleMockupProps> = ({ 
  onOpenCheckout,
  className = ''
}) => {
  return (
    <div 
      className={`relative w-full max-w-[480px] sm:max-w-[500px] mx-auto select-none flex flex-col items-center justify-center ${className}`}
    >
      {/* Atmospheric green & amber glow */}
      <div 
        className="absolute -inset-6 rounded-full bg-gradient-to-tr from-emerald-500/25 via-teal-400/20 to-amber-300/20 blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      {/* Official 3D Box & Smartphone Bundle Presentation */}
      <div className="relative group/customHero flex flex-col items-center z-10 w-full">
        <img 
          src={heroBundleImg} 
          alt="Depois dos 60: 50 Cuidados Que Toda Idosa e Sua Família Precisam Conhecer! - Box 3D com Celular" 
          className="w-full max-w-[440px] sm:max-w-[470px] h-auto object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.65)] cursor-pointer transition-transform duration-300 group-hover/customHero:scale-[1.015]"
          onClick={onOpenCheckout}
          referrerPolicy="no-referrer"
          loading="eager"
        />
      </div>
    </div>
  );
};
