import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero_bg: "url('/public/bg.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            foreground: "#0E0E0E",
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#6020A0",
            },
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            primary: {
              500: "#005BC4",
              foreground: "#FFFFFF",
              DEFAULT: "#7828C8",
            },
          }, // dark theme colors
        },
      },
    }),
  ],
  darkMode: "class",
};
export default config;
