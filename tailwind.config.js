/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0F14',
        secondary: '#1A2332',
        accent: '#00D4FF',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        'text-primary': '#F5F5F7',
        'text-secondary': '#A1A1A6',
        'text-tertiary': '#6B7280',
        'surface-base': '#0D1117',
        'surface-elevated': '#161B22',
        'surface-overlay': '#1F2937',
        'border-subtle': 'rgba(255, 255, 255, 0.08)',
        'border-default': 'rgba(255, 255, 255, 0.12)',
        'border-strong': 'rgba(255, 255, 255, 0.24)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Charter', 'Crimson Pro', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
