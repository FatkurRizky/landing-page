import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ArrowDown, ChevronRight, Mail, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSlide() {
  const { personal } = PORTFOLIO_DATA;
  const [isPhotoActive, setIsPhotoActive] = useState(false);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 pt-28 pb-16 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Hero Body Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto z-10 py-4 sm:py-0">
        
        {/* Left Typography Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5"
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

          {/* Main Hero Headline */}
          <div className="space-y-1 w-full">
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

          {/* Action CTAs with Smooth Scroll Links */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2 sm:pt-4">
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-[#0F3040] hover:bg-[#464858] text-white font-bold px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-lg shadow-[#0F3040]/25 transition-all hover:scale-105 active:scale-95 text-xs sm:text-sm"
            >
              <span>Lihat Detail Profil</span>
              <ArrowDown className="w-4 h-4 text-[#D99B7F] animate-bounce" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#0F3040] font-bold px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl border border-[#0F3040]/30 shadow-sm transition-all hover:border-[#0F3040] text-xs sm:text-sm"
            >
              <Mail className="w-4 h-4 text-[#A56F63]" />
              <span>Kontak Me</span>
            </a>
          </div>
        </motion.div>

        {/* Right Photo Column: Transparent Cutout Character with Anime Cloud Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative mt-6 lg:mt-0"
        >
          {/* Character Stage with Cloud Backdrop */}
          <div
            onClick={() => setIsPhotoActive(!isPhotoActive)}
            className="group relative w-72 sm:w-80 md:w-96 lg:w-[440px] max-h-[600px] aspect-[2/3] flex items-end justify-center cursor-pointer select-none"
            title="Arahkan kursor atau klik untuk mencerahkan foto"
          >
            {/* Artistic Anime Clouds Layer Backdrop (Dark by default, illuminates on hover) */}
            <div className="absolute -inset-x-12 sm:-inset-x-16 -inset-y-10 pointer-events-none -z-10 flex items-center justify-center">
              <img
                src="/clouds-element.png"
                alt="Anime Sky Cloud"
                className={`w-[130%] max-w-none object-contain transform transition-all duration-700 ease-out ${
                  isPhotoActive
                    ? 'opacity-100 scale-105 brightness-105 contrast-105 saturate-110'
                    : 'opacity-35 brightness-[0.22] contrast-125 grayscale-[65%] group-hover:opacity-100 group-hover:scale-105 group-hover:brightness-105 group-hover:contrast-105 group-hover:grayscale-0 group-hover:saturate-110'
                }`}
              />
            </div>

            {/* Soft Ambient Radial Glow Backdrop */}
            <div
              className={`absolute inset-x-8 bottom-0 top-12 bg-gradient-to-t from-[#D99B7F]/25 via-[#0F3040]/10 to-transparent rounded-full blur-3xl -z-20 transition-all duration-700 transform translate-y-4 ${
                isPhotoActive
                  ? 'from-[#D99B7F]/50 opacity-100'
                  : 'from-[#0F3040]/30 opacity-40 group-hover:from-[#D99B7F]/50 group-hover:opacity-100'
              }`}
            />

            {/* Subtle Pedestal Shadow */}
            <div className="absolute bottom-2 inset-x-12 h-6 bg-[#0F3040]/25 rounded-full blur-md -z-10" />

            {/* Cutout Portrait Image with Dark-to-Bright Hover Transition */}
            <img
              src={personal.avatar}
              alt={personal.fullName}
              className={`w-full h-full object-contain object-bottom transform transition-all duration-700 ease-out relative z-10 ${
                isPhotoActive
                  ? 'brightness-100 contrast-100 grayscale-0 scale-105 drop-shadow-[0_20px_35px_rgba(15,48,64,0.35)]'
                  : 'brightness-[0.3] contrast-125 grayscale-[40%] drop-shadow-xl group-hover:brightness-100 group-hover:contrast-100 group-hover:grayscale-0 group-hover:scale-105 group-hover:drop-shadow-[0_20px_35px_rgba(15,48,64,0.35)]'
              }`}
            />

            {/* Floating Interactive Clue Pill */}
            <div
              className={`absolute bottom-3 py-1.5 px-3.5 bg-[#0F3040]/85 backdrop-blur-md rounded-full border border-white/20 text-white text-[10px] tracking-wider uppercase font-bold flex items-center gap-1.5 shadow-lg transition-all duration-500 z-20 ${
                isPhotoActive ? 'opacity-0 translate-y-3' : 'opacity-85 group-hover:opacity-0 group-hover:translate-y-3'
              }`}
            >
              <Sparkles size={11} className="text-[#D99B7F]" />
              <span className="text-[#D99B7F]">Sorot Foto</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
