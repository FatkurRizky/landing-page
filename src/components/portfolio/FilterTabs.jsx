import React from 'react';
import { PORTFOLIO_CATEGORIES } from '../../data/projectsData';

export default function FilterTabs({ activeCategory, onSelectCategory }) {
  return (
    <div className="flex items-center justify-center min-w-0 flex-1">
      <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-zinc-800">
        {PORTFOLIO_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-zinc-100 text-zinc-900 font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
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
