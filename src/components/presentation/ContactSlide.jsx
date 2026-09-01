import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { motion } from 'framer-motion';

export default function ContactSlide({ onShowToast }) {
  const { contact, personal } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setIsSent(true);
    if (onShowToast) {
      onShowToast('✨ Pesan Anda siap terkirim via WhatsApp!');
    }

    const waText = encodeURIComponent(
      `Halo Fatkur, saya ${formData.name} (${formData.email || 'Email/Contact'}).\n\nPesan: ${formData.message}`
    );
    window.open(`https://wa.me/6281240537963?text=${waText}`, '_blank');
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-12 lg:p-16 max-w-7xl mx-auto z-10">
      
      {/* Header */}
      <div className="mb-6 border-b border-[#0F3040]/10 pb-4">
        <div className="flex items-center gap-2 text-[#A56F63] font-bold text-xs uppercase tracking-widest">
          <MessageSquare className="w-4 h-4" />
          <span>Mari Berkolaborasi</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-[#0F3040] tracking-tight mt-1">
          Hubungi <span className="text-[#D99B7F]">{personal.nickname}</span>
        </h2>
      </div>

      {/* Grid: Left Contact Info, Right Message Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto items-stretch">
        
        {/* Left Column: Direct Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 bg-white border border-[#0F3040]/15 rounded-3xl p-6 md:p-8 shadow-lg flex flex-col justify-between space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-xl font-extrabold text-[#0F3040]">Saluran Komunikasi Langsung</h3>
            <p className="text-sm text-[#464858] font-medium leading-relaxed">
              Saya selalu terbuka untuk diskusi mengenai kesempatan karir Backend Developer, project freelance, kolaborasi riset, maupun tanya jawab teknis.
            </p>
          </div>

          <div className="space-y-3">
            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#f7f6f4] border border-[#0F3040]/15 hover:bg-[#D99B7F]/15 hover:border-[#D99B7F] transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0F3040] text-white flex items-center justify-center group-hover:bg-[#A56F63] transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-[#A56F63] uppercase tracking-wider">Email Resmi</p>
                <p className="text-sm font-extrabold text-[#0F3040] truncate">{contact.email}</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#f7f6f4] border border-[#0F3040]/15 hover:bg-emerald-50 hover:border-emerald-300 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#A56F63] uppercase tracking-wider">WhatsApp / Telepon</p>
                <p className="text-sm font-extrabold text-[#0F3040]">{contact.phone}</p>
              </div>
            </a>

            {/* GitHub & LinkedIn */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={contact.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#0F3040] text-white hover:bg-[#464858] transition-colors"
              >
                <GithubIcon className="w-5 h-5 text-[#D99B7F]" />
                <div className="overflow-hidden">
                  <p className="text-[10px] text-slate-300 font-mono">GitHub</p>
                  <p className="text-xs font-extrabold truncate">@{contact.github.username}</p>
                </div>
              </a>

              <a
                href={contact.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#A56F63] text-white hover:bg-[#0F3040] transition-colors"
              >
                <LinkedinIcon className="w-5 h-5 text-white" />
                <div className="overflow-hidden">
                  <p className="text-[10px] text-blue-100 font-mono">LinkedIn</p>
                  <p className="text-xs font-extrabold truncate">in/{contact.linkedin.username}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="pt-2 text-xs text-[#464858] font-bold flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#A56F63]" />
            <span>{contact.location}</span>
          </div>
        </motion.div>

        {/* Right Column: Quick Message Form styled with #0F3040 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-6 bg-gradient-to-br from-[#0F3040] via-[#464858] to-[#0F3040] text-white p-6 md:p-8 rounded-3xl shadow-xl border border-[#0F3040] flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="border-b border-white/10 pb-3">
              <h3 className="text-lg font-black text-white">Kirim Pesan Singkat</h3>
              <p className="text-xs text-[#D99B7F] font-semibold">Pesan akan langsung terhubung ke WhatsApp Fatkur.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama Anda..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#D99B7F] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1">Email / No HP</label>
                <input
                  type="text"
                  placeholder="email@domain.com / WhatsApp..."
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#D99B7F] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1">Pesan / Topik Diskusi</label>
                <textarea
                  required
                  rows="3"
                  placeholder="Tuliskan tawaran project atau pesan Anda di sini..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#D99B7F] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#D99B7F] hover:bg-[#A56F63] text-[#0F3040] font-black py-3 rounded-xl shadow-lg transition-all active:scale-95 text-xs uppercase tracking-wider"
              >
                <Send className="w-4 h-4 text-[#0F3040]" />
                <span>Kirim via WhatsApp</span>
              </button>
            </form>
          </div>

          {isSent && (
            <div className="mt-4 p-3 bg-emerald-950/80 border border-emerald-800 text-emerald-300 rounded-xl text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Pesan disiapkan! Membuka WhatsApp...</span>
            </div>
          )}
        </motion.div>

      </div>
    </div>
  );
}
