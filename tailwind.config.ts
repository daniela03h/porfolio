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
        ligh: 'rgb(var(--light))',
        lightRose: 'rgb(var(--light-rose))',
        lightPink: 'rgb(var(--light-pink))',
        darkRose: 'rgb(var(--dark-rose))',
        brown: 'rgb(var(--brown))',
        dark: 'rgb(var(--dark))',
      },
    },
  },
  plugins: [],
};
export default config;
