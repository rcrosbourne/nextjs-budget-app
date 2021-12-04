module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        ex: {
          dark: "#302D43",
          purple: "#6953F7",
          pink: "#CD4FF7",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
