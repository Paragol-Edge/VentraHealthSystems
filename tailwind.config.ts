import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",       
        paper: "#F5F5F3",     
        offwhite: "#FFFFFF",  
        steel: "#6B6B6B",    
        brass: "#0A0A0A",     
      },
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