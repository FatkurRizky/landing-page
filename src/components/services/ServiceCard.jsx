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
    <div className="group relative flex flex-col justify-between h-full bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 rounded-2xl p-5 transition-all duration-300">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-cyan-400">
            <IconComponent className="w-4 h-4 stroke-[2]" />
          </div>
          <span className="font-mono text-[10px] font-medium text-zinc-400 bg-zinc-800/80 px-2.5 py-0.5 rounded border border-zinc-700/50 uppercase">
            {service.badge || service.category}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
            {service.title}
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-1.5 pt-2 border-t border-zinc-800/60">
          <div className="text-[10px] font-mono text-zinc-500 uppercase">Stack Utama:</div>
          <div className="flex flex-wrap gap-1.5">
            {techList.slice(0, 5).map((tech) => (
              <span key={tech} className="text-[10px] font-mono text-zinc-300 bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700/50">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing & Detail Action */}
      <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between gap-2">
        <div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase block">Estimasi</span>
          <div className="text-xs font-mono font-bold text-emerald-400">
            {service.pricing}
          </div>
        </div>
        <button
          onClick={() => onOpenDetail(service)}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-all cursor-pointer"
        >
          <span>Detail</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
