/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  important: true, // Add this line
  prefix: "tw-",
};
