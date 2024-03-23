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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "background-hover": "rgba(239, 243, 244, 0.1)",
        "border-color": "rgb(47, 51, 54)",
        "primary-color": "rgb(29, 155, 240)",
        "primary-color-hover": "rgb(26, 140, 216)",
        "secondary-color": "rgb(22, 24, 28);",
        "secondary-color-hover": "rgba(255, 255, 255, 0.03);",
      },
    },
  },
  plugins: [],
};
export default config;
