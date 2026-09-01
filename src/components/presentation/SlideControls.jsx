import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SlideControls({
  activeSlideIndex,
  setActiveSlideIndex,
}) {
  const { slides, personal } = PORTFOLIO_DATA;
  const totalSlides = slides.length;

  const handlePrev = () => {
    setActiveSlideIndex((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const handleNext = () => {
    setActiveSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  return (
    <footer className="relative z-20 w-full px-3 py-2.5 sm:px-6 sm:py-4 md:px-12 md:py-5 flex items-center justify-between border-t border-[#0F3040]/10 bg-white/50 backdrop-blur-md">
      
      {/* Bottom Left Branding Tag */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 min-w-0">
        <div className="w-6 h-6 rounded-full bg-[#0F3040] text-white flex items-center justify-center text-xs font-mono font-bold shadow-xs shrink-0">
          F
        </div>
        <span className="text-xs md:text-sm font-black text-[#0F3040] tracking-tight truncate">
          {personal.nickname} <span className="hidden md:inline text-[#A56F63] font-bold">| {personal.title.split('|')[0]}</span>
        </span>
      </div>

      {/* Center Slide Indicators styled with manly palette (#0F3040 & #D99B7F) */}
      <div className="hidden md:flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlideIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              activeSlideIndex === idx
                ? 'w-8 h-2 bg-[#0F3040] shadow-sm'
                : 'w-2 h-2 bg-[#464858]/30 hover:bg-[#464858]'
            }`}
            title={`Buka Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Bottom Right Slide Controller Buttons & Counter */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        {/* Slide Counter */}
        <div className="text-[11px] sm:text-xs font-mono font-bold text-[#0F3040] bg-[#f7f6f4] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-[#0F3040]/15">
          <span className="text-[#0F3040] font-black">{String(activeSlideIndex + 1).padStart(2, '0')}</span>
          <span className="text-[#464858] mx-0.5 sm:mx-1">/</span>
          <span>{String(totalSlides).padStart(2, '0')}</span>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-1">
          <button
            onClick={handlePrev}
            className="p-1.5 sm:p-2 rounded-xl bg-white hover:bg-slate-100 border border-[#0F3040]/20 text-[#0F3040] transition-colors shadow-2xs active:scale-95"
            title="Slide Sebelumnya (Tombol Panah Kiri)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-1.5 sm:p-2 rounded-xl bg-[#0F3040] hover:bg-[#464858] text-white transition-colors shadow-md shadow-[#0F3040]/20 active:scale-95"
            title="Slide Selanjutnya (Tombol Panah Kanan)"
          >
            <ChevronRight className="w-4 h-4 text-[#D99B7F]" />
          </button>
        </div>
      </div>

    </footer>
  );
}
