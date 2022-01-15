module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        accent: "#7dd3fc",
        thistle: "#dcbcf4",
        primaryFont: "#374151",
        accentsFont: "#6b7280",
      },
      fontFamily: {
        primary: ["Lora", "sans-serif"],
        accent: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
