import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#68956F",
          secondary: "#C5D3AD",
          accent: "#F39C57",
          neutral: "#6B755A",
          info: "#262626",
          "base-100": "#ffffff",
          dark: "#262626",
        },
      },
    ],
    logs: false,
  },
} satisfies Config;

export default config;
