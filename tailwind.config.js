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
        background: '#E0DEDA',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"], /* disabled dark theme so should work now when dark themes enabled" */
  },
};
