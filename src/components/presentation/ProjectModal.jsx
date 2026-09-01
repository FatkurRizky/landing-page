import React from 'react';
import { X, CheckCircle2, Zap } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#43334C]/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-[#43334C]/20"
        >
          {/* Top Banner Header */}
          <div className={`p-6 sm:p-8 text-white ${project.imageBg} relative`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#43334C] bg-[#FF8FB7] px-3 py-1 rounded-md mb-3">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              {project.title}
            </h2>
            <p className="text-sm text-slate-200 mt-2 max-w-xl font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#E83C91] uppercase tracking-wider">Ringkasan Sistem</h4>
              <p className="text-sm text-[#43334C] font-medium leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Metrics */}
            <div className="bg-[#FF8FB7]/20 p-4 rounded-2xl border border-[#FF8FB7]/50 flex items-start gap-3">
              <Zap className="w-5 h-5 text-[#E83C91] shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-black text-[#43334C] uppercase">Dampak & Performa Utama</h5>
                <p className="text-xs font-bold text-[#E83C91] mt-0.5">{project.metrics}</p>
              </div>
            </div>

            {/* Detailed Features */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#E83C91] uppercase tracking-wider">Fitur & Implementasi Kunci</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="bg-[#F8F4EC] p-3.5 rounded-xl border border-[#43334C]/10 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#E83C91] shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-[#43334C]">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold text-[#E83C91] uppercase tracking-wider">Teknologi Digunakan</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-bold px-3 py-1 rounded-lg bg-[#43334C] text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="pt-6 border-t border-[#43334C]/10 flex items-center justify-between">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E83C91] hover:bg-[#43334C] text-white font-bold text-xs transition-colors shadow-md"
              >
                <GithubIcon className="w-4 h-4 text-white" />
                <span>Lihat Source Code Repository</span>
              </a>

              <button
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-bold text-[#43334C] hover:text-[#E83C91]"
              >
                Tutup
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
