/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="cyberpunk"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["retro"],
  }
}

