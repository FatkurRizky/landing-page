import React from 'react';
import { ExternalLink, CheckCircle2, Clock, User, BarChart3, Code2, X } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import Modal from '../common/Modal';
import Badge from '../common/Badge';
import Button from '../common/Button';

export default function ProjectModal({ isOpen, onClose, project }) {
  if (!project) return null;

  const techList = project.techStack || project.tech || [];
  const featureList = project.highlights || project.keyFeatures || [];
  const githubLink = project.github || project.githubUrl;
  const demoLink = project.demo || project.liveUrl;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Case Study: ${project.title}`} maxWidth="max-w-3xl">
      <div className="space-y-6">
        {/* Project Image Preview */}
        <div className="w-full aspect-video bg-slate-950 rounded-xl border border-slate-800 overflow-hidden relative shadow-inner">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="cyan">{project.tag || project.category}</Badge>
          </div>
        </div>

        {/* Description */}
        <div>
          <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
            Ringkasan Proyek & Tanggung Jawab Engineering
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            {project.description}
          </p>
        </div>

        {/* Metrics Grid */}
        {project.metrics && (
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-cyan-400" />
              Metrik Performa & Hasil Pengujian
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Object.entries(project.metrics).map(([key, val]) => (
                <div key={key} className="p-3 rounded-xl bg-slate-950/80 border border-cyan-500/30 text-center">
                  <div className="text-sm sm:text-base font-mono font-bold text-cyan-400">{val}</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">{key}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Highlights / Features List */}
        {featureList.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              Sorotan Arsitektur & Keunggulan Clean Code
            </h4>
            <div className="space-y-2">
              {featureList.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Matrix */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
            Teknologi & Tools
          </h4>
          <div className="flex flex-wrap gap-2 p-3 bg-slate-950/60 rounded-xl border border-slate-800">
            {techList.map((tech) => (
              <Badge key={tech} variant="cyan">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Links & CTA Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" icon={GithubIcon}>
                  Repository GitHub
                </Button>
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="sm" icon={ExternalLink}>
                  Buka Demo / Web
                </Button>
              </a>
            )}
          </div>
          <Button variant="secondary" size="sm" onClick={onClose} className="w-full sm:w-auto">
            Tutup Preview
          </Button>
        </div>
      </div>
    </Modal>
  );
}
