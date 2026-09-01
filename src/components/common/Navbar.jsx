import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, FileText, Mail } from 'lucide-react';
import Button from './Button';
import { AGENCY_CONFIG } from '../../data/agencyData';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portofolio', href: '#portfolio' },
    { name: 'Tech Stack', href: '#services' },
    { name: 'Kalkulator Proyek', href: '#estimator' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800 py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-900 flex items-center justify-center font-bold font-mono text-xs group-hover:bg-cyan-400 transition-colors">
            MF
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              {AGENCY_CONFIG.name}
            </span>
            <span className="text-[10px] text-zinc-400 font-mono -mt-0.5">
              {AGENCY_CONFIG.brandName}
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <FileText size={13} className="text-cyan-400" />
            <span>Lihat CV HRD</span>
          </button>

          <a href={`mailto:${AGENCY_CONFIG.email}`}>
            <Button variant="primary" size="sm" icon={Mail}>
              Email
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-900 border border-zinc-800 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090b]/95 backdrop-blur-md border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-medium text-zinc-300 hover:text-white py-2 border-b border-zinc-800/50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-zinc-900 text-zinc-200 border border-zinc-800 rounded-xl text-xs font-medium"
            >
              <FileText size={14} className="text-cyan-400" />
              <span>Lihat CV / HRD Summary</span>
            </button>
            <a
              href={`mailto:${AGENCY_CONFIG.email}`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-white text-zinc-900 font-bold rounded-xl text-xs"
            >
              <Mail size={14} />
              <span>Email Langsung</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
