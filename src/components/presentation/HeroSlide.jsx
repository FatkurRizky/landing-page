import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ArrowRight, ChevronRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSlide({ onNavigateNext, onOpenContact }) {
  const { personal } = PORTFOLIO_DATA;

  return (
    <div className="relative w-full min-h-full flex flex-col justify-between p-4 sm:p-6 md:p-12 lg:p-16 max-w-7xl mx-auto">
      {/* Hero Body Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center my-auto z-10 py-4 sm:py-0">
        
        {/* Left Typography Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-6"
        >
          {/* Top Ribbon Tag styled with #0F3040 and #D99B7F */}
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#0F3040] rounded-sm flex items-center justify-center transform -rotate-12 shadow-md">
              <ChevronRight className="w-3 h-3 text-white stroke-[3]" />
            </div>
            <span className="text-[11px] sm:text-xs font-extrabold tracking-wider text-[#0F3040] uppercase bg-[#D99B7F]/20 px-2.5 py-1 rounded-md border border-[#D99B7F]/40">
              {personal.statusBadge}
            </span>
          </div>

          {/* Main Hero Headline matching reference image style with #0F3040 & #D99B7F */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#0F3040] font-sans leading-none">
              Porto<span className="text-[#D99B7F]">folio</span>
            </h1>

            <div className="pt-3 sm:pt-4 space-y-1.5 sm:space-y-2">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F3040] tracking-tight">
                Muhammad <span className="font-light text-[#464858]">Fatkur Rizky</span>
              </h2>
              <p className="text-base sm:text-xl lg:text-2xl italic font-bold text-[#A56F63] tracking-wide font-sans">
                {personal.title}
              </p>
              
              {/* Underline Bar styled with #0F3040 */}
              <div className="w-36 sm:w-64 h-1.5 bg-[#0F3040] rounded-full mt-2" />
            </div>
          </div>

          {/* Summary Paragraph */}
          <p className="text-[#464858] text-xs sm:text-base leading-relaxed max-w-xl font-medium">
            {personal.summary}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
            {['Node.js', 'Express.js', 'Python', 'MySQL', 'PostgreSQL', 'Ubuntu Server'].map((tech) => (
              <span
                key={tech}
                className="text-[11px] sm:text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white text-[#0F3040] border border-[#0F3040]/20 shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2 sm:pt-4">
            <button
              onClick={onNavigateNext}
              className="inline-flex items-center gap-2 bg-[#0F3040] hover:bg-[#464858] text-white font-bold px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-lg shadow-[#0F3040]/25 transition-all hover:scale-105 active:scale-95 text-xs sm:text-sm"
            >
              <span>Lihat Detail Profil</span>
              <ArrowRight className="w-4 h-4 text-[#D99B7F]" />
            </button>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#0F3040] font-bold px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl border border-[#0F3040]/30 shadow-sm transition-all hover:border-[#0F3040] text-xs sm:text-sm"
            >
              <Mail className="w-4 h-4 text-[#A56F63]" />
              <span>Kontak Me</span>
            </button>
          </div>
        </motion.div>

        {/* Right Photo Column: Enlarged Arch Frame styled with Color Palette */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative mt-4 lg:mt-0"
        >
          {/* Responsive Container */}
          <div className="relative w-56 sm:w-80 md:w-96 lg:w-[450px] aspect-[3/4] flex items-end">
            
            {/* Soft Ambient Shadow Backdrop in #D99B7F & #0F3040 */}
            <div className="absolute inset-0 bg-[#0F3040]/15 rounded-[140px_140px_24px_24px] sm:rounded-[180px_180px_32px_32px] blur-2xl -z-10 transform translate-y-4" />

            {/* Clean Enlarged Arch Photo Container */}
            <div className="relative w-full h-full rounded-[140px_140px_24px_24px] sm:rounded-[180px_180px_32px_32px] overflow-hidden border-4 border-white shadow-2xl bg-white flex items-center justify-center">
              <img
                src={personal.avatar}
                alt={personal.fullName}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
