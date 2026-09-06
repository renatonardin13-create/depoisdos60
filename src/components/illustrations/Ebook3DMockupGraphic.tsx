import React, { useState, useRef } from 'react';
import { BookOpen, ZoomIn, FileText, CheckCircle2, ShieldCheck, Sparkles, Star } from 'lucide-react';

interface Ebook3DMockupGraphicProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onOpenCheckout?: () => void;
}

export const Ebook3DMockupGraphic: React.FC<Ebook3DMockupGraphicProps> = ({
  className = '',
  onOpenCheckout,
}) => {
  const [activeTab, setActiveTab] = useState<'3d' | 'cover' | 'pages'>('3d');
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || activeTab !== '3d') return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Calculate rotation limits (-12deg to +12deg)
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = -((y - centerY) / centerY) * 8;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className={`relative flex flex-col items-center justify-center select-none w-full ${className}`}>
      {/* Sub-view switcher tabs */}
      <div className="flex items-center justify-center gap-1.5 mb-4 z-20">
        <button
          type="button"
          onClick={() => setActiveTab('3d')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-xs ${
            activeTab === '3d'
              ? 'bg-amber-400 text-amber-950 font-black scale-105 shadow-amber-500/20'
              : 'bg-black/60 text-emerald-200 hover:text-white hover:bg-black/80 border border-emerald-500/20'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Livro 3D Bestseller</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('cover')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-xs ${
            activeTab === 'cover'
              ? 'bg-amber-400 text-amber-950 font-black scale-105 shadow-amber-500/20'
              : 'bg-black/60 text-emerald-200 hover:text-white hover:bg-black/80 border border-emerald-500/20'
          }`}
        >
          <ZoomIn className="w-3.5 h-3.5" />
          <span>Capa em Alta Definição</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('pages')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-xs ${
            activeTab === 'pages'
              ? 'bg-amber-400 text-amber-950 font-black scale-105 shadow-amber-500/20'
              : 'bg-black/60 text-emerald-200 hover:text-white hover:bg-black/80 border border-emerald-500/20'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Folhear por Dentro</span>
        </button>
      </div>

      {/* Atmospheric Glow */}
      <div 
        className="absolute -inset-6 rounded-full bg-gradient-to-tr from-emerald-500/20 via-brand-400/15 to-amber-300/20 blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      {/* VIEW 1: 3D HARDCOVER BESTSELLER BOOK */}
      {activeTab === '3d' && (
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            perspective: '1200px',
            transformStyle: 'preserve-3d',
          }}
          className="w-full flex flex-col items-center justify-center transition-transform duration-200 ease-out cursor-pointer"
          onClick={onOpenCheckout}
          title="Clique para garantir o seu exemplar"
        >
          <div
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: tilt.x === 0 && tilt.y === 0 ? 'transform 0.5s ease-out' : 'none',
              transformStyle: 'preserve-3d',
            }}
            className="relative w-full max-w-[460px] flex items-center justify-center"
          >
            <svg
              viewBox="0 0 540 660"
              className="w-full h-auto drop-shadow-2xl overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Edição 3D Bestseller do Ebook Depois dos 60 com acabamento capa dura verde-esmeralda e detalhes em hot-stamping dourado"
            >
              <defs>
                {/* Contact Shadow Under Book */}
                <radialGradient id="deepContactShadow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#000000" stopOpacity="0.8" />
                  <stop offset="45%" stopColor="#02140e" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#02140e" stopOpacity="0" />
                </radialGradient>

                {/* Diffuse Ambient Floor Shadow */}
                <ellipse id="diffuseShadowShape" cx="280" cy="590" rx="210" ry="34" />
                <radialGradient id="ambientFloorShadow" cx="45%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#010d09" stopOpacity="0.6" />
                  <stop offset="60%" stopColor="#02140e" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#02140e" stopOpacity="0" />
                </radialGradient>

                {/* Spine Cylinder Gradient */}
                <linearGradient id="spineCylinderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#01140e" />
                  <stop offset="25%" stopColor="#04261d" />
                  <stop offset="60%" stopColor="#094535" />
                  <stop offset="85%" stopColor="#052c21" />
                  <stop offset="100%" stopColor="#02140e" />
                </linearGradient>

                {/* Front Cover Luxury Leatherette Gradient */}
                <linearGradient id="coverLeatherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#042820" />
                  <stop offset="35%" stopColor="#084234" />
                  <stop offset="70%" stopColor="#0b5240" />
                  <stop offset="100%" stopColor="#021b14" />
                </linearGradient>

                {/* Metallic Gold Foil Hot-Stamping Multi-Stop */}
                <linearGradient id="goldMetallicFoil" x1="0%" y1="0%" x2="100%" y2="85%">
                  <stop offset="0%" stopColor="#fff9d2" />
                  <stop offset="25%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#fbbf24" />
                  <stop offset="75%" stopColor="#fef08a" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>

                {/* Subtle Gold Foil Frame */}
                <linearGradient id="goldFrameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#fef08a" stopOpacity="1" />
                  <stop offset="100%" stopColor="#d97706" stopOpacity="0.85" />
                </linearGradient>

                {/* Gilded Golden Pages Side Block */}
                <linearGradient id="gildedPagesEdge" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d4af37" />
                  <stop offset="25%" stopColor="#f7e9a0" />
                  <stop offset="50%" stopColor="#e5c158" />
                  <stop offset="80%" stopColor="#fced9d" />
                  <stop offset="100%" stopColor="#b38f29" />
                </linearGradient>

                {/* Gilded Top Pages Gradient */}
                <linearGradient id="gildedTopPages" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#997820" />
                  <stop offset="50%" stopColor="#dfbf5e" />
                  <stop offset="100%" stopColor="#f7e9a0" />
                </linearGradient>

                {/* Golden Satin Ribbon Bookmark Gradient */}
                <linearGradient id="satinRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="30%" stopColor="#fef08a" />
                  <stop offset="70%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#b45309" />
                </linearGradient>

                {/* Cover Specular Sheen */}
                <linearGradient id="coverSpecularSheen" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.16" />
                  <stop offset="40%" stopColor="#ffffff" stopOpacity="0.04" />
                  <stop offset="70%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* ============================================================ */}
              {/* 1. FLOOR DROP SHADOWS                                        */}
              {/* ============================================================ */}
              <ellipse cx="280" cy="590" rx="210" ry="34" fill="url(#ambientFloorShadow)" />
              <ellipse cx="270" cy="580" rx="160" ry="18" fill="url(#deepContactShadow)" />
              <ellipse cx="380" cy="625" rx="35" ry="8" fill="#000000" opacity="0.4" />

              {/* ============================================================ */}
              {/* 2. SATIN RIBBON BOOKMARK (FLOWING OUT OF BASE)               */}
              {/* ============================================================ */}
              {/* Ribbon shadow on floor */}
              <path
                d="M 416 535 C 418 570 395 598 375 620 C 362 632 348 638 335 642 C 342 635 348 625 355 618 C 372 600 388 578 396 535 Z"
                fill="#000000"
                opacity="0.3"
              />
              {/* Gold Satin Ribbon Body */}
              <path
                d="M 412 530 C 416 565 392 595 372 616 C 360 628 346 634 332 638 L 342 626 L 330 618 C 344 615 358 608 368 596 C 386 575 394 555 396 530 Z"
                fill="url(#satinRibbonGrad)"
                stroke="#d97706"
                strokeWidth="0.8"
                filter="drop-shadow(0 3px 5px rgba(0,0,0,0.35))"
              />

              {/* ============================================================ */}
              {/* 3. GILDED PAGE BLOCK (PARALLEL PERSPECTIVE: dx=40, dy=-24)   */}
              {/* ============================================================ */}
              {/* Fore-edge (Side Paper Block) */}
              <path
                d="M 404 121 L 444 97 L 444 517 L 404 541 Z"
                fill="url(#gildedPagesEdge)"
                stroke="#b38f29"
                strokeWidth="0.8"
              />

              {/* Fine micro-ridges on gilded page edge */}
              {[...Array(20)].map((_, i) => (
                <line
                  key={`gilded-ridge-${i}`}
                  x1="404"
                  y1={135 + i * 20}
                  x2="444"
                  y2={111 + i * 20}
                  stroke="#997820"
                  strokeWidth="0.5"
                  strokeOpacity="0.4"
                />
              ))}

              {/* Top Paper Block (Gilded Top) */}
              <path
                d="M 133 103 L 173 79 L 444 97 L 404 121 Z"
                fill="url(#gildedTopPages)"
                stroke="#a6852a"
                strokeWidth="0.8"
              />

              {/* Back Cover Board Lip Overhang */}
              <path
                d="M 444 97 L 452 92 L 452 522 L 444 517 Z"
                fill="#02140e"
                stroke="#04261d"
                strokeWidth="0.8"
              />

              {/* ============================================================ */}
              {/* 4. ROUNDED BOOK SPINE (LEFT)                                 */}
              {/* ============================================================ */}
              <path
                d="M 65 120 Q 95 107 125 95 L 125 530 Q 95 542 65 555 Z"
                fill="url(#spineCylinderGrad)"
                stroke="#02140e"
                strokeWidth="1.2"
              />

              {/* Spine French Groove / Casing Joint Shadow & Highlight */}
              <line x1="125" y1="95" x2="125" y2="530" stroke="#000000" strokeWidth="2" strokeOpacity="0.8" />
              <line x1="127" y1="95" x2="127" y2="530" stroke="#fef08a" strokeWidth="0.6" strokeOpacity="0.25" />

              {/* Spine 4 Raised Binding Ribs (Nervuras de Encadernação) */}
              {[155, 230, 410, 480].map((yRib, idx) => (
                <g key={`spine-rib-${idx}`}>
                  {/* Dark Under-Rib Shadow */}
                  <path
                    d={`M 65 ${yRib + 4} Q 95 ${yRib - 9} 125 ${yRib - 21}`}
                    stroke="#000000"
                    strokeWidth="2.5"
                    strokeOpacity="0.7"
                    fill="none"
                  />
                  {/* Gold Foil Rib Highlight */}
                  <path
                    d={`M 65 ${yRib} Q 95 ${yRib - 13} 125 ${yRib - 25}`}
                    stroke="url(#goldMetallicFoil)"
                    strokeWidth="2"
                    fill="none"
                  />
                </g>
              ))}

              {/* Spine Top Crest */}
              <circle cx="95" cy="180" r="5" fill="url(#goldMetallicFoil)" />
              <circle cx="95" cy="180" r="2.5" fill="#04261d" />

              {/* Spine Embossed Gold Title (Vertical) */}
              <g transform="translate(95, 320) rotate(-78)">
                <text
                  textAnchor="middle"
                  fill="url(#goldMetallicFoil)"
                  fontSize="11"
                  fontFamily="'Fraunces', serif"
                  fontWeight="900"
                  letterSpacing="3.5"
                  filter="drop-shadow(0 1px 2px rgba(0,0,0,0.7))"
                >
                  DEPOIS DOS 60
                </text>
              </g>

              {/* Spine Bottom Edition Year */}
              <text
                x="95"
                y="520"
                textAnchor="middle"
                fill="url(#goldMetallicFoil)"
                fontSize="7.5"
                fontFamily="sans-serif"
                fontWeight="900"
                letterSpacing="1.5"
              >
                2026
              </text>

              {/* ============================================================ */}
              {/* 5. FRONT COVER HARDBOARD                                     */}
              {/* ============================================================ */}
              <path
                d="M 125 95 L 410 115 L 410 550 L 125 530 Z"
                fill="url(#coverLeatherGrad)"
                stroke="#063529"
                strokeWidth="1.5"
              />

              {/* Front Cover Outer Gold Filigree Border */}
              <path
                d="M 145 115 L 392 133 L 392 530 L 145 512 Z"
                stroke="url(#goldFrameGrad)"
                strokeWidth="1.6"
                fill="none"
              />

              {/* Inner Fine Dashed Gold Border */}
              <path
                d="M 149 119 L 388 136 L 388 526 L 149 508 Z"
                stroke="url(#goldMetallicFoil)"
                strokeWidth="0.8"
                strokeDasharray="4 2"
                fill="none"
              />

              {/* Baroque Corner Fleurons / Flourishes on Cover */}
              {/* Top Left */}
              <circle cx="154" cy="125" r="3" fill="url(#goldMetallicFoil)" />
              <path d="M 149 125 L 160 125 M 154 120 L 154 130" stroke="url(#goldMetallicFoil)" strokeWidth="0.8" />
              {/* Top Right */}
              <circle cx="383" cy="142" r="3" fill="url(#goldMetallicFoil)" />
              <path d="M 378 142 L 388 142 M 383 137 L 383 147" stroke="url(#goldMetallicFoil)" strokeWidth="0.8" />
              {/* Bottom Left */}
              <circle cx="154" cy="502" r="3" fill="url(#goldMetallicFoil)" />
              <path d="M 149 502 L 160 502 M 154 497 L 154 507" stroke="url(#goldMetallicFoil)" strokeWidth="0.8" />
              {/* Bottom Right */}
              <circle cx="383" cy="520" r="3" fill="url(#goldMetallicFoil)" />
              <path d="M 378 520 L 388 520 M 383 515 L 383 525" stroke="url(#goldMetallicFoil)" strokeWidth="0.8" />

              {/* ============================================================ */}
              {/* COVER CONTENT (MATHEMATICALLY CENTERED AT X=268)             */}
              {/* ============================================================ */}

              {/* Official Edition Oval Badge */}
              <g transform="translate(268, 142)">
                <rect
                  x="-72"
                  y="-11"
                  width="144"
                  height="22"
                  rx="11"
                  fill="#011811"
                  stroke="url(#goldMetallicFoil)"
                  strokeWidth="1.2"
                />
                <text
                  x="0"
                  y="4"
                  textAnchor="middle"
                  fill="url(#goldMetallicFoil)"
                  fontSize="8"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                  fontWeight="900"
                  letterSpacing="1.8"
                >
                  ★ EDIÇÃO OFICIAL 2026 ★
                </text>
              </g>

              {/* Eyebrow Label */}
              <text
                x="268"
                y="174"
                textAnchor="middle"
                fill="#86efac"
                fontSize="9"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontWeight="800"
                letterSpacing="2.5"
              >
                MANUAL PRÁTICO DEFINITIVO
              </text>

              {/* Main Title: "Depois dos" */}
              <text
                x="268"
                y="206"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="24"
                fontFamily="'Fraunces', serif"
                fontWeight="700"
                fontStyle="italic"
                letterSpacing="1"
                filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))"
              >
                Depois dos
              </text>

              {/* Monumental Gold "60" Emblem */}
              <text
                x="268"
                y="266"
                textAnchor="middle"
                fill="url(#goldMetallicFoil)"
                fontSize="68"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontWeight="900"
                letterSpacing="-1"
                filter="drop-shadow(0 4px 8px rgba(0,0,0,0.5))"
              >
                60
              </text>

              {/* Subtitle - Line 1 */}
              <text
                x="268"
                y="292"
                textAnchor="middle"
                fill="#fef08a"
                fontSize="10"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontWeight="800"
                letterSpacing="0.4"
              >
                50 Cuidados Que Todo Idoso e Sua Família
              </text>
              {/* Subtitle - Line 2 */}
              <text
                x="268"
                y="308"
                textAnchor="middle"
                fill="#ecfdf5"
                fontSize="10"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontWeight="600"
              >
                Precisam Conhecer para Viver Bem
              </text>

              {/* Centerpiece Vector: Intricate Golden Longevity Crest */}
              <g transform="translate(268, 372)">
                {/* Outer Beaded Ring */}
                <circle cx="0" cy="0" r="44" stroke="url(#goldMetallicFoil)" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.7" />
                {/* Solid Enamel Medal */}
                <circle cx="0" cy="0" r="38" fill="#011a12" stroke="url(#goldMetallicFoil)" strokeWidth="1.4" />

                {/* Tree of Longevity Trunk */}
                <path
                  d="M -2 24 Q 0 12 0 0 Q 0 -12 -2 -22 M 2 24 Q 0 12 0 0 Q 0 -12 2 -22"
                  stroke="url(#goldMetallicFoil)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                {/* Branches & Leaves */}
                <path d="M 0 -4 Q -12 -10 -18 -5 Q -12 3 0 0" fill="url(#goldMetallicFoil)" />
                <path d="M 0 -4 Q 12 -10 18 -5 Q 12 3 0 0" fill="url(#goldMetallicFoil)" />
                <path d="M 0 -12 Q -14 -20 -16 -27 Q -3 -22 0 -14" fill="url(#goldMetallicFoil)" />
                <path d="M 0 -12 Q 14 -20 16 -27 Q 3 -22 0 -14" fill="url(#goldMetallicFoil)" />
                <circle cx="0" cy="-24" r="3.5" fill="#fffbeb" />

                {/* Supporting Care Heart at Core */}
                <path
                  d="M 0 8 C -4 3 -8 7 -8 11 C -8 16 0 20 0 20 C 0 20 8 16 8 11 C 8 7 4 3 0 8 Z"
                  fill="#f59e0b"
                />

                {/* Micro Latin Banner */}
                <text
                  x="0"
                  y="32"
                  textAnchor="middle"
                  fill="#fef08a"
                  fontSize="5"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                  fontWeight="800"
                  letterSpacing="1"
                >
                  SAÚDE • AUTONOMIA
                </text>
              </g>

              {/* Three Core Pillars Banner */}
              <text
                x="268"
                y="436"
                textAnchor="middle"
                fill="#a7f3d0"
                fontSize="8"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontWeight="800"
                letterSpacing="1.2"
              >
                PREVENÇÃO ATIVA ◆ AUTONOMIA ◆ PAZ EM FAMÍLIA
              </text>

              {/* Golden Divider Line */}
              <line x1="175" y1="452" x2="361" y2="456" stroke="url(#goldMetallicFoil)" strokeWidth="1" strokeOpacity="0.8" />

              {/* Bottom Specifications - Safely positioned ABOVE the border! */}
              <text
                x="268"
                y="476"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="8.5"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontWeight="700"
              >
                50 Páginas • 8 Capítulos • Letras Grandes
              </text>
              <text
                x="268"
                y="492"
                textAnchor="middle"
                fill="url(#goldMetallicFoil)"
                fontSize="8"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontWeight="800"
                letterSpacing="0.5"
              >
                Checklists Práticos Prontos para Aplicar
              </text>

              {/* Specular Diagonal Sheen Overlay */}
              <path
                d="M 125 95 L 280 106 L 190 535 L 125 530 Z"
                fill="url(#coverSpecularSheen)"
                pointerEvents="none"
              />
            </svg>
          </div>

          <p className="text-[11px] text-emerald-200/80 mt-1 font-medium flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Passe o mouse ou toque para inclinar em 3D</span>
          </p>
        </div>
      )}

      {/* VIEW 2: HIGH DEFINITION FLAT COVER */}
      {activeTab === 'cover' && (
        <div 
          onClick={onOpenCheckout}
          className="w-full max-w-[360px] aspect-[1/1.42] rounded-2xl bg-gradient-to-b from-[#042820] via-[#09493a] to-[#021812] border-2 border-amber-400/60 p-6 sm:p-7 flex flex-col justify-between text-center relative overflow-hidden shadow-2xl cursor-pointer hover:scale-[1.01] transition-transform duration-300"
          title="Clique para garantir o seu exemplar"
        >
          {/* Subtle Linen Background Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none" />

          {/* Golden Frame */}
          <div className="absolute inset-3 border-2 border-amber-400/50 rounded-xl pointer-events-none" />
          <div className="absolute inset-4 border border-dashed border-amber-400/40 rounded-lg pointer-events-none" />

          {/* Top Badge */}
          <div className="relative z-10 pt-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 border border-amber-400/50 text-[10px] font-black text-amber-300 uppercase tracking-widest shadow-sm">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              Edição Oficial 2026 • Guia Ilustrado
            </span>
            <p className="text-[9.5px] uppercase font-bold text-emerald-300 tracking-widest mt-2">
              Manual Prático Definitivo
            </p>
          </div>

          {/* Title Area */}
          <div className="relative z-10 py-2">
            <h3 className="font-serif italic text-2xl sm:text-3xl text-white font-bold drop-shadow-md">
              Depois dos
            </h3>
            <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 block tracking-tight -mt-1 drop-shadow-md">
              60
            </span>
            <p className="text-xs sm:text-sm font-bold text-amber-200 mt-1">
              50 Cuidados Que Todo Idoso e Sua Família
            </p>
            <p className="text-xs text-white/90 font-medium">
              Precisam Conhecer para Viver Bem
            </p>
          </div>

          {/* Central Emblem */}
          <div className="relative z-10 my-auto flex justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400/20 via-brand-950 to-black border-2 border-amber-400/60 p-2 flex flex-col items-center justify-center shadow-lg">
              <ShieldCheck className="w-8 h-8 text-amber-400" />
              <span className="text-[7.5px] font-black uppercase tracking-wider text-amber-200 mt-1">
                Vitalidade & Paz
              </span>
            </div>
          </div>

          {/* Bottom Footer Area */}
          <div className="relative z-10 pb-2 space-y-1.5 border-t border-amber-400/30 pt-3">
            <p className="text-[9px] font-bold text-emerald-200 tracking-wider uppercase">
              Prevenção Ativa • Autonomia • Apoio Familiar
            </p>
            <div className="flex items-center justify-between text-[10px] text-warm-200 px-2 font-semibold">
              <span>50 Páginas • 8 Capítulos</span>
              <span className="text-amber-300 font-bold">100% Legível</span>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: OPEN BOOK INTERIOR SPREAD SNEAK PEEK */}
      {activeTab === 'pages' && (
        <div 
          onClick={onOpenCheckout}
          className="w-full max-w-[500px] aspect-[16/10] bg-[#f8f6f0] rounded-2xl p-3 sm:p-4 border-4 border-amber-500/40 shadow-2xl relative flex text-left cursor-pointer hover:scale-[1.01] transition-transform duration-300 overflow-hidden"
          title="Clique para garantir o seu exemplar"
        >
          {/* Central Book Spine Fold Shadow */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-transparent via-neutral-900/15 to-transparent pointer-events-none z-10" />

          {/* Left Page: Chapter Intro */}
          <div className="w-1/2 pr-3 sm:pr-4 flex flex-col justify-between border-r border-neutral-300/80 text-neutral-800">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-bold text-emerald-800 uppercase tracking-wider border-b border-neutral-200 pb-1">
                <span>Capítulo 01</span>
                <span>Casa Segura</span>
              </div>
              <h4 className="font-serif text-xs sm:text-sm font-black text-neutral-900 leading-tight">
                Blindando Banheiros e Corredores Sem Reformas Caras
              </h4>
              <p className="text-[8px] sm:text-[9px] text-neutral-600 leading-relaxed">
                Mais de 70% dos acidentes domésticos acontecem em trajetos simples à noite. Pequenas mudanças imediatas eliminam riscos:
              </p>
              
              {/* Highlight Tip Card */}
              <div className="p-1.5 sm:p-2 rounded-lg bg-amber-50 border-l-2 border-amber-500 text-[7.5px] sm:text-[8.5px] text-amber-950 font-medium leading-snug">
                <strong className="text-amber-900 font-bold block">★ Dica de Aplicação Imediata:</strong>
                Luzes de LED com sensor de movimento na tomada custam menos de R$ 25 e guiam os passos até o banheiro.
              </div>
            </div>

            <div className="text-[7.5px] text-neutral-400 flex justify-between pt-1 border-t border-neutral-200">
              <span>Depois dos 60</span>
              <span>pág. 14</span>
            </div>
          </div>

          {/* Right Page: Checklist */}
          <div className="w-1/2 pl-3 sm:pr-2 sm:pl-4 flex flex-col justify-between text-neutral-800">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-bold text-emerald-800 uppercase tracking-wider border-b border-neutral-200 pb-1">
                <span>Checklist Prático</span>
                <span>100% Visual</span>
              </div>
              <h4 className="font-serif text-xs sm:text-sm font-black text-neutral-900 leading-tight">
                Itens para Verificar Hoje
              </h4>

              <div className="space-y-1 sm:space-y-1.5 pt-0.5 text-[7.5px] sm:text-[8.5px]">
                <div className="flex items-start gap-1 p-1 rounded bg-white shadow-2xs border border-neutral-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-tight font-medium">Barras de apoio firmes ao lado do vaso e box</span>
                </div>
                <div className="flex items-start gap-1 p-1 rounded bg-white shadow-2xs border border-neutral-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-tight font-medium">Tapetes soltos removidos ou colados com fita antiderrapante</span>
                </div>
                <div className="flex items-start gap-1 p-1 rounded bg-white shadow-2xs border border-neutral-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-tight font-medium">Interruptores acessíveis ao lado da cama</span>
                </div>
              </div>
            </div>

            <div className="text-[7.5px] text-neutral-400 flex justify-between pt-1 border-t border-neutral-200">
              <span className="text-emerald-700 font-bold">Edição 2026</span>
              <span>pág. 15</span>
            </div>
          </div>
        </div>
      )}

      {/* Trust & Instant Access Badges */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-center">
        <span className="text-[11px] font-bold text-amber-300 bg-black/60 px-3 py-1 rounded-full border border-amber-400/40 shadow-xs flex items-center gap-1.5">
          <Star className="w-3 h-3 fill-amber-400" />
          <span>50 Páginas em Alta Resolução • Diagramação para Leitura Fácil</span>
        </span>
      </div>
    </div>
  );
};
