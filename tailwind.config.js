module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#be123c",            // rose-700
        primaryVariant: "#1f2937",     // Gray-800
        darkrose: "#881337",           // rose-900
        secondary: "#4b5563",          // Gray-600
      },
      fontFamily: {
        primary: ["Open Sans","sans-serif"],  // h1 fonts
        accent: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require ('tailwind-scrollbar-hide'),
  ],
};

