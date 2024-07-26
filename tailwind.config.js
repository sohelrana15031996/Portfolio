/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'banner-pic': "url('/src/assets/Images/sohel_rana.jpg')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

