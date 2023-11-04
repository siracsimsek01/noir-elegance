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
    },

    extend: {
      colors: {
        darkYellow: "#E1B168",
        blackPrimary: "#292E36",
        darkgrey: "#555555",
        blackLight: "#343942",
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
