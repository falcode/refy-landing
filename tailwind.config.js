const { height } = require('./theme-extend-tailwind/theme.extend.height');
const { backgroundColor } = require('./theme-extend-tailwind/theme.extend.backgroundColor');

module.exports = {
  content: [
    './pages/**/*.{html,js,tsx}',
    './components/**/*.{html,js,tsx}',
  ],
  theme: {
    extend: {
      height,
      backgroundColor,
    },
  },
  plugins: [],
}
