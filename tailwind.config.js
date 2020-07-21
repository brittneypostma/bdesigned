module.exports = {
  purge: ["./src/**/*.svelte"],
  theme: {
    colors: {
      white: "#ffffff",
      sand: "#EBE4DC",
      "light-blue": "#E8F4F4",
      "medium-blue": "#465881",
      mint: "#AEEADE",
      caribbean: "#00E0FF",
      blue: "#5FC7E4",
      "light-teal": "#68D2C8",
      teal: "#00789E",
      yellow: "#E5A91E",
      navy: "#1B2A49",
      gray: "#333333",
      black: "#000000"
    },
    fontFamily: {
      heading: "'Pacifico', cursive",
      body: "'Quicksand', sans-serif",
    },
    extend: {
      boxShadow: {
        inset: 'inset 0px -5px 10px rgba(0, 0, 0, 0.25)'
      },
      height: {
        100: "100px"
      },
      inset: {
        50: "50px"
      }
    },
  },
  variants: {},
  plugins: [],
}
