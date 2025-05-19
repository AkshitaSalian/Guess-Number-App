/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}', './screens/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#ffffff',
          secondary: '#2b382e',
          tertiary: '#ffffff',
          olive: '#2b382e',
        },
      },
    },
  },
  plugins: [],
};
