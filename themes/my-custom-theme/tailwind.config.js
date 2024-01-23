/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        study: "url('/study.jpg')",
      },
    },
  },
  plugins: [],
};

