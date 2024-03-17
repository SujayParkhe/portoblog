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
        'vanilla': '#FDF8F4',
        'azure': '#0C1D37',
        'mandarin': '#FF8008',
        'hoary': '#B7C1DB'
      },
    },
  },
  plugins: [],
};
export default config;
