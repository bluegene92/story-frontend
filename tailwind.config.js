/** @type {import('tailwindcss').Config} */
export default {
  // purge: ["./public/**/*.html", "./src/**/*.vue"],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
  important: true, // Add this line
};
