import React from 'react';
import logoImage from '../assets/logo.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-[160px] sm:w-[190px]',
    md: 'w-[200px] sm:w-[240px]',
    lg: 'w-[240px] sm:w-[280px]',
  };

  return (
    <div className={`flex items-center select-none shrink-0 ${className}`}>
      <img 
        src={logoImage} 
        alt="Depois dos 60 — Guia Prático de Prevenção & Autonomia" 
        className={`${sizeClasses[size]} h-auto object-contain`}
        style={{ objectFit: 'contain', objectPosition: 'center' }}
      />
    </div>
  );
};


