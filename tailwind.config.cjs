/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
		colors: {
			white: '#fafafa',
			black: '#1a1a1a',
			gray: '#cccccc',
			grayer: '#dddddd',
		},
		fontFamily: {
			zenkaku: ['Zen Kaku Gothic New', 'sans-serif'],
		},
	},
	darkMode: 'class',
}
