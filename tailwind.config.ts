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
        primary: "rgb(var(--primary-color))",
        secondary: "rgb(var(--secondary-color))",
        tertiary: "rgb(var(--tertiary-color))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "18": "4.5rem",
        "192": "48rem",
        "384": "96rem",
      },
    },
  },
  darkMode: ["class", '[class="dark"]'],
  plugins: [],
};
export default config;
