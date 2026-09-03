/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F9F8F3",
        onyx: "#111111",
        glamred: "#C41220",
        slate: {
          light: "#E5E5E5",
          DEFAULT: "#707070",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        script: ["'Yellowtail'", "cursive"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
