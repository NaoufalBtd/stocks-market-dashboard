import daisyui from 'daisyui';
// import prepline from 'prepline/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6363',
        'bg': {
          'level1': '#f8f8f8',
        }
    },
  },
  },

  plugins: [daisyui],
};

