module.exports = {
  content: [
    "src/app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plover: {
          DEFAULT: '#75b3f0',
          hover: '#a7d1fa',
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"], 
  },
};
