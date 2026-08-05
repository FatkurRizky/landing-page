import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Code2, Layers, Cpu, CheckCircle2 } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import StatusBadge from './StatusBadge';
import Button from '../common/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-950">
      {/* 60fps HTML5 Canvas Particle System */}
      <ParticleCanvas />

      {/* Cyber Neon Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          {/* Status Badge */}
          <div className="flex justify-center">
            <StatusBadge text="● Open for New Projects 2026" />
          </div>

          {/* Main Cyber Typography */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight text-white leading-tight">
            Architecting High-Impact <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
              Fatkur_Dev // Software House
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Mitra pengembang perangkat lunak enterprise. Kami membangun <span className="text-cyan-400 font-semibold">Web SaaS</span>, <span className="text-emerald-400 font-semibold">Aplikasi Mobile Cross-Platform</span>, dan <span className="text-purple-400 font-semibold">Solusi AI Integration</span> dengan kecepatan tinggi & clean architecture.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#estimator">
              <Button variant="primary" size="lg" icon={Sparkles} className="w-full sm:w-auto">
                Konsultasi Gratis
              </Button>
            </a>
            <a href="#portfolio">
              <Button variant="secondary" size="lg" icon={ArrowRight} className="w-full sm:w-auto">
                Lihat Karya & Case Study
              </Button>
            </a>
          </div>

          {/* Feature Highlights Matrix */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-slate-800/80 max-w-3xl mx-auto text-left">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <Code2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <div>
                <div className="text-xs font-mono font-bold text-slate-200">Clean Architecture</div>
                <div className="text-[11px] text-slate-400">Separation of Concerns</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <Layers className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div>
                <div className="text-xs font-mono font-bold text-slate-200">Web & Mobile</div>
                <div className="text-[11px] text-slate-400">Cross-Platform Native</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <Cpu className="w-5 h-5 text-purple-400 flex-shrink-0" />
              <div>
                <div className="text-xs font-mono font-bold text-slate-200">AI Microservice</div>
                <div className="text-[11px] text-slate-400">LLM & Vision Model</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <div>
                <div className="text-xs font-mono font-bold text-slate-200">Production Ready</div>
                <div className="text-[11px] text-slate-400">Garansi Maintenance</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
