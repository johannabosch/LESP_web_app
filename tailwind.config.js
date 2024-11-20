module.exports = {
  content: [
    "src/app/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        petrel: {
          DEFAULT: '#75b3f0',
          hover: '#a7d1fa',
        },
        background: '#E0DEDA',
      },
    },
  },
  plugins: [require('daisyui'), require('flowbite/plugin'),
  ],
  daisyui: {
    themes: ["light"], /* disabled dark theme so should work now when dark themes enabled" */
  },
};
