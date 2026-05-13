import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        clay: {
          50: '#FBF5EB',
          100: '#F4EDE0',
          200: '#EAD9C0',
          300: '#DCBF99',
          500: '#C75B39',
          600: '#B14E2F',
          700: '#923F26',
        },
        olive: {
          400: '#7A8B4E',
          500: '#5E6B3C',
          600: '#4D5830',
        },
        bark: {
          500: '#6B4F36',
          700: '#5A3D24',
          900: '#3F2C1D',
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
