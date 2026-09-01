import React from 'react';
import { FileText, Mail, GraduationCap, Code2, CheckCircle2, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import Modal from '../common/Modal';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { AGENCY_CONFIG } from '../../data/agencyData';

export default function HRDResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Ringkasan CV — Recruiter / HRD" maxWidth="max-w-2xl">
      <div className="space-y-6">
        {/* Candidate Profile Header */}
        <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white">{AGENCY_CONFIG.name}</h3>
              <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">
                Open to Work
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">{AGENCY_CONFIG.title}</p>
            <div className="flex items-center gap-3 text-xs text-zinc-400 mt-2">
              <span className="flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                {AGENCY_CONFIG.education}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                {AGENCY_CONFIG.location}
              </span>
            </div>
          </div>

          <a
            href={`mailto:${AGENCY_CONFIG.email}`}
            className="flex items-center gap-1.5 bg-white text-zinc-900 hover:bg-zinc-100 font-bold px-4 py-2 rounded-lg text-xs transition-all cursor-pointer"
          >
            <Mail size={14} />
            <span>Kirim Email</span>
          </a>
        </div>

        {/* Executive Summary */}
        <div className="space-y-1.5">
          <h4 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider">
            Tentang Saya
          </h4>
          <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-950 p-3.5 rounded-xl border border-zinc-800">
            Mahasiswa Teknik Informatika S1 semester 7 yang aktif mengulik pengembangan aplikasi web full-stack dan mobile app. Memiliki pengalaman membangun REST API (Express.js, Laravel), UI interaktif (React 19, Tailwind), dan aplikasi Android (React Native). Terbiasa bekerja dengan Git workflow, manajemen state terstruktur, dan penulisan kode yang rapi.
          </p>
        </div>

        {/* Tech Stack Matrix */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-cyan-400" />
            Matriks Keahlian Teknis
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {AGENCY_CONFIG.techSummary.map((item) => (
              <div key={item.category} className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
                <div className="text-xs font-mono font-bold text-cyan-400">{item.category}</div>
                <div className="text-xs text-zinc-300">{item.stack}</div>
              </div>
            ))}
          </div>
        </div>

        {/* HRD Core Strengths */}
        <div className="space-y-1.5">
          <h4 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider">
            Kualifikasi Pengalaman Proyek
          </h4>
          <div className="space-y-1.5">
            {[
              'Pemahaman REST API, Autentikasi JWT & Manajemen Database MySQL/Postgres',
              'Pengalaman membangun aplikasi POS multi-platform (Laravel + React + React Native)',
              'Pencarian & parsing jurnal ilmiah otomatis dengan SerpApi (Scholar Search)',
              'Terbiasa menggunakan Git, GitHub Pull Request, dan clean code structure'
            ].map((strength, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-zinc-300 bg-zinc-950 p-2.5 rounded-lg border border-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{strength}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-zinc-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a href={AGENCY_CONFIG.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" icon={GithubIcon}>
                GitHub
              </Button>
            </a>
            <a href={AGENCY_CONFIG.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" icon={LinkedinIcon}>
                LinkedIn
              </Button>
            </a>
          </div>

          <Button variant="secondary" size="sm" onClick={onClose}>
            Tutup Summary
          </Button>
        </div>
      </div>
    </Modal>
  );
}
