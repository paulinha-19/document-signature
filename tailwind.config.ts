import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8F7EC',
          100: '#D1F0D9',
          200: '#A3E1B3',
          300: '#75D28D',
          400: '#47C367',
          500: '#30A949', // base color
          600: '#268739',
          700: '#1C652A',
          800: '#13431C',
          900: '#09220E',
        },
        secondary: {
          50: '#F2E8F7',
          100: '#E5D1F0',
          200: '#CBA3E1',
          300: '#B175D2',
          400: '#9747C3',
          500: '#592084', // base color
          600: '#471A6A',
          700: '#35134F',
          800: '#240D35',
          900: '#12061A',
        },
      },
    },
  },
  plugins: [],
};
export default config;
