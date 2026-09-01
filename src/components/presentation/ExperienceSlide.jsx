import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExperienceSlide() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <div className="relative w-full min-h-full flex flex-col justify-between p-4 sm:p-6 md:p-12 lg:p-16 max-w-7xl mx-auto z-10">
      
      {/* Title matching Image 3: "Pengalaman Kerja" */}
      <div className="flex flex-col items-center justify-center text-center my-2">
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

      {/* Grid matching Image 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto items-center">
        
        {/* Left Side: 3 Vertical Pill Visual Containers styled with User Palette */}
        <div className="lg:col-span-4 hidden lg:flex justify-center items-center gap-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-80 rounded-[40px] bg-gradient-to-b from-[#0F3040] to-[#464858] shadow-xl border-2 border-white flex flex-col items-center justify-between p-3 text-white"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">01</div>
            <span className="writing-mode-vertical transform -rotate-90 font-bold text-xs tracking-wider uppercase opacity-90">Internship</span>
            <div className="w-3 h-3 rounded-full bg-[#D99B7F] animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-20 h-96 rounded-[40px] bg-gradient-to-b from-[#464858] to-[#A56F63] shadow-2xl border-2 border-white flex flex-col items-center justify-between p-3 text-white"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">02</div>
            <span className="writing-mode-vertical transform -rotate-90 font-bold text-xs tracking-wider uppercase opacity-90">Tech Support</span>
            <div className="w-3 h-3 rounded-full bg-white" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-80 rounded-[40px] bg-gradient-to-b from-[#A56F63] to-[#D99B7F] shadow-xl border-2 border-white flex flex-col items-center justify-between p-3 text-white"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">03</div>
            <span className="writing-mode-vertical transform -rotate-90 font-bold text-xs tracking-wider uppercase opacity-90">Linux Admin</span>
            <div className="w-3 h-3 rounded-full bg-[#0F3040]" />
          </motion.div>
        </div>

        {/* Right Side: Header Container + Timeline matching Image 3 */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Header Container Box styled with #0F3040 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#0F3040] text-white p-5 rounded-2xl border border-[#0F3040] shadow-md"
          >
            <p className="text-xs md:text-sm font-medium leading-relaxed">
              Memiliki rekam jejak praktis dalam pengoperasian aplikasi internal toko, pemeliharaan server Linux Ubuntu, hingga penanganan kendala teknis pengguna (troubleshooting & triage transaksi).
            </p>
          </motion.div>

          {/* Timeline List matching Image 3 format */}
          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.12 }}
                className="bg-white border border-[#0F3040]/15 p-5 rounded-2xl shadow-md hover:border-[#0F3040] hover:shadow-lg transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#0F3040]/10 pb-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm md:text-base font-extrabold text-[#0F3040] font-mono">
                      {exp.yearPeriod}
                    </span>
                    <span className="text-[#A56F63]">|</span>
                    <span className="text-sm md:text-base font-black text-[#A56F63]">
                      {exp.company}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-[#D99B7F]/20 text-[#0F3040] border border-[#D99B7F]/40">
                    {exp.type}
                  </span>
                </div>

                <p className="text-xs font-extrabold text-[#0F3040] mb-2">
                  • {exp.role}
                </p>

                <div className="space-y-1 pl-3">
                  {exp.tasks.map((task, tIdx) => (
                    <p key={tIdx} className="text-[11px] md:text-xs text-[#464858] font-medium flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A56F63] shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
