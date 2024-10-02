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
      keyframes: {
        shake: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
          "100%": { transform: "translateX(0)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        shake: "shake 0.3s infinite",
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".circular-spin-animation::before": {
          content: '""',
          position: "absolute",
          inset: "-10px 60px",
          transition: "0.5s",
          animation: "spin 4s linear infinite",
        },
        ".circular-spin-animation:hover::before": {
          inset: "-20px 0px",
        },
        ".circular-spin-animation::after": {
          content: '""',
          position: "absolute",
          inset: "6px",
          borderRadius: "50%",
          zIndex: "1",
        },
        ".custom-scrollbar::-webkit-scrollbar": {
          width: "8px",
        },
        ".custom-scrollbar::-webkit-scrollbar-track": {
          background: "transparent",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb": {
          background: "#1ba098",
          borderRadius: "4px",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb:hover": {
          background: "#1ba098",
        },
        ".custom-scrollbar": {
          scrollbarWidth: "thin",
          scrollbarColor: "#1ba098 transparent",
        },
      });
    },
  ],
};
