/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      Poppins : 'Poppins'
    },
    extend: {
      backgroundImage: {
        'homePage-bg': "url('/public/images/home_page/Mask_Group.jpeg')",
      },
      overlayImage: {
        'overlayImg': "url('/public/images/range/Overlay.png')"
      }
    },
  },
  plugins: [],
}

