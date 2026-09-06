import React, { useState } from 'react';
import { salesContent } from '../data/salesContent';
import { ChapterItem } from '../types';
import { 
  Home, 
  HeartPulse, 
  Utensils, 
  Pill, 
  Footprints, 
  Smile, 
  Users, 
  FolderHeart, 
  CheckCircle2, 
  BookOpen, 
  ChevronRight, 
  ArrowRight,
  X,
  Sparkles,
  Layers
} from 'lucide-react';

interface ChaptersSectionProps {
  onOpenCheckout: () => void;
}

export const ChaptersSection: React.FC<ChaptersSectionProps> = ({ onOpenCheckout }) => {
  const { chapters } = salesContent;
  const [selectedChapter, setSelectedChapter] = useState<ChapterItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'home' | 'health' | 'family'>('all');

  const renderIcon = (name: string, className: string = 'w-5 h-5 sm:w-6 sm:h-6') => {
    switch (name) {
      case 'Home':
        return <Home className={className} />;
      case 'HeartPulse':
        return <HeartPulse className={className} />;
      case 'Utensils':
        return <Utensils className={className} />;
      case 'Pill':
        return <Pill className={className} />;
      case 'Footprints':
        return <Footprints className={className} />;
      case 'Smile':
        return <Smile className={className} />;
      case 'Users':
        return <Users className={className} />;
      case 'FolderHeart':
        return <FolderHeart className={className} />;
      default:
        return <BookOpen className={className} />;
    }
  };

  const filteredChapters = chapters.filter((c) => {
    if (activeFilter === 'home') return c.id === 1 || c.id === 5;
    if (activeFilter === 'health') return c.id === 2 || c.id === 3 || c.id === 4;
    if (activeFilter === 'family') return c.id === 6 || c.id === 7 || c.id === 8;
    return true;
  });

  return (
    <section id="capitulos" className="py-16 md:py-24 bg-white border-t border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-brand-900 bg-brand-100 px-3.5 py-1 rounded-full border border-brand-200 whitespace-nowrap">
            <BookOpen className="w-3.5 h-3.5 text-brand-700 shrink-0" />
            Estrutura Completa do Ebook
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-warm-950">
            O Que Você Vai Encontrar: 8 Capítulos e 50 Cuidados Práticos
          </h2>
          <p className="text-base sm:text-lg text-warm-600 max-w-3xl mx-auto">
            Sem enrolação nem páginas de teoria cansativa. Cada capítulo funciona como um checklist direto para aplicar hoje mesmo no conforto da sua casa.
          </p>
          
          {/* Summary Badges */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 pt-1 text-xs sm:text-sm font-semibold text-warm-800">
            <span className="bg-brand-50 border border-brand-200 text-brand-900 px-3 py-1 rounded-full whitespace-nowrap">
              ✓ 50 Cuidados Práticos
            </span>
            <span className="bg-warm-100 border border-warm-200 px-3 py-1 rounded-full text-warm-800 whitespace-nowrap">
              ✓ 128 Páginas de Conteúdo
            </span>
            <span className="bg-warm-100 border border-warm-200 px-3 py-1 rounded-full text-warm-800 whitespace-nowrap">
              ✓ Letra Confortável para Leitura
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 pb-8 flex-wrap">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-brand-600 text-white shadow-xs'
                : 'bg-warm-100 text-warm-700 hover:bg-warm-200'
            }`}
          >
            Todos os 8 Capítulos
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('home')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap cursor-pointer ${
              activeFilter === 'home'
                ? 'bg-brand-600 text-white shadow-xs'
                : 'bg-warm-100 text-warm-700 hover:bg-warm-200'
            }`}
          >
            🏠 Casa & Mobilidade
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('health')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap cursor-pointer ${
              activeFilter === 'health'
                ? 'bg-brand-600 text-white shadow-xs'
                : 'bg-warm-100 text-warm-700 hover:bg-warm-200'
            }`}
          >
            💊 Remédios & Saúde
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('family')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap cursor-pointer ${
              activeFilter === 'family'
                ? 'bg-brand-600 text-white shadow-xs'
                : 'bg-warm-100 text-warm-700 hover:bg-warm-200'
            }`}
          >
            ❤️ Família & Emergências
          </button>
        </div>

        {/* 8 Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredChapters.map((chapter) => (
            <div
              key={chapter.id}
              className="bg-warm-50/70 hover:bg-white rounded-3xl p-6 border border-warm-200/90 hover:border-brand-300 hover:shadow-md transition-all flex flex-col justify-between group text-left"
            >
              <div className="space-y-4">
                {/* Chapter Header */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-brand-100/90 text-brand-800 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors shrink-0">
                    {renderIcon(chapter.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-warm-600 uppercase tracking-wider bg-white px-2.5 py-1 rounded-md border border-warm-200 whitespace-nowrap">
                    {chapter.number}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-display font-bold text-lg text-warm-950 leading-snug group-hover:text-brand-900 transition-colors">
                    {chapter.title}
                  </h3>
                  <p className="text-xs text-warm-500 font-medium mt-1 leading-normal">
                    {chapter.subtitle}
                  </p>
                </div>

                {/* Quick Highlights */}
                <ul className="space-y-1.5 text-xs text-warm-700 pt-1">
                  {chapter.highlights.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-brand-600 font-bold shrink-0">•</span>
                      <span className="line-clamp-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 mt-4 border-t border-warm-200/70 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-brand-800 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-200 whitespace-nowrap">
                  {chapter.practicalTipsCount} cuidados
                </span>
                
                <button
                  type="button"
                  onClick={() => setSelectedChapter(chapter)}
                  className="text-xs font-bold text-warm-800 hover:text-brand-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>Ver detalhes</span>
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Bottom Banner for Chapters */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-brand-950 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl border border-brand-900">
          <div className="text-left space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold tracking-wider text-brand-300 bg-brand-900 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                Acesso Vitalício
              </span>
              <span className="text-xs text-brand-200">128 páginas • Acesso na Área de Membros</span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Todos os 8 capítulos disponíveis na sua Área de Membros
            </h3>
            <p className="text-xs sm:text-sm text-brand-200/90 max-w-2xl">
              Investimento único de R$ 37,00. Acesse o conteúdo completo online pela Área de Membros.
            </p>
          </div>

          <button
            id="chapters-section-cta"
            type="button"
            onClick={onOpenCheckout}
            className="w-full sm:w-auto bg-brand-500 hover:bg-brand-400 text-brand-950 font-extrabold text-base px-8 py-4 rounded-2xl transition flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-md whitespace-nowrap"
          >
            <span>Garantir Todos os 8 Capítulos</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </button>
        </div>

      </div>

      {/* Chapter Details Modal */}
      {selectedChapter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-warm-950/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-warm-200 relative max-h-[90vh] overflow-y-auto space-y-5">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-800 flex items-center justify-center shrink-0">
                  {renderIcon(selectedChapter.iconName)}
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-800 uppercase tracking-wider block whitespace-nowrap">
                    {selectedChapter.number} • {selectedChapter.practicalTipsCount} Cuidados Práticos
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-warm-950">
                    {selectedChapter.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedChapter(null)}
                className="p-2 rounded-full hover:bg-warm-100 text-warm-500 hover:text-warm-900 transition cursor-pointer shrink-0"
                aria-label="Fechar janela"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Subtitle & Summary */}
            <div className="space-y-3 text-warm-700 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-warm-900">
                {selectedChapter.subtitle}
              </p>
              <p className="bg-warm-50 p-4 rounded-2xl border border-warm-200 text-warm-800 text-sm">
                {selectedChapter.summary}
              </p>
            </div>

            {/* Highlights List */}
            <div className="space-y-2.5">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-warm-800">
                O que você vai aplicar neste capítulo:
              </h4>
              <div className="space-y-2">
                {selectedChapter.highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-warm-800">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Excerpt Quote */}
            <div className="p-4 rounded-2xl bg-brand-50 border border-brand-200 italic text-brand-950 text-xs sm:text-sm">
              {selectedChapter.excerptQuote}
            </div>

            {/* Modal Footer CTA */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-warm-100">
              <button
                type="button"
                onClick={() => setSelectedChapter(null)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-warm-700 hover:bg-warm-100 font-semibold text-sm cursor-pointer whitespace-nowrap"
              >
                Fechar
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedChapter(null);
                  onOpenCheckout();
                }}
                className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Garantir o Ebook Completo</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
