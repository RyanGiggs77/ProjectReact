/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    components: {
      Card: {
        'padding': 2,
        'actionsBg': '#F5F5F5',
      }
    },
    extend: {
      colors: {
        'costum-green': '#242E2C',
        'costum-greenL': '#BBF49C',
        'costum-white': '#FBFBFC',
        'costum-green-dark': '#1E4841'
      }
    },
  },
  plugins: [],
}