import type { Config } from 'tailwindcss'
import constants from './data/constants.json'

// Helper function to convert pixels to rem
const pxToRem = (px: number, base = 16) => `${px / base}rem`;

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mobile: `${constants.breakpoints.mobile}px`,
      tablet: `${constants.breakpoints.tablet}px`,
      desktop: `${constants.breakpoints.desktop}px`,
    },
    extend: {
      colors: constants.tokens.colors,
      borderRadius: {
        ...Object.entries(constants.tokens.radius).reduce((acc, [key, value]) => {
          acc[key] = pxToRem(value);
          return acc;
        }, {} as Record<string, string>),
      },
      spacing: {
        ...Object.entries(constants.tokens.spacing).reduce((acc, [key, value]) => {
          acc[key] = pxToRem(value);
          return acc;
        }, {} as Record<string, string>),
      },
      fontSize: {
        ...Object.entries(constants.tokens.typography.ui.sizes).reduce((acc, [key, value]) => {
          acc[key] = pxToRem(value);
          return acc;
        }, {} as Record<string, string>),
      },
      fontFamily: {
        ui: [constants.tokens.typography.ui.family, 'sans-serif'],
      },
      gridColumn: {
        ...Array.from({ length: constants.grid.columns }, (_, i) => i + 1).reduce((acc, i) => {
          acc[`span-${i}`] = `span ${i} / span ${i}`;
          return acc;
        }, {} as Record<string, string>),
      },
      gridTemplateColumns: {
        ...Array.from({ length: constants.grid.columns }, (_, i) => i + 1).reduce((acc, i) => {
          acc[`${i}`] = `repeat(${i}, minmax(0, 1fr))`;
          return acc;
        }, {} as Record<string, string>),
      }
    },
  },
  plugins: [],
}
export default config
