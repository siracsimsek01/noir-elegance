/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px)

      md: "768px",
      // => @media (min-width: 768px)

      lg: "1024px",
      // => @media (min-width: 1024px)

      xl: "1440px",
      // => @media (min-width: 1440px)

      "2xl": "1536px",
      // => @media (min-width: 1536px)
    },

    fontFamily: {
      body: ["Cormorant Infant", "sans"],
      sans: ["Roboto", "sans-serif"],
    },

    extend: {
      colors: {
        darkYellow: "#E1B168",
        blackPrimary: "#292E36",
        darkgrey: "#555555",
        blackLight: "#343942",
      },

      width: {
        22: "5.5rem",
        30: "7.5rem",
        86: "21.5rem",
        110: "27.5rem",
        124: "31rem",
        128: "32rem",
        130: "33rem",
        140: "35rem",
        144: "36rem",
      },

      height: {
        22: "5.5rem",
        86: "21.5rem",
        110: "27.5rem",
        124: "31rem",
        128: "32rem",
        130: "33rem",
        140: "35rem",
        144: "36rem",
      },

      borderWidth: {
        0.5: "0.5px",
      },

      fontWeight: {
        regular: 400,
        normal: 500,
        semibold: 600,
        bold: 700,
      },

    },
  },
};
