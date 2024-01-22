import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        figtree: ['var(--font-figtree)', 'sans-serif'],
      },
      colors: {
        'blue-violet': {
          // #5d53ea https://uicolors.app/create
          '50': 'hsl(226, 100%, 97%)',
          '100': 'hsl(225, 100%, 94%)',
          '200': 'hsl(229, 100%, 89%)',
          '300': 'hsl(230, 98%, 82%)',
          '400': 'hsl(235, 92%, 74%)',
          '500': 'hsl(239, 87%, 67%)',
          '600': 'hsl(244, 78%, 62%)',
          '700': 'hsl(245, 60%, 51%)',
          '800': 'hsl(244, 56%, 41%)',
          '900': 'hsl(243, 50%, 34%)',
          '950': 'hsl(244, 49%, 20%)',
        },
        white: {
          '900': 'hsl(var(--white-900))',
          '800': 'hsl(var(--white-800))',
          '500': 'hsl(var(--white-500))',
        },
        black: {
          DEFAULT: 'hsl(0, 0%, 0%)',
          '200': 'hsl(var(--black-200))',
          '300': 'hsl(var(--black-300))',
          '400': 'hsl(var(--black-400))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          dark: 'hsl(var(--primary-dark))',
        },
        secondary: 'hsl(35, 100%, 69%)',
      },
    },
  },
  plugins: [],
};
export default config;
