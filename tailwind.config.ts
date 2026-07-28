import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          foreground: '#FFFFFF',
        },
        background: '#0B1120',
        card: '#1F2937',
        text: '#FFFFFF',
        muted: {
          DEFAULT: '#1F2937',
          foreground: '#D1D5DB',
        },
      },
    },
  },
  plugins: [],
};

export default config;
