/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"] ,
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#ff6b1a",
          dark: "#d65305",
          light: "#ffe5d4",
        },
        slate: {
          950: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        floating: "0 30px 60px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [],
};
