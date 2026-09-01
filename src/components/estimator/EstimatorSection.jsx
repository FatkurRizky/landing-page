import React from 'react';
import { useCostEstimator } from '../../hooks/useCostEstimator';
import ServiceCheckboxes from './ServiceCheckboxes';
import BudgetSlider from './BudgetSlider';
import InstagramButton from './InstagramButton';
import { AGENCY_CONFIG } from '../../data/agencyData';
import { Calculator, MessageCircle, Mail } from 'lucide-react';

export function EstimatorSection() {
  const {
    selectedServices,
    toggleService,
    budgetValue,
    setBudgetValue,
    totalEstimated,
    estimatedDays,
    formattedWhatsAppUrl,
    formatRupiah
  } = useCostEstimator();

  const formattedCostText = formatRupiah(totalEstimated);

  return (
    <section id="estimator" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10 bg-[#09090b]">
      {/* Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-widest">
          // Cost & Scope Calculator
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
          Kalkulator Estimasi Biaya & Waktu
        </h2>
        <p className="text-zinc-400 text-xs sm:text-sm">
          Simulasikan perkiraan biaya sistem dan waktu pengerjaan untuk proyek web atau mobile Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side Controls */}
        <div className="lg:col-span-7 bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl space-y-6">
          <ServiceCheckboxes
            selectedServices={selectedServices}
            onToggleService={toggleService}
          />

          <BudgetSlider
            value={budgetValue}
            onChange={setBudgetValue}
          />
        </div>

        {/* Right Side Summary */}
        <div className="lg:col-span-5 space-y-4">
          <InstagramButton
            instagramUrl={AGENCY_CONFIG.instagramUrl}
            formattedCostText={formattedCostText}
            estimatedDays={estimatedDays}
          />

          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl space-y-3">
            <div className="text-xs font-mono font-bold text-zinc-200 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Diskusi Langsung via WhatsApp</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Kirimkan rincian modul di atas langsung ke WhatsApp untuk diskusi teknis & jadwal pengerjaan.
            </p>
            <a
              href={formattedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs px-4 py-3 rounded-xl transition cursor-pointer"
            >
              <MessageCircle size={15} />
              <span>Kirim Rincian ke WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EstimatorSection;
