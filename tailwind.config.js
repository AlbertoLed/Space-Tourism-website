/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#cfd6fb",
        primary: "#ffffff",
        secondary: "#585a63",
        accent: "#0b0e17",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        "barlow-con": ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
      },
    },
  },
  plugins: [],
}

