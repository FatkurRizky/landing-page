import React, { useState } from 'react';
import { AGENCY_CONFIG } from './data/agencyData';
import { SERVICES } from './data/servicesData';
import { PROJECTS } from './data/projectsData';
import ProjectDetailModal from './components/ProjectDetailModal';
import { Smartphone, Layout, ArrowRight, Sparkles, Maximize2 } from 'lucide-react';

function InstagramIcon({ size = 18 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#08080c] text-zinc-100 font-sans selection:bg-pink-500 selection:text-white relative">
      
      {/* Dynamic Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-pink-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* NAVBAR SIMPEL */}
      <nav className="border-b border-zinc-800/80 bg-[#08080c]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-black shadow-md">
              Z
            </div>
            <span className="font-bold text-lg text-white tracking-wider">
              {AGENCY_CONFIG.name}
            </span>
          </div>

          <a 
            href={AGENCY_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:opacity-90 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-[0_0_20px_rgba(236,72,153,0.3)]"
          >
            <InstagramIcon size={15} />
            <span>DM Instagram</span>
          </a>
        </div>
      </nav>

      {/* HERO SECTION JUJUR & FRIENDLY */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded-full text-xs font-bold text-pink-400">
          <Sparkles size={14} />
          <span>{AGENCY_CONFIG.statusBadge}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
          {AGENCY_CONFIG.heroHeadline}
        </h1>

        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {AGENCY_CONFIG.heroSubtitle}
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href={AGENCY_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:opacity-95 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:scale-105 transition-all"
          >
            <InstagramIcon size={18} />
            <span>Diskusi via Instagram DM</span>
            <ArrowRight size={16} />
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 px-6 py-3.5 rounded-xl text-sm font-bold transition-all"
          >
            <span>Lihat Karya Nyata</span>
          </a>
        </div>
      </section>

      {/* LAYANAN UTAMA (2 JASA RIIL) */}
      <section className="py-16 bg-zinc-950/60 border-y border-zinc-800/80 px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold text-pink-400 uppercase tracking-widest">Layanan Utama</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Apa Yang Bisa Saya Bantu Buatkan?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map(service => (
              <div key={service.id} className="bg-zinc-900/80 border border-zinc-800 p-6 rounded-2xl space-y-4 hover:border-pink-500/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center">
                  {service.id === 1 ? <Layout size={24} /> : <Smartphone size={24} />}
                </div>
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.tech.map((t, idx) => (
                    <span key={idx} className="bg-zinc-800 text-zinc-300 text-[10px] font-bold px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTOFOLIO KARYA NYATA (GAMBAR BESAR 16:9 FULL WIDTH) */}
      <section id="projects" className="py-16 px-6 max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold text-pink-400 uppercase tracking-widest">Portofolio Kodingan</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Proyek Yang Pernah Dikerjakan</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map(project => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-zinc-900/80 border border-zinc-800 rounded-3xl overflow-hidden group hover:border-pink-500/50 transition-all duration-300 shadow-xl cursor-pointer"
            >
              
              {/* CONTAINER GAMBAR BESAR WIDE 16:9 FULL WIDTH */}
              <div className="relative w-full aspect-video sm:h-64 overflow-hidden bg-zinc-950 border-b border-zinc-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                />
                
                {/* Overlay Petunjuk Klik Perbesar */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs">
                  <Maximize2 size={16} className="text-pink-400" />
                  <span>Klik Untuk Detail Preview</span>
                </div>
              </div>

              {/* RINCIAN PROYEK */}
              <div className="p-6 space-y-3">
                <span className="text-[10px] font-extrabold text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full uppercase tracking-wider border border-pink-500/20">
                  {project.tag}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">{project.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold text-zinc-300 bg-zinc-800 px-2.5 py-1 rounded-md border border-zinc-700/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* KONTAK SIMPEL INSTAGRAM */}
      <section className="py-16 border-t border-zinc-800/80 bg-zinc-950 px-6 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Punya Ide Proyek / Mau Tanya-Tanya Dulu?</h2>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
          Jangan ragu untuk DM saya di Instagram <span className="text-pink-400 font-bold">@{AGENCY_CONFIG.instagramUsername}</span>. Saya siap bantu wujudkan website atau aplikasi HP untuk usaha Anda!
        </p>
        <a
          href={AGENCY_CONFIG.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:opacity-95 text-white font-extrabold px-8 py-4 rounded-xl text-sm shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all hover:scale-105"
        >
          <InstagramIcon size={18} />
          <span>Follow & DM di Instagram (@{AGENCY_CONFIG.instagramUsername})</span>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-zinc-900 text-center text-xs text-zinc-500">
        <p>{AGENCY_CONFIG.name} © 2026. Made with ❤️ by {AGENCY_CONFIG.owner}.</p>
      </footer>

      {/* DETAIL MODAL PREVIEW */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}