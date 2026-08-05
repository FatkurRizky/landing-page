import React from 'react';
import { useCostEstimator } from '../../hooks/useCostEstimator';
import { ServiceCheckboxes } from './ServiceCheckboxes';
import { BudgetSlider } from './BudgetSlider';
import { ComplexitySelector } from './ComplexitySelector';
import { InstagramButton } from './InstagramButton';
import { AGENCY_CONFIG } from '../../data/agencyData';

export function EstimatorSection() {
  const {
    services,
    selectedServiceIds,
    toggleService,
    budget,
    setBudget,
    complexity,
    setComplexity,
    totalCost,
    formattedCostText,
    estimatedDays,
  } = useCostEstimator();

  return (
    <section id="estimator" className="py-20 px-6 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <span className="text-xs font-extrabold text-pink-400 uppercase tracking-widest">
          Kalkulator Estimasi Proyek
        </span>
        <h2 className="text-3xl font-black text-white">Hitung Perkiraan Biaya Proyek Anda</h2>
        <p className="text-xs text-zinc-400 max-w-lg mx-auto">
          Pilih jenis layanan, tentukan kisaran budget, dan konsultasikan detailnya langsung via DM Instagram.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 rounded-3xl space-y-8">
          <ServiceCheckboxes 
            services={services} 
            selectedIds={selectedServiceIds} 
            onToggle={toggleService} 
          />

          <BudgetSlider 
            budget={budget} 
            onChange={setBudget} 
          />

          <ComplexitySelector 
            selectedComplexity={complexity} 
            onSelect={setComplexity} 
          />
        </div>

        <div className="lg:col-span-5">
          <InstagramButton 
            instagramUrl={AGENCY_CONFIG.instagramUrl} 
            formattedCostText={formattedCostText} 
            estimatedDays={estimatedDays} 
          />
        </div>
      </div>
    </section>
  );
}

export default EstimatorSection;
