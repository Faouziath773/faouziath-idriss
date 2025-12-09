/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'brand-50': '#f4f7ff',
        'brand-100': '#e6edff',
        'brand-200': '#c7d5ff',
        'brand-300': '#9fb8ff',
        'brand-400': '#7a98fb',
        'brand-500': '#5c78f5',
        'brand-600': '#455de7',
        'brand-700': '#3448c4',
        'brand-800': '#2d3b99',
        'brand-900': '#273377',
      },
      boxShadow: {
        glow: '0 20px 60px -25px rgba(76, 92, 255, 0.45)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at 20% 20%, rgba(92,120,245,0.15), transparent 35%), radial-gradient(circle at 80% 0%, rgba(76,92,255,0.2), transparent 30%)',
      },
    },
  },
  plugins: [],
}
