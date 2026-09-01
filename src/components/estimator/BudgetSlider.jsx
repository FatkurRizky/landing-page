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
    <div className="space-y-3 bg-zinc-950/60 p-4 rounded-xl border border-zinc-800/80">
      <div className="flex items-center justify-between">
        <label className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider">
          2. Alokasi Budget Proyek:
        </label>
        <span
          data-testid="budget-value-display"
          className="text-sm font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20"
        >
          {displayVal}
        </span>
      </div>

      <div className="relative pt-1">
        <input
          data-testid="budget-slider-input"
          type="range"
          min={rangeConfig.min}
          max={rangeConfig.max}
          step={rangeConfig.step || 500000}
          value={currentVal}
          onChange={(e) => handleChange(Number(e.target.value))}
          className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
        />
        <div className="flex justify-between text-[10px] font-mono text-zinc-400 pt-2">
          <span>{formatRupiah(rangeConfig.min)}</span>
          <span>{formatRupiah(10000000)}</span>
          <span>{formatRupiah(rangeConfig.max)}+</span>
        </div>
      </div>
    </div>
  );
}

export default BudgetSlider;
