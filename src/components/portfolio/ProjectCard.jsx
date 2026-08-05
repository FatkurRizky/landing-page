import React from 'react';
import { ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';
import { use3DTilt } from '../../hooks/use3DTilt';
import Badge from '../common/Badge';

export default function ProjectCard({ project, onOpenDetail }) {
  const { cardRef, style, handleMouseMove, handleMouseLeave } = use3DTilt(8, 1.02);

  return (
    <div
      ref={cardRef}
      style={{
        transform: style.transform,
        transition: style.transition
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col justify-between h-full bg-slate-900/90 border border-slate-800 hover:border-cyan-500/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_0_35px_rgba(0,240,255,0.2)] transition-all duration-300"
    >
      {/* Dynamic Cursor Light Overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
        style={{
          opacity: style.shadowStyle.opacity,
          background: `radial-gradient(400px circle at ${style.shadowStyle.x}% ${style.shadowStyle.y}%, rgba(0, 240, 255, 0.12), transparent 80%)`
        }}
      />

      <div>
        {/* Project Image Preview Container with AGENTS.md object-contain & padding guardrail */}
        <div className="relative w-full h-56 bg-slate-950 p-4 flex items-center justify-center overflow-hidden border-b border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="cyan">{project.category}</Badge>
          </div>
          {project.featured && (
            <div className="absolute top-3 right-3">
              <Badge variant="amber">
                <Sparkles className="w-3 h-3 mr-1 inline" /> Featured
              </Badge>
            </div>
          )}
        </div>

        {/* Card Details */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-mono font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-cyan-400/90 mt-1">{project.subtitle}</p>
            <p className="text-sm text-slate-400 mt-2 line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Matrix with Layout Guardrail: min-w-0 flex-1 */}
          <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
            <div className="text-[11px] font-mono text-slate-400 uppercase">Tech Stack:</div>
            <div className="flex flex-wrap gap-1.5 min-w-0 flex-1">
              {project.techStack.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="outline" className="text-[11px] py-0.5 px-2">
                  {tech}
                </Badge>
              ))}
              {project.techStack.length > 4 && (
                <span className="text-xs text-slate-400 font-mono self-center">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 pt-0 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenDetail(project)}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono font-bold text-slate-200 bg-slate-800/80 hover:bg-cyan-500 hover:text-slate-950 border border-slate-700 hover:border-cyan-400 transition-all duration-200"
        >
          <span>Lihat Case Study</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-800/80 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-colors"
            title="Buka Demo Live"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
