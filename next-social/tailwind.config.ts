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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
        '50': '#f0fafb',
        '100': '#daf1f3',
        '200': '#b8e4e9',
        '300': '#88cfd8',
        '400': '#50b1c0',
        '500': '#3aa6b9',
        '600': '#2e7a8c',
        '700': '#2b6373',
        '800': '#2a5360',
        '900': '#274652',
        '950': '#152d37',
    },
    
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
