import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        snow: "#fff6f7",
        white: "#fff",
        darkslateblue: {
          "100": "#6c4889",
          "200": "#7c3c75",
          "300": "#311041",
          "400": "#471360",
        },

        
        midnightblue: "#471360",
        slategray: "#796682",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
