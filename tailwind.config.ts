import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#0E1524", paper: "#EDEFEA", steel: "#3B4759", brass: "#C08A2E", redact: "#0A0A0A", offwhite: "#FAFAF8" },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      letterSpacing: { widest2: "0.28em" },
    },
  },
  plugins: [],
};

export default config;