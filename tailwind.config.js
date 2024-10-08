module.exports = {
  content: [
    "src/app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        petrel: {
          DEFAULT: '#7abde5',
          hover: '#4e9cc9',
        },
        plover: {
          DEFAULT: '#75b3f0',
          hover: '#a7d1fa',
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark"], 
  },
};
