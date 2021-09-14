module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "brand-yellow": "#FFFF00",
        "brand-color": "#000000",
        "brand-gray": "#222326",
        "blue-background": "#2941ab",
        "def-text-color": "#919496",
        "primary-brand-color": "#5d3ebc",
        "primary-white": "#FFFFFF",
        "primary-green": "#1ed760",
        "secondary-brand-color": "#ffcdd2",
      },
      backgroundImage: (theme) => ({
        "free-bg":
          "url('https://content-tooling.spotifycdn.com/images/b236bf87-bfd5-4bcb-b51a-77881073039c_lie_circles.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
