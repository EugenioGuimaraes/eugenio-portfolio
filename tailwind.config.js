/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0E14",
        bgRaised: "#11151D",
        bgCard: "#151A24",
        ink: "#E8E4DC",
        inkMuted: "#9C9890",
        inkFaint: "#5C5A55",
        gold: "#C9A55C",
        goldDim: "#8A744A",
        steel: "#3D5470",
        wine: "#6B2737",
        hairline: "rgba(201,165,92,0.18)",
      },
      fontFamily: {
        serif: ["Fraunces", "serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        content: "1100px",
      },
    },
  },
  plugins: [],
};
