import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { BookOpen, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSlide() {
  const { personal, education, educationList } = PORTFOLIO_DATA;

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-24 max-w-7xl mx-auto z-10"
    >
      {/* Title matching Image 2: "Riwayat" */}
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#0F3040] rounded-sm flex items-center justify-center transform -rotate-12 mb-1 shadow-md">
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[3]" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#0F3040] font-sans leading-none">
          Riwayat
        </h2>
        <p className="text-[10px] sm:text-xs font-bold text-[#A56F63] uppercase tracking-widest mt-1">
          Pendidikan Resmi: Kuliah, SMA/MAN, SMP, & SD
        </p>
      </div>

      {/* Grid matching Image 2 with official logos */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto items-center">
        
        {/* Left Side: 4 Education Milestones (Kuliah, SMA, SMP, SD) with Official Logos */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`p-3.5 rounded-2xl border transition-all flex items-center gap-3.5 backdrop-blur-sm ${
                edu.isCurrent
                  ? 'bg-white border-[#0F3040] shadow-md ring-2 ring-[#0F3040]/20'
                  : 'bg-white/80 border-[#464858]/20 shadow-sm hover:border-[#464858]'
              }`}
            >
              {/* Official Logo Container */}
              <div className="w-12 h-12 rounded-xl bg-white p-1 border border-[#0F3040]/15 shadow-xs flex items-center justify-center shrink-0">
                <img
                  src={edu.logo}
                  alt={edu.school}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Info */}
              <div className="overflow-hidden flex-1">
                <div className="flex items-center justify-between gap-1">
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider ${
                    edu.isCurrent ? 'text-[#0F3040]' : 'text-[#A56F63]'
                  }`}>
                    {edu.degree}
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-[#464858]">
                    {edu.period}
                  </span>
                </div>

                <h4 className="text-xs md:text-sm font-extrabold text-[#0F3040] truncate">
                  {edu.school}
                </h4>
                <p className="text-[11px] font-medium text-[#464858] truncate">
                  {edu.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Featured College Detail Card for UNP Kediri */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-7 bg-gradient-to-br from-[#0F3040] via-[#464858] to-[#0F3040] text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-[#0F3040] relative overflow-hidden flex flex-col justify-between"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D99B7F]/15 rounded-full blur-3xl" />

          <div className="space-y-5 relative z-10">
            {/* College Header with Official UNP Logo */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-white p-1.5 shadow-lg border border-white flex items-center justify-center shrink-0">
                  <img
                    src={education.mainLogo}
                    alt={education.university}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D99B7F]">
                    Perguruan Tinggi Aktif
                  </span>
                  <h3 className="text-lg md:text-xl font-black text-white leading-tight">
                    {education.university}
                  </h3>
                  <p className="text-xs text-slate-200 font-semibold mt-0.5">
                    {education.degree} ({education.location})
                  </p>
                </div>
              </div>
            </div>

            {/* Current Status Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#D99B7F]/20 text-[#D99B7F] border border-[#D99B7F]/40">
                🎓 {education.gpaStatus}
              </span>
              <span className="text-xs font-mono font-semibold text-slate-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                {education.period}
              </span>
            </div>

            {/* Relevant Coursework */}
            <div className="space-y-2.5 pt-1">
              <h4 className="text-xs font-bold text-[#D99B7F] uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#D99B7F]" />
                Mata Kuliah Relevan & Program Studi:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {education.relevantCourses.map((course) => (
                  <div key={course} className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D99B7F] shrink-0" />
                    <span className="text-xs font-bold text-white">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Card Status */}
          <div className="pt-5 border-t border-white/10 mt-5 flex items-center justify-between text-xs text-slate-300 relative z-10">
            <span>Status: <strong className="text-[#D99B7F] font-bold">Semester 7 Mahasiswa Aktif</strong></span>
            <span className="text-white font-bold">{personal.fullName}</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
