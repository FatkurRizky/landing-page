import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Download, Menu, X } from 'lucide-react';

export default function PresentationHeader() {
  const { personal } = PORTFOLIO_DATA;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Sampul' },
    { href: '#about', label: 'Riwayat' },
    { href: '#skills', label: 'Keahlian' },
    { href: '#projects', label: 'Proyek' },
    { href: '#experience', label: 'Pengalaman' },
    { href: '#contact', label: 'Kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 md:px-12 ${
        isScrolled
          ? 'py-3 bg-white/85 backdrop-blur-xl border-b border-[#0F3040]/10 shadow-sm'
          : 'py-4.5 bg-white/40 backdrop-blur-md border-b border-[#0F3040]/5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Top Left Header Brand Link */}
        <a href="#hero" className="flex items-center gap-2.5 group cursor-pointer">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0F3040] animate-pulse" />
          <span className="text-xs md:text-sm font-bold tracking-wide text-[#0F3040] uppercase font-sans group-hover:text-[#A56F63] transition-colors">
            {personal.headerTag}
          </span>
        </a>

        {/* Center Navigation Links for Smooth Scroll */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#464858]/10 p-1.5 rounded-full border border-[#464858]/20 shadow-xs">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-[#464858] hover:text-[#0F3040] hover:bg-white/80 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Top Right Actions */}
        <div className="flex items-center gap-3">
          <a
            href={personal.cvPdfPath}
            download="Muhammad_Fatkur_Rizky_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-[#0F3040] bg-[#D99B7F]/20 hover:bg-[#D99B7F]/30 border border-[#D99B7F]/50 rounded-xl transition-all shadow-xs active:scale-95"
            title="Unduh CV PDF Fatkur Rizky"
          >
            <Download className="w-3.5 h-3.5 text-[#0F3040]" />
            <span className="hidden sm:inline">Download CV</span>
          </a>


          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-xl bg-white/80 border border-[#0F3040]/15 text-[#0F3040] shadow-xs cursor-pointer"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-4 bg-white/95 backdrop-blur-2xl rounded-2xl border border-[#0F3040]/15 shadow-xl flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-bold text-[#0F3040] hover:bg-[#D99B7F]/20 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#0F3040]/10 flex gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center bg-[#0F3040] text-white text-xs font-bold uppercase rounded-xl"
            >
              Hubungi Fatkur
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
