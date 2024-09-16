/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "wh-100": "#FFFFFF",
        "wh-400": "#BABABA",
        "wh-600": "#525252",
        "wh-900": "#111111",
        "bl-900": "#000000",
        "accent-pink": "#F49EFF",
        "accent-orange": "#ED8F40",
        "dark-pink": "#B45FBF",
        "dark-orange": "#AD4F00",
        "pink-main": "#F07EFF",
        "orange-main": "#E76900",
      },
      backgroundImage: (theme) => ({
        "gradient-gradual":
          "linear-gradient(328.78deg, #101010 14.45%, #090909 84.36%)",
        "grainy-rect":
          "linear-gradient(44.78deg, rgb(255,255,255), rgb(240,126,255), rgb(231,105,0))",
        "grainy-purple":
          "radial-gradient(circle at 0% 100%, rgba(85, 29, 86, 1) 0%, rgba(51, 4, 60, 1) 20%, rgba(1, 1, 1, 1) 50%)",
        "grainy-orange":
          "radial-gradient(circle at 0% 100%, rgba(127, 64, 11, 1) 0%, rgba(80, 36, 4, 1) 20%, rgba(1, 1, 1, 1) 50%)",
        "grainy-green":
          "radial-gradient(circle at 0% 100%, rgba(32, 86, 29, 1) 0%, rgba(4, 60, 4, 1) 20%, rgba(1, 1, 1, 1) 50%)",
        "grainy-blue":
          "radial-gradient(circle at 0% 100%, rgba(29, 73, 86, 1) 0%, rgba(4, 47, 60, 1) 20%, rgba(1, 1, 1, 1) 50%)",
        "grainy-yellow":
          "radial-gradient(circle at 0% 100%, rgba(160, 160, 20, 1) 0%, rgba(73, 72, 11, 1) 20%, rgba(1, 1, 1, 1) 50%)",
      }),
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "reverse-spin": "reverse-spin 10s linear infinite",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
