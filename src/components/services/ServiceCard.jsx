import React from 'react';
import { Code2, Smartphone, Cpu, Layout, ArrowRight, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Smartphone: Smartphone,
  Cpu: Cpu,
  Layout: Layout,
};

export default function ServiceCard({ service, onOpenDetail }) {
  const IconComponent = iconMap[service.icon] || Code2;
  const techList = service.techStack || service.tech || [];
  const featureList = service.keyFeatures || [];

  return (
    <div className="group relative flex flex-col justify-between h-full bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 rounded-2xl p-4 sm:p-5 transition-all duration-300">
      <div className="space-y-3 sm:space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-cyan-400">
            <IconComponent className="w-4 h-4 stroke-[2]" />
          </div>
          <span className="font-mono text-[9px] sm:text-[10px] font-medium text-zinc-400 bg-zinc-800/80 px-2 sm:px-2.5 py-0.5 rounded border border-zinc-700/50 uppercase">
            {service.badge || service.category}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
            {service.title}
          </h3>
          <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-1.5 pt-2 border-t border-zinc-800/60">
          <div className="text-[9px] sm:text-[10px] font-mono text-zinc-500 uppercase">Stack Utama:</div>
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {techList.slice(0, 5).map((tech) => (
              <span key={tech} className="text-[9px] sm:text-[10px] font-mono text-zinc-300 bg-zinc-800 px-1.5 sm:px-2 py-0.5 rounded border border-zinc-700/50">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing & Detail Action */}
      <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-zinc-800/80 flex items-center justify-between gap-2">
        <div>
          <span className="text-[9px] sm:text-[10px] font-mono text-zinc-500 uppercase block">Estimasi</span>
          <div className="text-[11px] sm:text-xs font-mono font-bold text-emerald-400">
            {service.pricing}
          </div>
        </div>
        <button
          onClick={() => onOpenDetail(service)}
          className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-all cursor-pointer"
        >
          <span>Detail</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
