const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      "black-bg": "#0e1012",
      white: "#fff",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
        "3xl": "5rem",
      },
    },
    extend: {
      keyframes: {
        noise: {
          "0%, 100%": {
            backgroundPosition: "0 0",
          },
          "10%": {
            backgroundPosition: "-5% -10%",
          },
          "20%": {
            backgroundPosition: "-15% 5%",
          },
          "30%": {
            backgroundPosition: "7% -25%",
          },
          "40%": {
            backgroundPosition: "20% 25%",
          },
          "50%": {
            backgroundPosition: "-25% 10%",
          },
          "60%": {
            backgroundPosition: "15% 5%",
          },
          "70%": {
            backgroundPosition: "0% 15%",
          },
          "80%": {
            backgroundPosition: "25% 35%",
          },
          "90%": {
            backgroundPosition: "-10% 10%",
          },
        },
      },
      animation: {
        "grain-texture": "2s steps(1) infinite noise",
      },
      fontFamily: {
        roslindale: ["var(--font-roslindale)", ...fontFamily.sans],
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
