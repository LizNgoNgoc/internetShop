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
        'overlayImg-bg': "url('/public/images/range/Overlay.png')",
        'shareBtn-bg': "url('/public/images/range/shareBtn.png')",
        'compareBtn-bg': "url('/public/images/range/compareBtn.png')",
        'likeBtn-bg': "url('/public/images/range/LikeBtn.png')",
        'addToCard-bg' : "url('/public/images/modal/plus.png')",
        'deleteToCard-bg' : "url('/public/images/modal/minus-sign.png')",
      },
    },
  },
  plugins: [],
}

