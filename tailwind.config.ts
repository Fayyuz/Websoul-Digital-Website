import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-space)", "sans-serif"],
      },
      colors: {
        brand: {
          midnight: "#0a0a0f",
          navy: "#151a23",
          slate: "#5e6d85",
          "slate-light": "#94a3b8",
          surface: "#f8fafc",
        }
      },
    },
  },
  plugins: [],
};
export default config;
