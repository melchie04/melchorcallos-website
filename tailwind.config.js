/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#051622",
        light: "#e6e8e9",
        primary: {
          dark: "#1ba098",
          light: "#0e504c",
        },
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
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        shake: "shake 0.3s infinite",
        float: "float 3s ease-in-out infinite",
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
          background: "#0e504c",
          borderRadius: "4px",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb:hover": {
          background: "#0e504c",
        },
        ".custom-scrollbar": {
          scrollbarWidth: "thin",
          scrollbarColor: "#0e504c transparent",
        },
        ".dark .custom-scrollbar::-webkit-scrollbar-thumb": {
          background: "#1ba098",
          borderRadius: "4px",
        },
        ".dark .custom-scrollbar::-webkit-scrollbar-thumb:hover": {
          background: "#1ba098",
        },
        ".dark .custom-scrollbar": {
          scrollbarWidth: "thin",
          scrollbarColor: "#1ba098 transparent",
        },
        ".custom-swiper-pagination-bullet": {
          "background-color": "rgba(5, 22, 34, 0.8)",
          opacity: "0.3",
          "border-radius": "0.5rem",
          width: "0.5rem",
          height: "0.5rem",
          display: "inline-block",
          cursor: "pointer",
          margin: "0 0.25rem",
        },
        ".custom-swiper-pagination-bullet-active": {
          "background-color": "#051622",
          opacity: "1",
        },
        ".dark .custom-swiper-pagination-bullet": {
          "background-color": "rgba(230, 232, 233, 0.8)",
          opacity: "0.3",
          "border-radius": "0.5rem",
          width: "0.5rem",
          height: "0.5rem",
          display: "inline-block",
          cursor: "pointer",
          margin: "0 0.25rem",
        },
        ".dark .custom-swiper-pagination-bullet-active": {
          "background-color": "#e6e8e9",
          opacity: "1",
        },
        ".custom-placeholder": {
          "user-select": "none",
        },
      });
    },
  ],
};
