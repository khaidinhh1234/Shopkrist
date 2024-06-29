/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        blackL: "#131118",
      },
      backgroundImage: {
        bannerL: "url('/src/assets/images/banner.png')",
      },
    },
  },
  plugins: [],
};
