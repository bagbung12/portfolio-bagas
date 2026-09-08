/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#060a12",        // Stitch deep dark canvas
        bgElevated: "#090f1c",    // Stitch container surface
        bgCard: "#0d1526",        // Stitch card surface
        bgCardHover: "#121b30",   // Stitch card hover
        borderDark: "#1e293b",    // Stitch border stroke
        borderSoft: "#2a3952",    // Stitch lighter border
        accentCyan: "#06b6d4",    // Stitch vibrant cyan
        accentCyanSoft: "#38bdf8",// Stitch cyan light
        accentBlue: "#3b82f6",    // Stitch blue
        accentIndigo: "#6366f1",  // Stitch indigo
        textMain: "#f8fafc",      // White main text
        textMuted: "#94a3b8",     // Slate text
        textDim: "#64748b",       // Darker slate text
        goldAccent: "#f59e0b",    // Amber accent
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'stitch-glow': '0 0 25px -5px rgba(6, 182, 212, 0.35)',
        'stitch-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
        'stitch-cyan': '0 0 15px rgba(6, 182, 212, 0.4)',
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
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
