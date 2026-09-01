/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          dark: '#0F3040',   // Deep Navy / Dark Slate Teal
          muted: '#464858',  // Slate Charcoal / Muted Dark Neutral
          warm: '#A56F63',   // Warm Terracotta / Rose Wood
          peach: '#D99B7F',  // Sand Peach / Coral Gold Accent
          bg: '#f7f6f4',     // Soft Off-White Neutral Background
        }
      }
    },
  },
  plugins: [],
}
