import React from 'react';
import { ArrowUpRight, Clock, Calculator } from 'lucide-react';
import { InstagramIcon } from '../common/SocialIcons';

export function InstagramButton({ instagramUrl, formattedCostText, estimatedDays }) {
  const targetUrl = instagramUrl || 'https://instagram.com/fatkur_dev';

  return (
    <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl space-y-4 text-center">
      <div>
        <div className="w-10 h-10 bg-pink-500/10 border border-pink-500/20 rounded-xl flex items-center justify-center text-pink-400 mx-auto mb-2">
          <Calculator className="w-5 h-5" />
        </div>
        <h3 className="text-sm font-bold text-zinc-100">Ringkasan Estimasi</h3>
        <p className="text-zinc-400 text-xs mt-0.5">Kalkulasi biaya dan estimasi waktu otomatis.</p>
      </div>

      {formattedCostText && (
        <div className="space-y-2 py-3 border-y border-zinc-800 text-left">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400">Total Biaya System:</span>
            <span data-testid="total-cost-display" className="text-sm font-bold text-pink-400 font-mono">
              {formattedCostText}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400">Estimasi Waktu:</span>
            <span data-testid="estimated-days-display" className="text-xs font-medium text-zinc-300 flex items-center gap-1 font-mono">
              <Clock className="w-3 h-3 text-cyan-400" /> ~{estimatedDays} Hari Kerja
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
          className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:opacity-90 text-white font-bold text-xs px-4 py-3 rounded-xl transition shadow-sm"
        >
          <InstagramIcon size={16} />
          <span>DM di Instagram (@fatkur_dev)</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

export default InstagramButton;
