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
      <label className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider block">
        1. Pilih Modul / Layanan:
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
              className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-3 select-none ${
                isSelected
                  ? 'bg-zinc-900 border-zinc-500 shadow-sm'
                  : 'bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/40'
              }`}
            >
              {/* Checkbox indicator */}
              <div
                className={`w-4 h-4 rounded flex items-center justify-center mt-0.5 transition-colors flex-shrink-0 ${
                  isSelected ? 'bg-cyan-400 text-zinc-950 font-bold' : 'border border-zinc-700 bg-zinc-900'
                }`}
              >
                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
              </div>

              {/* Service content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <IconComp className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-400' : 'text-zinc-400'}`} />
                  <span className="text-xs font-bold text-zinc-100 truncate">
                    {service.name || service.title}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2 leading-snug">
                  {service.description}
                </p>
                <div className="mt-2 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-emerald-400 font-bold">
                    {formatRupiah(service.basePrice)}
                  </span>
                  <span className="text-zinc-400">~{service.estimatedDays} Hari</span>
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
