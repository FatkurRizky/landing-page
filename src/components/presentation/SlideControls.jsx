import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export default function SlideControls({
  activeSlideIndex,
  setActiveSlideIndex,
  isAutoPlay,
  setIsAutoPlay,
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
    <footer className="relative z-20 w-full px-6 py-4 md:px-12 md:py-5 flex items-center justify-between border-t border-[#0F3040]/10 bg-white/50 backdrop-blur-md">
      
      {/* Bottom Left Branding Tag */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-[#0F3040] text-white flex items-center justify-center text-xs font-mono font-bold shadow-xs">
          <Play className="w-3 h-3 fill-white ml-0.5" />
        </div>
        <span className="text-xs md:text-sm font-black text-[#0F3040] tracking-tight">
          {personal.nickname} <span className="text-[#A56F63] font-bold">| {personal.title.split('|')[0]}</span>
        </span>
      </div>

      {/* Center Slide Indicators styled with manly palette (#0F3040 & #D99B7F) */}
      <div className="flex items-center gap-2">
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
      <div className="flex items-center gap-3">
        {/* Slide Counter */}
        <div className="text-xs font-mono font-bold text-[#0F3040] bg-[#f7f6f4] px-3 py-1.5 rounded-lg border border-[#0F3040]/15">
          <span className="text-[#0F3040] font-black">{String(activeSlideIndex + 1).padStart(2, '0')}</span>
          <span className="text-[#464858] mx-1">/</span>
          <span>{String(totalSlides).padStart(2, '0')}</span>
        </div>

        {/* Auto Play Toggle Button */}
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className={`p-2 rounded-xl border text-xs font-bold flex items-center gap-1 transition-all ${
            isAutoPlay
              ? 'bg-[#D99B7F]/20 text-[#0F3040] border-[#D99B7F] shadow-xs'
              : 'bg-white text-[#464858] border-[#0F3040]/20 hover:bg-slate-100'
          }`}
          title={isAutoPlay ? 'Jeda Autoplay' : 'Mulai Autoplay Presentation'}
        >
          {isAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline text-[11px]">{isAutoPlay ? 'Auto ON' : 'Auto'}</span>
        </button>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-1">
          <button
            onClick={handlePrev}
            className="p-2 rounded-xl bg-white hover:bg-slate-100 border border-[#0F3040]/20 text-[#0F3040] transition-colors shadow-2xs active:scale-95"
            title="Slide Sebelumnya (Tombol Panah Kiri)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-xl bg-[#0F3040] hover:bg-[#464858] text-white transition-colors shadow-md shadow-[#0F3040]/20 active:scale-95"
            title="Slide Selanjutnya (Tombol Panah Kanan)"
          >
            <ChevronRight className="w-4 h-4 text-[#D99B7F]" />
          </button>
        </div>
      </div>

    </footer>
  );
}
