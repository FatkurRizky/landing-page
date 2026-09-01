import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Download } from 'lucide-react';

export default function PresentationHeader({ activeSlideIndex, setActiveSlideIndex }) {
  const { personal, slides } = PORTFOLIO_DATA;

  return (
    <header className="relative z-20 w-full px-6 py-4 md:px-12 md:py-6 flex items-center justify-between border-b border-[#0F3040]/10 bg-white/40 backdrop-blur-sm">
      {/* Top Left Header Label */}
      <div className="flex items-center gap-3">
        <span className="w-2.5 h-2.5 rounded-full bg-[#0F3040] animate-pulse" />
        <span className="text-xs md:text-sm font-bold tracking-wide text-[#0F3040] uppercase font-sans">
          {personal.headerTag}
        </span>
      </div>

      {/* Center Slide Navigation Tabs */}
      <nav className="hidden lg:flex items-center gap-1 bg-[#464858]/10 p-1 rounded-full border border-[#464858]/20 shadow-inner">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setActiveSlideIndex(idx)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
              activeSlideIndex === idx
                ? 'bg-[#0F3040] text-white shadow-md shadow-[#0F3040]/20'
                : 'text-[#464858] hover:text-[#0F3040] hover:bg-white/60'
            }`}
          >
            {slide.label}
          </button>
        ))}
      </nav>

      {/* Top Right Year & Action */}
      <div className="flex items-center gap-4">
        <a
          href={personal.cvPdfPath}
          download="Muhammad_Fatkur_Rizky_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#0F3040] bg-[#D99B7F]/20 hover:bg-[#D99B7F]/30 border border-[#D99B7F]/50 rounded-lg transition-colors shadow-xs"
          title="Unduh CV PDF Fatkur Rizky"
        >
          <Download className="w-3.5 h-3.5 text-[#0F3040]" />
          <span className="hidden sm:inline">Download CV</span>
        </a>
        <span className="text-lg md:text-xl font-black tracking-tight text-[#0F3040] font-mono">
          {personal.year}
        </span>
      </div>
    </header>
  );
}
