module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#171717",             // Neutral-900
        accent: "#7dd3fc",              // Sky-300
        rose: "#be123c",                // Rose-700
        darkrose: "#881337",
        thistle: "#dcbcf4",             
        primaryFont: "#374151",         // Gray-700 fontColor
        accentsFont: "#6b7280",         // Gray-500 fontColor
      },
      fontFamily: {
        primary: ["Open Sans","sans-serif"],
        accent: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require ('tailwind-scrollbar-hide'),
  ],
};

