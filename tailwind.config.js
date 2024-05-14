/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#fbebcb',
        darkBrown: '#764e27'
      }
    }
  },
  plugins: []
}
