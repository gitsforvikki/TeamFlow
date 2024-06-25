/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4B4AEF",
        secondry: "#FFCA1D",
      },
      backgroundImage: {
        "hero-pattern": "url('/public/Rectangle1.png')",
      },
    },
  },
  plugins: [],
};
