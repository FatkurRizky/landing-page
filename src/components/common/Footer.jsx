import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import { AGENCY_CONFIG } from '../../data/agencyData';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#09090b] border-t border-zinc-800 text-zinc-400 py-10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-zinc-100 text-zinc-900 flex items-center justify-center font-bold font-mono text-xs">
                MF
              </div>
              <span className="font-bold text-base text-white">
                {AGENCY_CONFIG.name}
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-md leading-relaxed">
              {AGENCY_CONFIG.tagline} — {AGENCY_CONFIG.education}. Terbuka untuk kesempatan <span className="text-white font-medium">Internship, Full-Time Junior Developer</span>, maupun proyek freelance <span className="text-white font-medium">zoldyckDev</span>.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={AGENCY_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                title="GitHub"
              >
                <GithubIcon size={14} />
              </a>
              <a
                href={AGENCY_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon size={14} />
              </a>
              <a
                href={AGENCY_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-pink-400 transition-colors"
                title="Instagram"
              >
                <InstagramIcon size={14} />
              </a>
              <a
                href={`mailto:${AGENCY_CONFIG.email}`}
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-cyan-400 transition-colors"
                title="Email Direct"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Col 2: Nav */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs font-bold text-zinc-200 uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Proyek Pilihan</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Tech Stack</a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-white transition-colors">Kalkulator Estimasi</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Principles */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs font-bold text-zinc-200 uppercase tracking-wider">Kontak Langsung</h4>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              <li>Email: {AGENCY_CONFIG.email}</li>
              <li>IG DM: @{AGENCY_CONFIG.instagramUsername}</li>
              <li>Status: Available for Hire</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <p>© 2026 {AGENCY_CONFIG.name}. Built with React & Tailwind CSS.</p>
          <p className="flex items-center gap-1">
            Clean code & authentic developer portfolio.
          </p>
        </div>
      </div>
    </footer>
  );
}
