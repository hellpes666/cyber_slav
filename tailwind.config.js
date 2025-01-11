/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}" 
  ],
  theme: {
    extend: {
      fontFamily: {
        title: 'title',
        'text-unique': ['text-unique', 'sans-serif'],
        'default-light': ['default-light', 'sans-serif'],
        'default-regular': ['default-regular', 'sans-serif'],
        'default-medium': ['default-medium', 'sans-serif'],
        'default-bold-italic': ['default-bold-italic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};