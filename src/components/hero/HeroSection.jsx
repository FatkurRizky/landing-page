import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, ArrowUpRight, Code2, Layers, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import Button from '../common/Button';
import { AGENCY_CONFIG } from '../../data/agencyData';

export default function HeroSection({ onOpenResume }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 bg-[#09090b] text-zinc-100 overflow-hidden border-b border-zinc-800/80">
      {/* Subtle Background Mesh & Radial Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 max-w-3xl mx-auto"
        >
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs font-mono font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{AGENCY_CONFIG.statusBadge}</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            {AGENCY_CONFIG.name} <br />
            <span className="text-zinc-400 font-normal text-2xl sm:text-4xl block mt-2">
              Full-Stack Web & Mobile Developer
            </span>
          </h1>

          {/* Authentic Intro Subtitle */}
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Halo! Saya Fatkur, mahasiswa Teknik Informatika S1 semester 7. Berfokus pada pembuatan aplikasi web & mobile (<span className="text-zinc-200 font-semibold">React, Express, Laravel, React Native</span>) yang cepat, rapi, dan responsif.
          </p>

          {/* Action CTAs for HRD & Recruiters */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 bg-white text-zinc-900 hover:bg-zinc-100 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md cursor-pointer hover:scale-102"
            >
              <FileText size={16} className="text-zinc-900" />
              <span>Lihat CV / Summary HRD</span>
            </button>

            <a href={`mailto:${AGENCY_CONFIG.email}`}>
              <Button variant="secondary" size="md" icon={Mail} className="text-xs sm:text-sm">
                Email Direct
              </Button>
            </a>

            <a
              href={AGENCY_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 hover:text-white px-4 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
              <ArrowUpRight size={14} className="text-zinc-500" />
            </a>

            <a
              href={AGENCY_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 hover:text-white px-4 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all"
            >
              <LinkedinIcon size={16} className="text-blue-400" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Clean Tech Pills Bar */}
          <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-center gap-2">
            {['React 19', 'Express.js', 'Laravel 11', 'React Native', 'Tailwind CSS', 'MySQL', 'Git'].map((stack) => (
              <span
                key={stack}
                className="text-[11px] font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-lg"
              >
                {stack}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
