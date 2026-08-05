import React from 'react';

export default function Badge({ children, variant = 'cyan', className = '' }) {
  const variantStyles = {
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    outline: 'bg-slate-800/80 text-slate-300 border-slate-700'
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-mono border backdrop-blur-sm whitespace-nowrap transition-colors ${variantStyles[variant] || variantStyles.cyan} ${className}`}
    >
      {children}
    </span>
  );
}
