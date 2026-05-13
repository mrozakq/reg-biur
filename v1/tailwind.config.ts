import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A1530',
          800: '#0F1E3D',
          700: '#1B2C52',
          500: '#2E4A7E',
          200: '#A8B5CD',
        },
        cream: {
          50: '#FAF7F2',
          100: '#F4EFE7',
          200: '#E9E1D2',
          300: '#D6C9AE',
        },
        gold: {
          500: '#B68A3E',
          600: '#9E7530',
          700: '#856228',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
