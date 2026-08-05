import React from 'react';
import { ExternalLink, CheckCircle2, Clock, User, BarChart3, Code2 } from 'lucide-react';
import Modal from '../common/Modal';
import Badge from '../common/Badge';
import Button from '../common/Button';

export default function ProjectModal({ isOpen, onClose, project }) {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Case Study: ${project.title}`} maxWidth="max-w-3xl">
      <div className="space-y-6">
        {/* Project Image Preview with object-contain & padding guardrail */}
        <div className="w-full h-64 sm:h-80 bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-center overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        {/* Client & Timeline Meta */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3">
            <User className="w-5 h-5 text-cyan-400" />
            <div>
              <div className="text-[11px] font-mono text-slate-400">Klien</div>
              <div className="text-sm font-bold text-slate-200">{project.client}</div>
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3">
            <Clock className="w-5 h-5 text-emerald-400" />
            <div>
              <div className="text-[11px] font-mono text-slate-400">Durasi Pengerjaan</div>
              <div className="text-sm font-bold text-slate-200">{project.timeline}</div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
            Ringkasan Proyek & Solusi
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
              Pencapaian Performa & Metrik Kunci
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {Object.entries(project.metrics).map(([key, val]) => (
                <div key={key} className="p-3 rounded-xl bg-slate-950/80 border border-cyan-500/30 text-center">
                  <div className="text-base sm:text-lg font-mono font-bold text-cyan-400">{val}</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">{key}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features List */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
            Fitur Utama Arsitektur
          </h4>
          <div className="space-y-2">
            {project.keyFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Matrix with min-w-0 flex-1 layout guardrail */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
            Teknologi yang Digunakan
          </h4>
          <div className="flex flex-wrap gap-2 p-3 bg-slate-950/60 rounded-xl border border-slate-800 min-w-0 flex-1">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="cyan">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Links & CTA Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" icon={Code2}>
                  Source Code
                </Button>
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="sm" icon={ExternalLink}>
                  Buka Demo Live
                </Button>
              </a>
            )}
          </div>
          <Button variant="secondary" size="sm" onClick={onClose} className="w-full sm:w-auto">
            Tutup Case Study
          </Button>
        </div>
      </div>
    </Modal>
  );
}
