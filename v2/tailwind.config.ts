import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050505',
          900: '#0A0A0A',
          800: '#171717',
          700: '#262626',
          500: '#737373',
          300: '#A3A3A3',
          200: '#D4D4D4',
          100: '#F5F5F5',
          50: '#FAFAFA',
        },
        accent: {
          500: '#0FBA81',
          600: '#0EA873',
          700: '#0B8A5E',
          100: '#D1FAE5',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
