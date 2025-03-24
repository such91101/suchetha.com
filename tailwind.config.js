/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#FFB5C2',
          blue: '#B5D8FF',
          yellow: '#FFF3B5',
          purple: '#E5B5FF',
        },
      },
      fontFamily: {
        pixel: ['VT323', 'monospace'],
      },
    },
  },
  plugins: [],
};