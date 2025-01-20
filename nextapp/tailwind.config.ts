import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        barground: "var(--barground)",
        textcolor: "var(--textcolor)",
        bargroundhover: "var(--barground-hover)",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
} satisfies Config;
