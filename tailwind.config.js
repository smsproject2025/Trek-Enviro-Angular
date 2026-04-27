/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cabinet Grotesk"', 'Manrope', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: '#0A3B2C',
        'primary-soft': '#134E4A',
        accent: '#10B981',
        cream: '#F9F6F0',
        'cream-warm': '#F4EFE5',
      },
    },
  },
  plugins: [],
};
