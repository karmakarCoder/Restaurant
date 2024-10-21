/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        subNav: "#474747",
        NavListActive: "#DBDFD0",
        headding: '#101A24',
        prh: '#5C6574',
        prh2: "#2C2F24",
        btn: '#C31C1E',
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "bgImage": "url('/src/assets/banner.png')",
        "group": "url('/src/assets/group.png')",
        "group2": "url('/src/assets/group2.png')",
      }
    },
  },
  plugins: [],
}

