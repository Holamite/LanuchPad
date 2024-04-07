/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "contact-img": "url('/asset/contact.png')",
        "pad-hero": "url('/asset/dynamic-2-img.svg')",
        "create-hero": "url('/asset/dynamic-img.svg')",
      },
      fontFamily: {
        space: [`var(--font-space)`],
        hanken: [`var(--font-hanken)`],
        playfair: [`var(--font-playfair)`],
      },
      colors: {
        hero: "#121212",
        "font-color": "#B0B0B0",
        "spi-blue": "#ade2ffc7",
        "spi-pink": "#ffadd5c5",
        "spi-purple": "#e16affb9",
        "spi-pink-2": "#E32882",
        "spi-blue-2": "#2C8BC0",
        "spi-purple-2": "#BB0CE7",
        "spi-pink-1": "#e32882a8",
        "spi-blue-1": "#2c8cc0ab",
        "spi-purple-1": "#bb0ce7a2",
        "pink-3": "#EBC0DB",
        "black-1": "#1B1B1B",
        "black-2": "#0C0C0C",
        "b-pink": "#ffadd59d",
        "b-blue": "#ade2ff9a",
        "b-purple": "#e16affb9",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
