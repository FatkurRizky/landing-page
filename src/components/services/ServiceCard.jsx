import React from 'react';
import { Code2, Smartphone, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
import Badge from '../common/Badge';

const iconMap = {
  Code2: Code2,
  Smartphone: Smartphone,
  Cpu: Cpu
};

export default function ServiceCard({ service, onOpenDetail }) {
  const IconComponent = iconMap[service.icon] || Code2;

  return (
    <div className="group relative flex flex-col justify-between h-full bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]">
      {/* Accent Glow backdrop */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

      <div className="space-y-6">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <IconComponent className="w-6 h-6 stroke-[2]" />
          </div>
          <span className="font-mono text-xs font-bold text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
            {service.category}
          </span>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-xl font-mono font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-2">
            {service.title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Tech Stack Matrix with Layout Guardrail: min-w-0 flex-1 */}
        <div className="space-y-2 pt-2 border-t border-slate-800/80">
          <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
            Tech Stack Matrix:
          </div>
          <div className="flex flex-wrap gap-1.5 min-w-0 flex-1">
            {service.techStack.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="cyan">
                {tech}
              </Badge>
            ))}
            {service.techStack.length > 5 && (
              <Badge variant="outline">+{service.techStack.length - 5} lainnya</Badge>
            )}
          </div>
        </div>

        {/* Key Deliverables Snippet */}
        <ul className="space-y-1.5 pt-2 text-xs text-slate-300">
          {service.keyFeatures.slice(0, 2).map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pricing & Modal Trigger */}
      <div className="pt-6 mt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono text-slate-400 uppercase">Mulai Dari</span>
          <div className="text-lg font-mono font-extrabold text-emerald-400">
            {service.pricing}
          </div>
        </div>
        <button
          onClick={() => onOpenDetail(service)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold font-mono text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500 hover:text-slate-950 border border-cyan-500/30 transition-all duration-200 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
        >
          <span>Detail & Estimasi</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
