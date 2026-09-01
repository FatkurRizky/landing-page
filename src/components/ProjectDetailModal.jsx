import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Code2, ExternalLink, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './common/SocialIcons';
import { AGENCY_CONFIG } from '../data/agencyData';

export default function ProjectDetailModal({ project, isOpen, onClose }) {
  if (!project) return null;

  const handleConsultIG = () => {
    const textPesan = encodeURIComponent(
      `Halo Kak! Saya tertarik buat website/aplikasi dengan konsep seperti *${project.title}*. Bisa minta estimasi harga dan waktu pengerjaannya? 🚀`
    );
    window.open(`https://ig.me/m/${AGENCY_CONFIG.instagramUsername}?text=${textPesan}`, '_blank');
  };

  const techList = project.techStack || project.tech || [];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed inset-x-4 top-[5%] bottom-[5%] max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 z-50 shadow-2xl overflow-y-auto flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold rounded-full flex items-center gap-1.5">
                  <Sparkles size={14} /> {project.tag || project.category}
                </span>

                <button
                  onClick={onClose}
                  className="p-2.5 bg-slate-950 text-slate-400 hover:text-white rounded-2xl border border-slate-800 cursor-pointer transition-all hover:bg-slate-800"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Screenshot Image */}
              <div className="w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 relative group shadow-inner">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-mono font-black text-white leading-tight">
                  {project.title}
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block flex items-center gap-1">
                  <Code2 size={14} className="text-cyan-400" /> Teknologi Yang Digunakan:
                </label>
                <div className="flex flex-wrap gap-2">
                  {techList.map((t, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-950 border border-slate-800 text-cyan-300 text-xs font-mono font-bold px-3 py-1.5 rounded-xl"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Direct IG Consultation Button */}
            <div className="pt-6 border-t border-slate-800 mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onClose}
                className="py-3.5 px-6 bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 rounded-xl text-xs font-mono font-bold cursor-pointer transition-all"
              >
                Tutup Preview
              </button>

              <button
                onClick={handleConsultIG}
                className="flex-1 py-3.5 px-6 bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 hover:opacity-95 text-slate-950 font-mono font-extrabold rounded-xl text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] cursor-pointer transition-all active:scale-98"
              >
                <Send size={15} />
                <span>Konsultasi Pembuatan Web Seperti Ini via IG DM</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
