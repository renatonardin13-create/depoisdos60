import React, { useState, useEffect } from 'react';
import { BookOpen, Shield, HelpCircle, Gift, Sparkles, ChevronRight, Check, Menu, X, Star } from 'lucide-react';
import { Logo } from './Logo';
import logoImage from '../assets/logo.png';

interface HeaderProps {
  onOpenCheckout: () => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  setFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout, fontSize, setFontSize }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'O Desafio', href: '#dor' },
    { label: 'A Solução', href: '#solucao' },
    { label: '8 Capítulos', href: '#capitulos' },
    { label: 'Para Quem É', href: '#para-quem' },
    { label: 'Bônus App', href: '#bonus' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Garantia', href: '#garantia' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <>
      {/* Accessibility & Announcement Top Bar */}
      <div className="bg-warm-900 text-warm-100 text-xs sm:text-sm py-2 px-4 border-b border-warm-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-brand-500/20 text-brand-300 border border-brand-500/30 whitespace-nowrap shrink-0">
              <Check className="w-3 h-3 mr-1" /> Acesso Digital Online
            </span>
            <span className="hidden md:inline text-warm-300 truncate text-xs">
              Acesso à Área de Membros • Leitura fácil em celular, tablet ou computador
            </span>
          </div>

          {/* Font Size Adjuster for Senior Accessibility */}
          <div className="flex items-center gap-1.5 ml-auto text-xs shrink-0">
            <span className="text-warm-400 mr-1 hidden sm:inline whitespace-nowrap">Tamanho da fonte:</span>
            <div className="inline-flex rounded-lg bg-warm-800/80 p-0.5 border border-warm-700">
              <button
                id="btn-font-normal"
                type="button"
                onClick={() => setFontSize('normal')}
                className={`px-2 py-0.5 rounded-md transition text-xs font-semibold whitespace-nowrap cursor-pointer ${
                  fontSize === 'normal'
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'text-warm-300 hover:text-white hover:bg-warm-700/60'
                }`}
                title="Tamanho padrão de leitura"
              >
                A
              </button>
              <button
                id="btn-font-large"
                type="button"
                onClick={() => setFontSize('large')}
                className={`px-2 py-0.5 rounded-md transition text-xs font-semibold whitespace-nowrap cursor-pointer ${
                  fontSize === 'large'
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'text-warm-300 hover:text-white hover:bg-warm-700/60'
                }`}
                title="Tamanho Confortável (+15%)"
              >
                A+
              </button>
              <button
                id="btn-font-xlarge"
                type="button"
                onClick={() => setFontSize('xlarge')}
                className={`px-2 py-0.5 rounded-md transition text-xs font-bold whitespace-nowrap cursor-pointer ${
                  fontSize === 'xlarge'
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'text-warm-300 hover:text-white hover:bg-warm-700/60'
                }`}
                title="Tamanho Grande (+30%)"
              >
                A++
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-warm-200/90 py-2 sm:py-2.5'
            : 'bg-white border-b border-warm-200/80 py-2.5 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3 md:gap-5 min-h-[80px] sm:min-h-[86px]">
          
          {/* Brand Logo - 240px width with perfect vertical centering and full visibility */}
          <div id="header-logo-container" className="flex items-center shrink-0">
            <a href="#" className="flex items-center group py-1" aria-label="Depois dos 60 — Início">
              <img 
                src={logoImage} 
                alt="Depois dos 60 — Guia Prático de Prevenção & Autonomia" 
                className="w-[185px] xs:w-[210px] sm:w-[230px] md:w-[240px] h-auto cursor-pointer transition-transform duration-150 group-hover:scale-[1.01]"
                style={{
                  width: '240px',
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </a>
          </div>

          {/* Desktop Navigation - Single-line with balanced spacing */}
          <nav className="hidden xl:flex items-center gap-3.5 2xl:gap-5 text-[13px] 2xl:text-sm font-medium text-warm-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap hover:text-brand-700 hover:bg-brand-50/60 px-2 2xl:px-2.5 py-1.5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Semi-large screens (lg) compact nav */}
          <nav className="hidden lg:flex xl:hidden items-center gap-2 text-xs font-semibold text-warm-700">
            <a href="#dor" className="whitespace-nowrap hover:text-brand-700 px-1.5 py-1 rounded">O Desafio</a>
            <a href="#solucao" className="whitespace-nowrap hover:text-brand-700 px-1.5 py-1 rounded">A Solução</a>
            <a href="#capitulos" className="whitespace-nowrap hover:text-brand-700 px-1.5 py-1 rounded">8 Capítulos</a>
            <a href="#para-quem" className="whitespace-nowrap hover:text-brand-700 px-1.5 py-1 rounded">Para Quem É</a>
            <a href="#bonus" className="whitespace-nowrap hover:text-brand-700 px-1.5 py-1 rounded">Bônus App</a>
            <a href="#depoimentos" className="whitespace-nowrap hover:text-brand-700 px-1.5 py-1 rounded">Depoimentos</a>
            <a href="#faq" className="whitespace-nowrap hover:text-brand-700 px-1.5 py-1 rounded">Dúvidas</a>
          </nav>

          {/* Right Action: CTA Button + Mobile Menu Trigger */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              id="header-cta-button"
              type="button"
              onClick={onOpenCheckout}
              className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-sm hover:shadow transition flex items-center gap-1.5 sm:gap-2 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Garantir Ebook</span>
              <span className="hidden xs:inline-block bg-brand-700 px-1.5 py-0.5 rounded text-[11px] font-extrabold whitespace-nowrap">
                R$ 37
              </span>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-warm-700 hover:bg-warm-100 hover:text-warm-900 transition shrink-0 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-warm-200 px-4 pt-3 pb-5 space-y-2 shadow-lg animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-warm-100">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-warm-800 hover:bg-warm-50 font-medium text-sm whitespace-nowrap truncate"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <div className="pt-2">
              <button
                id="mobile-menu-checkout-btn"
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCheckout();
                }}
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <span>Quero Garantir Meu Ebook por R$ 37,00</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
