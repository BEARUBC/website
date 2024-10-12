/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#152248",     // Dark blue
        secondary: "#3052a8",   // Medium blue
        ternary: "#7f99bf",     // Light blue
        background: "#ffffff",  // White
        foreground: "#000000",  // Black
        ubc: "#002145",         // Official UBC blue 
      },
    },
  },
  plugins: [],
};

export default config;