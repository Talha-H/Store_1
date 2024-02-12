import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-img": "url('/header.jpg')",
      },
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        blackish: "#1b1b1b",
        accent: "#FF8F9C",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
