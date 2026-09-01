import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ChevronDown, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SkillsSlide() {
  const { mainSkillPillars, contact } = PORTFOLIO_DATA;

  // Header colors for 3 pillar cards matching user palette
  const headerColors = [
    { bg: 'bg-[#0F3040]', text: 'text-white', badgeBg: 'bg-[#D99B7F]', badgeText: 'text-[#0F3040]', border: 'border-[#0F3040]' },
    { bg: 'bg-[#464858]', text: 'text-white', badgeBg: 'bg-[#A56F63]', badgeText: 'text-white', border: 'border-[#464858]' },
    { bg: 'bg-[#A56F63]', text: 'text-white', badgeBg: 'bg-[#0F3040]', badgeText: 'text-white', border: 'border-[#A56F63]' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-12 lg:p-16 max-w-7xl mx-auto z-10">
      
      {/* Slide Title matching Image 1: "Keahlian Utama" */}
      <div className="flex flex-col items-center justify-center text-center my-2">
        {/* Blue Ribbon Tab Tag */}
        <div className="w-6 h-6 bg-[#0F3040] rounded-sm flex items-center justify-center transform -rotate-12 mb-1 shadow-md">
          <ChevronRight className="w-4 h-4 text-white stroke-[3]" />
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#0F3040] font-sans leading-none">
          Keahlian
        </h2>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#D99B7F] font-sans leading-tight">
          Utama
        </h2>
      </div>

      {/* 3 Pillars Grid Matching Image 1 styled with user palette */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto items-stretch">
        {mainSkillPillars.map((pillar, idx) => {
          const style = headerColors[idx % headerColors.length];
          return (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className={`flex flex-col rounded-3xl overflow-hidden border-2 ${style.border} bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group`}
            >
              {/* Header Block with Down Arrow Badge (Exact match to Image 1) */}
              <div className={`${style.bg} ${style.text} p-4 relative flex flex-col justify-center items-center text-center border-b border-black/10`}>
                <h3 className="text-lg md:text-xl font-black tracking-tight leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#D99B7F]">
                  {pillar.subtitle}
                </p>

                {/* Top-Right Circle Down Arrow Badge */}
                <div className={`absolute -bottom-3.5 right-4 w-8 h-8 rounded-full ${style.badgeBg} ${style.badgeText} flex items-center justify-center shadow-md border-2 border-white group-hover:scale-110 transition-transform`}>
                  <ChevronDown className="w-5 h-5 stroke-[3]" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-7 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-[#464858] text-xs md:text-sm font-medium leading-relaxed">
                  {pillar.description}
                </p>

                {/* Tech Badges matched to Fatkur's CV */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {pillar.techs.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#f7f6f4] text-[#0F3040] border border-[#0F3040]/15 group-hover:border-[#0F3040]/40 transition-colors"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#A56F63] shrink-0" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Right Link */}
      <div className="flex justify-end pt-2 text-xs font-mono text-[#464858]">
        <a
          href={contact.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#0F3040] font-bold transition-colors"
        >
          github.com/{contact.github.username}
        </a>
      </div>

    </div>
  );
}
