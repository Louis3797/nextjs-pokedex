const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: {
        DEFAULT: colors.neutral[50],
        600: colors.neutral[100],
      },
      secondary: {
        DEFAULT: colors.zinc[800],
      },
      accent: {
        DEFAULT: colors.red[500],
      },
    },
    extend: {
      keyframes: {
        "poke-bounce": {
          "0%, 100%": { transform: "translateY(-2%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "poke-bounce": "poke-bounce 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
