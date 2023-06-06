/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsla(299, 38%, 29%, 1)",
        inputBorderColor: "hsla(298, 14%, 44%, 1)",
        inputFocusedBorderColor: "hsla(299, 100%, 73%, 1)",
        black:"hsla(299, 33%, 4%, 1)"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        manropeRegular: ["manrope-regular", "sans-serif"],
        manropeExtrabold: ["manrope-extrabold", "sans-serif"],
        manropeSemibold: ["manrope-semibold", "sans-serif"],
        manropeMedium: ["manrope-medium", "sans-serif"],
        nunitoBold: ["nunito-bold", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
