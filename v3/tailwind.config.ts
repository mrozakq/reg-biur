import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0A1530',
          900: '#15265E',
          800: '#1E3A6E',
          700: '#2D4D8C',
          500: '#4768A9',
          200: '#B8C5DE',
          100: '#DCE5F2',
          50: '#F2F6FB',
        },
        cyan: {
          700: '#1A7CAB',
          600: '#1F8FC1',
          500: '#29A5DD',
          400: '#5DBDE5',
          200: '#A8DBF0',
          100: '#D6EEF8',
          50: '#EEF8FD',
        },
        ink: {
          900: '#0F1A36',
          700: '#3A4660',
          500: '#6B7898',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
