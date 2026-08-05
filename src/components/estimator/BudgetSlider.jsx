import React from 'react';
import { BUDGET_RANGE } from '../../data/estimatorData.js';
import { formatRupiah } from '../../hooks/useCostEstimator.js';

export function BudgetSlider({ value, onChange, budgetValue, setBudgetValue, formattedBudgetText, budgetRange }) {
  const currentVal = value !== undefined ? value : budgetValue;
  const handleChange = onChange || setBudgetValue;
  const rangeConfig = budgetRange || BUDGET_RANGE;
  const isMax = currentVal >= rangeConfig.max;
  const displayVal = formattedBudgetText || `${formatRupiah(currentVal)}${isMax ? '+' : ''}`;

  return (
    <div className="space-y-3 bg-slate-950/60 p-5 rounded-2xl border border-slate-800">
      <div className="flex items-center justify-between">
        <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
          Alokasi Anggaran / Budget Proyek Anda:
        </label>
        <span 
          data-testid="budget-value-display"
          className="text-base font-mono font-extrabold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/30"
        >
          {displayVal}
        </span>
      </div>

      <div className="relative pt-2">
        <input
          data-testid="budget-slider-input"
          type="range"
          min={rangeConfig.min}
          max={rangeConfig.max}
          step={rangeConfig.step || 500000}
          value={currentVal}
          onChange={(e) => handleChange(Number(e.target.value))}
          className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
        />
        <div className="flex justify-between text-[11px] font-mono text-slate-400 pt-2">
          <span>{formatRupiah(rangeConfig.min)}</span>
          <span>{formatRupiah(10000000)}</span>
          <span>{formatRupiah(rangeConfig.max)}+</span>
        </div>
      </div>
    </div>
  );
}

export default BudgetSlider;
