/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2f3542',
        secondary: '#57606f',
        accent: '#747d8c',
        text: '#ffffff',
      },
      fontFamily: {
        open_sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
