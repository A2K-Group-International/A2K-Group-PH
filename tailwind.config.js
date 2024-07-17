/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        darkGray: "#434343",
      },
      keyframes: {
        flash: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        }
      },
    },
  },
  plugins: [],
};
