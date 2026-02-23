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
        background: "#0A0A0A",
        surface: "#1A1A1A",
        card: "#252525",
        border: "#3A3A3A",
        "border-input": "#404040",
        muted: "#A8A8A8",
        foreground: "#FAF9F6",
        accent: "#FAF9F6",
        "accent-hover": "#FFFFFF",
        "button-primary-bg": "#FAF9F6",
        "button-primary-text": "#0A0A0A",
        "button-secondary-border": "#505050",
        "button-secondary-hover": "#2A2A2A",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
