import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExperienceSlide() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section
      id="experience"
      className="relative w-full min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-24 max-w-7xl mx-auto z-10"
    >
      {/* Title matching Image 3: "Pengalaman Kerja" */}
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#0F3040] rounded-sm flex items-center justify-center transform -rotate-12 mb-1 shadow-md">
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[3]" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#0F3040] font-sans leading-none">
          Pengalaman
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#D99B7F] font-sans leading-tight">
          Kerja
        </h2>
      </div>

      {/* Main Experience Container */}
      <div className="max-w-4xl mx-auto w-full space-y-6 my-auto">
        
        {/* Header Container Box styled with #0F3040 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#0F3040] text-white p-5 sm:p-6 rounded-2xl border border-[#0F3040] shadow-md"
        >
          <p className="text-xs sm:text-sm font-medium leading-relaxed">
            Memiliki rekam jejak praktis dalam pengoperasian aplikasi internal toko, pemeliharaan server Linux Ubuntu, hingga penanganan kendala teknis dan customer service pengguna.
          </p>
        </motion.div>

        {/* Timeline List */}
        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-[#0F3040]/15 p-5 sm:p-6 rounded-2xl shadow-md hover:border-[#0F3040] hover:shadow-lg transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#0F3040]/10 pb-3 mb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm sm:text-base font-extrabold text-[#0F3040] font-mono">
                    {exp.yearPeriod}
                  </span>
                  <span className="text-[#A56F63]">|</span>
                  <span className="text-sm sm:text-base font-black text-[#A56F63]">
                    {exp.company}
                  </span>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#D99B7F]/20 text-[#0F3040] border border-[#D99B7F]/40">
                  {exp.type}
                </span>
              </div>

              <p className="text-xs sm:text-sm font-extrabold text-[#0F3040] mb-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F3040]" />
                <span>{exp.role}</span>
              </p>

              <div className="space-y-1.5 pl-2">
                {exp.tasks.map((task, tIdx) => (
                  <p key={tIdx} className="text-xs text-[#464858] font-medium flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A56F63] shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
