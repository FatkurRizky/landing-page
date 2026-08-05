import React from 'react';

export default function StatusBadge({ text = "Open for New Projects 2026" }) {
  return (
    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
      </span>
      <span className="text-xs font-mono font-semibold text-emerald-400 tracking-wide uppercase">
        {text}
      </span>
    </div>
  );
}
