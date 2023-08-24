/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'heading': ['Dancing Script', 'cursive'],
      'content': ['M PLUS Rounded 1c', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

