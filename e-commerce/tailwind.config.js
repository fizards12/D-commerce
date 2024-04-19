/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        "bounce-once": "pulse 1s 1"
      },
      borderWidth:{
        "px": "1px"
      }
    },
  },
  plugins: [],
}

