import React from 'react';
import { Globe, Smartphone, Cpu, Wrench, Check } from 'lucide-react';
import { ESTIMATOR_SERVICES } from '../../data/estimatorData.js';
import { formatRupiah } from '../../hooks/useCostEstimator.js';

const iconMap = {
  Globe,
  Smartphone,
  Cpu,
  Wrench
};

export function ServiceCheckboxes({ selectedServices, onToggleService, servicesList, onServiceToggle }) {
  const activeServices = selectedServices || [];
  const toggleHandler = onToggleService || onServiceToggle || (() => {});
  const list = servicesList || ESTIMATOR_SERVICES;

  return (
    <div className="space-y-3">
      <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block">
        Pilih Layanan & Modul Software yang Dibutuhkan:
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 min-w-0 flex-1">
        {list.map((service) => {
          const isSelected = activeServices.includes(service.id);
          const IconComp = iconMap[service.icon] || Globe;

          return (
            <div
              key={service.id}
              data-testid={`service-checkbox-${service.id}`}
              onClick={() => toggleHandler(service.id)}
              className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-3 select-none ${
                isSelected
                  ? 'bg-slate-900 border-cyan-500 shadow-[0_0_20px_rgba(0,240,255,0.15)]'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
              }`}
            >
              {/* Checkbox indicator */}
              <div
                className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 transition-colors flex-shrink-0 ${
                  isSelected ? 'bg-cyan-400 text-slate-950 font-bold' : 'border border-slate-700 bg-slate-900'
                }`}
              >
                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>

              {/* Service content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <IconComp className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span className="text-xs font-mono font-bold text-slate-100 truncate">
                    {service.name || service.title}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-snug">
                  {service.description}
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-emerald-400 font-bold">
                    {formatRupiah(service.basePrice)}
                  </span>
                  <span className="text-slate-400">~{service.estimatedDays} Hari</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceCheckboxes;
