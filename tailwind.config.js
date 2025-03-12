module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        petrel: "#75b3f0",
        background: "#E0DEDA",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
  daisyui: {
    themes: ["light"], 
  },
};