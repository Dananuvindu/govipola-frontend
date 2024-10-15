/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sarpanch' : ['Sarpanch', 'sans-serif'],
        'pt-mono' : ['PT Mono', 'monospace'],
        'protest' : ['Protest Strike', 'sans-serif'],
        'rammetto': ['Rammetto One', 'sans-serif']
      }
    },
  },
  plugins: [],
}

