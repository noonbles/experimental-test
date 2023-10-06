/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'discordBg': "url('./imgs/Background.png')",
        'gamebot': "url('./imgs/gamebot.png')",
        // 'mhw': "url('./imgs/mhw_bg.jpeg')"
      },

      colors: {
        dGrey: {
          100: '#16181d',
          200: '#1c1f26',
        },
      }


    },
  },
  plugins: [],
}

