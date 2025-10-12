// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#1e293b",
          200: "#0f172a",
          300: "#020617",
        },
        accent: {
          100: "#38bdf8",
          200: "#0ea5e9",
          300: "#0284c7",
        },
      },
    },
  },
  plugins: [],
};
