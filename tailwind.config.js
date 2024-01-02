/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "study": "url('/src/assets/study.jpg')",
      },
    },
  },
  plugins: [],
};

