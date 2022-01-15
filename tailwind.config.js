module.exports = {
  content: ["./public/index.html", 
  "./src/**/*.{vue,js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      colors: {
        primary: "#d946ef",
        accents: "#7dd3fc",
        primaryFont: "#374151",
        accentsFont: "#6b7280",
      },
      fontFamily: {
        primary: ["Lora", "sans-serif"],
        accents: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
