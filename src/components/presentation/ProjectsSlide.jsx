import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ChevronRight, Zap } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { motion } from 'framer-motion';

export default function ProjectsSlide({ onSelectProject }) {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-24 max-w-7xl mx-auto z-10"
    >
      {/* Top Section matching Image 4 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center mb-8">
        {/* Left Title */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#0F3040] rounded-sm flex items-center justify-center transform -rotate-12 mb-1 shadow-md">
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white stroke-[3]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#0F3040] font-sans leading-none">
            Proyek
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#D99B7F] font-sans leading-tight">
            Unggulan
          </h2>
        </div>

        {/* Right Header Box styled with #0F3040 and #D99B7F */}
        <div className="lg:col-span-7 relative flex items-center">
          <div className="w-full bg-[#0F3040] text-white p-5 rounded-2xl shadow-xl border border-[#0F3040] relative overflow-hidden">
            {/* Peach accent line */}
            <div className="absolute left-4 top-4 bottom-4 w-1 bg-[#D99B7F] rounded-full" />
            <p className="text-xs md:text-sm font-medium leading-relaxed pl-4 max-w-lg">
              Kumpulan proyek perangkat lunak, sistem backend API, keamanan Deep Learning, dan infrastruktur Linux yang dikembangkan oleh Fatkur Rizky.
            </p>
          </div>

          {/* Abstract Semi-Circle Decorative Shapes */}
          <div className="hidden sm:flex items-center absolute -right-4 -top-3 z-20 pointer-events-none">
            <div className="w-10 h-16 bg-[#464858] rounded-l-full shadow-md transform rotate-12" />
            <div className="w-8 h-14 bg-[#A56F63] rounded-l-full shadow-xs transform -rotate-6" />
          </div>
        </div>
      </div>

      {/* 2x3 Grid Layout of 6 Cards Matching Image 4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-auto items-stretch relative">
        
        {/* Bottom Left Abstract Decorative Shapes */}
        <div className="absolute -left-8 -bottom-8 pointer-events-none z-0 hidden lg:flex items-end gap-1 opacity-70">
          <div className="w-12 h-24 bg-[#0F3040] rounded-r-full shadow-lg transform -rotate-12" />
          <div className="w-10 h-20 bg-[#D99B7F] rounded-r-full shadow-md" />
        </div>

        {projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="bg-white border border-[#0F3040]/15 rounded-2xl p-4 shadow-md hover:shadow-xl hover:border-[#0F3040] transition-all flex flex-col justify-between group relative overflow-hidden z-10"
          >
            {/* Header Colored Stripe */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 ${proj.imageBg}`} />

            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0F3040] bg-[#D99B7F]/20 px-2 py-0.5 rounded-md border border-[#D99B7F]/40">
                  {proj.category}
                </span>
                {proj.featured && (
                  <span className="flex items-center gap-1 text-[9px] font-extrabold uppercase text-[#A56F63] bg-[#A56F63]/10 px-1.5 py-0.5 rounded-md border border-[#A56F63]/30">
                    <Zap className="w-2.5 h-2.5 text-[#A56F63] fill-[#A56F63]" /> Top
                  </span>
                )}
              </div>

              <h3 className="text-sm font-extrabold text-[#0F3040] leading-snug group-hover:text-[#A56F63] transition-colors line-clamp-1">
                {proj.title}
              </h3>

              <p className="text-[11px] text-[#464858] font-medium leading-relaxed line-clamp-2">
                {proj.summary}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1 pt-1">
                {proj.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#f7f6f4] text-[#0F3040] border border-[#0F3040]/15"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-3 border-t border-[#0F3040]/10 mt-3 flex items-center justify-between">
              <button
                onClick={() => onSelectProject(proj)}
                className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#0F3040] hover:text-[#A56F63] transition-colors cursor-pointer"
              >
                <span>Detail Architecture</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-[#0F3040] hover:text-white bg-[#f7f6f4] hover:bg-[#0F3040] rounded-lg transition-colors"
                title="Lihat GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
