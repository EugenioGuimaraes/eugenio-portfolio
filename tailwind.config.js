/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:       "#0d0f17",
        surface:  "#141720",
        card:     "#191d28",
        fg:       "#e8e9f0",
        muted:    "#8a8c96",
        faint:    "#4d5070",
        phosphor: "#3ee07a",
        gold:     "#d4a028",
        line:     "#2d3045",
        red:      "#e05050",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        content: "1024px",
      },
    },
  },
  plugins: [],
};
