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
        "secondary-brand-color": "#9bfde1",
      },
      backgroundImage: (theme) => ({
        "free-bg":
          "url('https://content-tooling.spotifycdn.com/images/b236bf87-bfd5-4bcb-b51a-77881073039c_lie_circles.svg')",
        "mobile-bg":
          "url('https://content-tooling.spotifycdn.com/images/af63e367-ad10-4063-a8e2-5a50ae2a4b28_lie_circles-mobile.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
