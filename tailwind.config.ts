import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        "moody-blue": "#021B79",
        "electric-blue": "#0B84FF",
        silver: "#C0C0C0",
        white: "#FFFFFF",
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        raleway: ["var(--font-raleway)", "sans-serif"],
      },
      boxShadow: {
        "glow-electric": "0 0 20px rgba(11, 132, 255, 0.5), 0 0 40px rgba(11, 132, 255, 0.2)",
        "glow-electric-lg": "0 0 40px rgba(11, 132, 255, 0.8), 0 0 80px rgba(2, 27, 121, 0.4)",
      },
      animation: {
        "flame-pulse": "flamePulse 3s ease-in-out infinite",
        "rise-up": "riseUp 1s ease-out backwards",
        "phoenix-fly": "phoenixFly 2.5s ease-in-out forwards",
      },
      keyframes: {
        flamePulse: {
          "0%, 100%": { textShadow: "0 0 10px rgba(11, 132, 255, 0.5), 0 0 20px rgba(2, 27, 121, 0.3)" },
          "50%": { textShadow: "0 0 20px rgba(11, 132, 255, 0.8), 0 0 40px rgba(2, 27, 121, 0.6), 0 0 60px rgba(11, 132, 255, 0.4)" },
        },
        riseUp: {
          from: { opacity: "0", transform: "translateY(60px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        phoenixFly: {
          "0%": { transform: "translateX(-100vw) translateY(0) scaleX(-1)", opacity: "0" },
          "10%": { opacity: "1" },
          "50%": { transform: "translateX(50vw) translateY(-100px) scaleX(-1)" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateX(100vw) translateY(0) scaleX(-1)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
