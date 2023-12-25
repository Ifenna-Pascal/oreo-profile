import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins`)"],
      },
      colors: {
        primary: {
          50: '#c6eaec',
          100: '#f96332',
          200: '#00cfd1',
          300: '#263238',
          400: '#26d962'
        },
        secondary: {
          // orange color
          50: '#f2a687',
          100: '#fc7545',
          200: '#a890d3'
        },
        gray: {
          100: '#dfe0e2',
          200: '#f5f5f5'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero_bg': 'url("/src/assets/images/banner-service.jpg")',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
