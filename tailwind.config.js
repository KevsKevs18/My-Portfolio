/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: 'var(--color-secondary)',
        background: 'var(--color-bg)',
        text: 'var(--color-text)',
      },
      boxShadow: {
        neu: 'var(--shadow)',
      }
    },
  },
  plugins: [],
}

