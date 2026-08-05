import React from 'react';
import { PORTFOLIO_CATEGORIES } from '../../data/projectsData';

export default function FilterTabs({ activeCategory, onSelectCategory }) {
  return (
    <div className="flex items-center justify-center min-w-0 flex-1">
      <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md overflow-x-auto custom-scrollbar max-w-full">
        {PORTFOLIO_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.4)] scale-105'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
