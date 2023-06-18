/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: '#ff4f5a',
            secondary: '#ff4f5a',
            accent: '#757575',
            neutral: '#3d4451',
            'base-100': '#ffffff'
          }
        },
        'dark',
        'cupcake'
      ]
    },
    extend: {}
  },
  plugins: [require('daisyui')]
};
