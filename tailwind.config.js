/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,tsx,jsx,html}"],
  theme: {
    extend: {
      colors: {
        blackL: "#131118",
        hrBlack: "#eaeaeb",
      },
      backgroundImage: {
        bannerL: "url('/src/assets/images/banner.png')",
      },
    },
  },
  plugins: [],
};
