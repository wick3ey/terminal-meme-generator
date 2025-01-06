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
        },
        fall: {
          "0%": { 
            transform: "translateY(-100%)",
            opacity: "1"
          },
          "100%": { 
            transform: "translateY(100vh)",
            opacity: "0"
          }
        },
        "fade-in": {
          "0%": { 
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": { 
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        pulse: {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)"
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(0.95)"
          }
        }
      },
      animation: {
        blink: "blink 1s step-start infinite",
        "type-text": "type-text 2s steps(40, end)",
        "fall": "fall 2s linear infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "pulse": "pulse 2s ease-in-out infinite"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;