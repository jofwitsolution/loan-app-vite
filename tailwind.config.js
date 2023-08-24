/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "linear-gradient-1":
          "linear-gradient(to right, rgba(0, 0, 0, .8), rgba(0, 0, 0, .8))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "color-primary": "#BA68C8",
        "color-secondary": "#c38ccb",
        "color-secondary-2": "#F5F4FF",
        "black-cus-1": "#111111",
        "white-cus-1": "#FFFFFF",
        "gray-cus-1": "#F1F1F1",
        "gray-cus-2": "#ABABAB",
      },
      fontFamily: {
        "Nunito-Sans": "Nunito Sans",
        Manrope: "Manrope",
      },
    },
  },
  plugins: [],
};
