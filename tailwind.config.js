/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0f0f13',
        'brand-surface': '#1a1a24',
        'brand-border': '#2e2e40',
        'brand-purple': '#9333ea',
        'brand-magenta': '#d946ef',
        'brand-gold': '#f59e0b',
      },
    },
  },
  plugins: [],
}
