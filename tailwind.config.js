module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "brand-yellow": "#FFFF00",
        "brand-color": "#000000",
        "brand-gray": "#697488",
        "gray-background": "#fafafa",
        "primary-brand-color-lights": "#f3f0fe",
        "primary-brand-color": "#5d3ebc",
        "primary-white": "#FFFFFF",
        "primary-green": "#1ed760",
        "secondary-brand-color": "#7849f7",
      },
      backgroundImage: (theme) => ({
        "mobile-app":
          "url('https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};