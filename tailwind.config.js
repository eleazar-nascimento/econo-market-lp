/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669', // Verde Principal Supermercado
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          DEFAULT: '#059669',
        },
        market: {
          canvas: '#F8FAFC',
          card: '#FFFFFF',
          subtle: '#F1F5F9',
          border: '#E2E8F0',
          darkBorder: '#CBD5E1',
        },
        savings: {
          text: '#059669',
          bg: '#ECFDF5',
          border: '#A7F3D0',
        },
        inflation: {
          text: '#DC2626',
          bg: '#FEF2F2',
          border: '#FECACA',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(15, 23, 42, 0.05)',
        'soft-md': '0 8px 24px -4px rgba(15, 23, 42, 0.08)',
        'soft-lg': '0 16px 36px -6px rgba(15, 23, 42, 0.1)',
        'glow-emerald': '0 0 30px -5px rgba(16, 185, 129, 0.25)',
      },
    },
  },
  plugins: [],
};

