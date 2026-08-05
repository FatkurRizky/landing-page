import React from 'react';
import { MessageSquare, ArrowUpRight, Clock, Calculator } from 'lucide-react';

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

export function InstagramButton({ instagramUrl, formattedCostText, estimatedDays }) {
  const targetUrl = instagramUrl || 'https://instagram.com/fatkur_dev';

  return (
    <div className="bg-zinc-950 border border-pink-500/40 p-6 rounded-2xl space-y-5 text-center flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 bg-pink-500/10 border border-pink-500/30 rounded-xl flex items-center justify-center text-pink-400 mx-auto mb-3">
          <Calculator className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-zinc-100">Ringkasan Estimasi & Konsultasi</h3>
        <p className="text-zinc-400 text-xs mt-1">Kalkulasi biaya dan estimasi waktu pengerjaan otomatis.</p>
      </div>

      {formattedCostText && (
        <div className="space-y-3 py-3 border-y border-zinc-800 text-left">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400">Estimasi Total Biaya:</span>
            <span data-testid="total-cost-display" className="text-base font-extrabold text-pink-400">
              {formattedCostText}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400">Perkiraan Waktu:</span>
            <span data-testid="estimated-days-display" className="text-xs font-bold text-rose-300 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> ~{estimatedDays} Hari Kerja
            </span>
          </div>
        </div>
      )}

      <div>
        <a
          href={targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="btn-instagram-consult"
          className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:opacity-90 text-white font-extrabold text-xs px-6 py-4 rounded-xl transition shadow-[0_0_25px_rgba(236,72,153,0.3)] transform active:scale-95"
        >
          <InstagramIcon size={18} />
          <span>Follow & DM di Instagram</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
        <p className="text-[10px] text-zinc-400 mt-2.5">
          Diskusikan kebutuhan proyek Anda langsung via DM Instagram.
        </p>
      </div>
    </div>
  );
}

export default InstagramButton;
