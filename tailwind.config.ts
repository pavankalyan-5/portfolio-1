import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "var(--void)",
        panel: "var(--panel)",
        "panel-2": "var(--panel-2)",
        line: "var(--line)",
        "line-hi": "var(--line-hi)",
        text: "var(--text)",
        dim: "var(--dim)",
        faint: "var(--faint)",
        signal: "var(--signal)",
        meter: "var(--meter)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        shell: "1200px",
        prose: "66ch",
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        morph: "morph 26s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
