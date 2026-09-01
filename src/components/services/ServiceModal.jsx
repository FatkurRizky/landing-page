import React from 'react';
import { CheckCircle2, Clock, DollarSign, Layers, Sparkles } from 'lucide-react';
import Modal from '../common/Modal';
import Badge from '../common/Badge';
import Button from '../common/Button';

export default function ServiceModal({ isOpen, onClose, service }) {
  if (!service) return null;

  const techList = service.techStack || service.tech || [];
  const featureList = service.keyFeatures || [];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Layanan: ${service.title}`}>
      <div className="space-y-6">
        {/* Description Header */}
        <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
          {service.description}
        </p>

        {/* Estimation Meta Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">Estimasi Biaya Mulai</div>
              <div className="text-base font-mono font-bold text-emerald-400">{service.pricing}</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">Garansi & Audit</div>
              <div className="text-base font-mono font-bold text-cyan-400">Clean Code & Support</div>
            </div>
          </div>
        </div>

        {/* Tech Stack Matrix */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            Teknologi & Framework
          </h4>
          <div className="flex flex-wrap gap-2 p-3 bg-slate-950/60 rounded-xl border border-slate-800">
            {techList.map((tech) => (
              <Badge key={tech} variant="cyan">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Key Features List */}
        {featureList.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              Cakupan Fitur Utama
            </h4>
            <div className="space-y-2">
              {featureList.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-slate-300 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Button to Estimator */}
        <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
          <Button variant="outline" size="sm" onClick={onClose}>
            Tutup
          </Button>
          <a href="#estimator" onClick={onClose}>
            <Button variant="emerald" size="sm" icon={Sparkles}>
              Kalkulasi Biaya
            </Button>
          </a>
        </div>
      </div>
    </Modal>
  );
}
