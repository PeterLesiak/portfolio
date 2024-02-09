import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--clr-primary)',
      },
      backgroundImage: {
        gradient:
          'linear-gradient(45deg, rgba(252, 89, 89, 1) 0%, rgba(252, 200, 89, 1) 20%, rgba(134, 252, 89, 1) 40%, rgba(89, 252, 232, 1) 60%, rgba(100, 89, 252, 1) 80%, rgba(210, 89, 252, 1) 100%)',
      },
      animation: {
        gradient: 'gradient 10s ease-in-out infinite alternate',
        rotateForwards: 'rotateForwards 400ms ease-out forwards',
        rotateBackwards: 'rotateBackwards 400ms ease-out forwards',
      },
      keyframes: {
        gradient: {
          from: { backgroundPosition: '0% 50%' },
          to: { backgroundPosition: '100% 50%' },
        },
        blink: {},
        rotateForwards: {
          to: { transform: 'rotate(90deg)' },
        },
        rotateBackwards: {
          from: { transform: 'rotate(90deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
