/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['Dubai', 'Arial', 'sans-serif'],
        french: ['Nunito', 'Arial', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f8ff',
          100: '#e0f0ff',
          200: '#b6e0ff',
          300: '#84ccff',
          400: '#4db3ff',
          500: '#2E86C1', // Primary brand color
          600: '#2574a9',
          700: '#1e5c86',
          800: '#164563',
          900: '#0e293d',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};