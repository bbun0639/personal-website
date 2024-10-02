import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        highlight: "var(--highlight)",
      },
      fontWeight: {
        400: "400",
        500: "500",
        600: "600",
        700: "700",
      },
      fontSize: {
        12: ["0.75rem", "1.125rem"],
        14: ["0.875rem", "1.25rem"],
        16: ["1rem", "1.5rem"],
        18: ["1.125rem", "1.75rem"],
        20: ["1.25rem", "1.875rem"],
        24: ["1.5rem", "2rem"],
        30: ["1.875rem", "2.375rem"],
        36: [
          "2.25rem",
          {
            lineHeight: "2.75rem",
            letterSpacing: "-2%",
          },
        ],
        48: [
          "3rem",
          {
            lineHeight: "3.75rem",
            letterSpacing: "-2%",
          },
        ],
        60: [
          "3.75rem",
          {
            lineHeight: "4.5rem",
            letterSpacing: "-2%",
          },
        ],
        72: [
          "4.5rem",

          {
            lineHeight: "5.625",
            letterSpacing: "-2%",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
