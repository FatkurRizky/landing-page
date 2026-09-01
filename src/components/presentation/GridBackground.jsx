import React from 'react';

/**
 * GridBackground Component
 * Renders the subtle isometric / diagonal grid lines with ambient glows matching the manly color palette:
 * #0F3040, #464858, #A56F63, #D99B7F
 */
export default function GridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Soft gradient backdrop matching off-white neutral */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#f4f2ee] via-[#f8f7f5] to-[#efece6]" />

      {/* SVG Isometric Grid Lines styled with muted palette #464858 */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="isometric-grid"
            width="80"
            height="46.188"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 23.094 L40 0 L80 23.094 L40 46.188 Z"
              fill="none"
              stroke="#464858"
              strokeWidth="0.6"
              strokeOpacity="0.4"
            />
            <path
              d="M40 0 L40 46.188"
              fill="none"
              stroke="#0F3040"
              strokeWidth="0.4"
              strokeOpacity="0.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#isometric-grid)" />
      </svg>

      {/* Soft ambient glows tuned to #D99B7F & #0F3040 */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#D99B7F]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#0F3040]/10 rounded-full blur-3xl" />
    </div>
  );
}
