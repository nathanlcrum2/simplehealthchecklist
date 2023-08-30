const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pri: colors.amber["100"],
        sec: colors.green["900"]
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('@tailwindcss/typography')
  ],
}

