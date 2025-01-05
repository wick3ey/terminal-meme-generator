import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: "#000000",
          text: "#00ff00",
          dim: "#004400",
          highlight: "#00ff44"
        }
      },
      fontFamily: {
        mono: ["IBM Plex Mono", "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" }
        },
        "type-text": {
          "0%": { width: "0" },
          "100%": { width: "100%" }
        }
      },
      animation: {
        blink: "blink 1s step-start infinite",
        "type-text": "type-text 2s steps(40, end)"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;