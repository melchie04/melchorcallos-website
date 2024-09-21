/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#051622",
        light: "#e7f0f8",
        primary: "#1ba098",
        secondary: {
          dark: "#deb992",
          light: "#6f5c49",
        },
      },
    },
  },
  plugins: [],
};
