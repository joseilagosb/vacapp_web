import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
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
  darkMode: ["selector", '[data-theme="dark"]'],
  plugins: [
    require("tailwindcss/plugin")((api: PluginAPI) => {
      api.addVariant("search-cancel", "&::-webkit-search-cancel-button");
    }),
  ],
};
export default config;
