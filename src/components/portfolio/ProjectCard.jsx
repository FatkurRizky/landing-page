import React from 'react';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import Badge from '../common/Badge';

export default function ProjectCard({ project, onOpenDetail }) {
  const techList = project.techStack || project.tech || [];

  return (
    <div className="group relative flex flex-col justify-between h-full bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div>
        {/* Project Thumbnail */}
        <div className="relative w-full aspect-video bg-zinc-950 overflow-hidden border-b border-zinc-800/80">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="text-[10px] font-mono font-medium bg-zinc-900/90 text-zinc-300 border border-zinc-700/80 px-2.5 py-0.5 rounded-md backdrop-blur-sm">
              {project.tag || project.category}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="p-4 sm:p-5 space-y-2.5 sm:space-y-3">
          <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-2 border-t border-zinc-800/60">
            {techList.map((t) => (
              <span
                key={t}
                className="text-[9px] sm:text-[10px] font-mono text-zinc-300 bg-zinc-800/80 px-1.5 sm:px-2 py-0.5 rounded border border-zinc-700/50"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 sm:p-5 pt-0 flex items-center justify-between gap-2">
        <button
          onClick={() => onOpenDetail(project)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-lg text-[11px] sm:text-xs font-mono font-medium text-zinc-200 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 transition-all cursor-pointer"
        >
          <span>Detail Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-600 transition-colors flex items-center justify-center shrink-0"
            title="GitHub Repository"
          >
            <GithubIcon size={14} />
          </a>
        )}
      </div>
    </div>
  );
}
