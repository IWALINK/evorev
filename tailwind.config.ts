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
        primary: "#00caa0",
        secondary: "#000000",
        background: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Saans", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "SFMono", "Monaco", "Menlo", "monospace"],
        decorative: ["var(--font-decorative)", "Honk Sans", "cursive"],
      },
      fontSize: {
        // Caption
        'caption': ['12px', { lineHeight: '16px' }],
        // Body Small
        'body-sm': ['14px', { lineHeight: '20px' }],
        // Body / Link
        'body': ['16px', { lineHeight: '24px' }],
        // Body Large
        'body-lg': ['18px', { lineHeight: '26px' }],
        // Subtitle Small
        'subtitle-sm': ['16px', { lineHeight: '22px' }],
        // Subtitle
        'subtitle': ['18px', { lineHeight: '24px' }],
        // Subtitle Large
        'subtitle-lg': ['20px', { lineHeight: '28px' }],
        // Title Small
        'title-sm': ['24px', { lineHeight: '32px' }],
        // Title
        'title': ['28px', { lineHeight: '36px' }],
        // Title Large
        'title-lg': ['32px', { lineHeight: '40px' }],
        // Keep standard sizes for compatibility
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '26px' }],
        'xl': ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['28px', { lineHeight: '36px' }],
        '4xl': ['32px', { lineHeight: '40px' }],
        '5xl': ['40px', { lineHeight: '48px' }],
        '6xl': ['48px', { lineHeight: '56px' }],
        '7xl': ['60px', { lineHeight: '68px' }],
        '8xl': ['72px', { lineHeight: '80px' }],
        '9xl': ['96px', { lineHeight: '104px' }],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "count-up": "countUp 2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        countUp: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

