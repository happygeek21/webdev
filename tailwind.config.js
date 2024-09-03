/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-text': '#000000', // For light mode text color
        'dark-text': '#FFFFFF',  // For dark mode text color
      },
    },
  },
  darkMode: 'class', // Ensure this is enabled
  plugins: [],
}
