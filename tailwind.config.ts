import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/[slug]/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        md: '1.085rem',
      },
      fontFamily: {
        swim: ["switzer-med"],
        swir: ["switzer-reg"],
        paris: ["paris-reg"],
      },
      colors: {
        'dusk': {
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999',
          400: '#888',
          500: '#666',
          600: '#444',
          700: '#333',
          800: '#222',
          900: '#111',
        },
      },
      keyframes: {
        fadein: {
          from: { opacity: '0.015' },
          to: { opacity: '1' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: '0.2' },
          '20%': { opacity: '1' },
          '100% ': { opacity: '0.2' }
        }
      },
      animation: {
        fadeIn: 'fadein 1s ease-in-out',
        carousel: 'marquee 30s linear infinite',
        blink: 'blink 1.4s both infinite'
      }
    },
  },
  plugins: [],
};
export default config;
