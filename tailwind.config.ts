import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["DM Serif Display", "serif"],
        mono: ["DM Mono", "monospace"],
      },
      colors: {
        accent: {
          DEFAULT: "#2563eb",
          dark: "#60a5fa",
        },
      },
      animation: {
        "card-in": "cardIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s forwards",
        "name-in": "nameIn 0.5s ease 0.5s forwards",
        "fade-up": "fadeUp 0.6s ease 1.2s forwards",
        "pulse-dot": "pulseDot 2s infinite",
        "scroll-down": "scrollDown 1.5s ease infinite",
        "marquee": "marquee 25s linear infinite",
        "marquee-reverse": "marquee 25s linear infinite reverse",
      },
      keyframes: {
        cardIn: {
          to: { opacity: "1", transform: "scale(1)" },
        },
        nameIn: {
          to: { opacity: "1", transform: "none" },
        },
        fadeUp: {
          to: { opacity: "1" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        scrollDown: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(8px)", opacity: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
