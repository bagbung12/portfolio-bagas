/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#060911",
        bgElevated: "#0b0f1a",
        bgCard: "#0f1524",
        bgCardHover: "#141c30",
        borderDark: "#1c2436",
        borderSoft: "#25314a",
        primaryBlue: "#3b82f6",
        accentBlue: "#60a5fa",
        softBlue: "#93c5fd",
        textMain: "#eef1f8",
        textMuted: "#94a3b8",
        textDim: "#64748b",
        goldAccent: "#f59e0b",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(59, 130, 246, 0.4)',
        'glow-cyan': '0 0 25px -5px rgba(56, 189, 248, 0.4)',
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.4)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s infinite cubic-bezier(0.4, 0, 0.6, 1)',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
