/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1390px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1700px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        stylish: ["Satisfy", "sans-serif"],
        dev: ["nepali", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
