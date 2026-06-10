import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Vazirmatn", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(0,0,0,.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;
