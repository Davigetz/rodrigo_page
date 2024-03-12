/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      color: {
        'raisin-black': '#272837',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
