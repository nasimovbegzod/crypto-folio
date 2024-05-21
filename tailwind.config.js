/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/div.jss10.png')",
      },
      colors: {
        och_blue: {
          100: "#87CEEB"
        },
        bg_color: {
          100: "#515151",
          900: "#15171B"
        }
      },
      fontFamily: {}
    },
    screens: {},
  },
  plugins: [],
}