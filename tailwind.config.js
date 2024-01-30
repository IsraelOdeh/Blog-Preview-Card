/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "cYellow": "hsl(47, 88%, 63%)",
"cWhite": "hsl(0, 0%, 100%)",
"cGrey": "hsl(0, 0%, 50%)",

"cBlack": "hsl(0, 0%, 7%)"
      },
      fontFamily:{
        "figtree": ["Figtree", "sans-serif"]
      }
    },
  },
  plugins: [],
}

