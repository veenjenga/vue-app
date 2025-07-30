/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': '#1A2A44',
        'custom-blue': '#3B82F6',
        'custom-dark-blue-hover': '#2A4066',
      },
    },
  },
  plugins: [],
}