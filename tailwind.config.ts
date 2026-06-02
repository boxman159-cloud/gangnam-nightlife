import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#FF2D78',
          purple: '#BF00FF',
          cyan: '#00F5FF',
          gold: '#FFD700',
        },
        dark: {
          900: '#050508',
          800: '#0A0A12',
          700: '#0F0F1A',
          600: '#16161F',
          500: '#1E1E2E',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 45, 120, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 45, 120, 0.9), 0 0 80px rgba(191, 0, 255, 0.3)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #FF2D78 0%, #BF00FF 50%, #00F5FF 100%)',
        'dark-gradient': 'linear-gradient(180deg, #050508 0%, #0F0F1A 100%)',
      },
    },
  },
  plugins: [],
}
export default config
