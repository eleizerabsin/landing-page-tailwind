module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      bggray1: "#111827",
      bggray2: "#111827",
      lightblue: "#61dafb",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      headerorange: "#F26B50",
      lightblue: "#61dafb",
      darkblue: "#111827",
    }),
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      section: "320px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
