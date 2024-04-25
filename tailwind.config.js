/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: theme => ({
        'gradient': 'linear-gradient(to right, #06286E, #164EC0)',
      })
    },
  },
  plugins: [],
}