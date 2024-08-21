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

      borderRadius: {
        'pop-up-lm': '1.25rem',
        'pop-up-sm' : '0.625rem'
      },

      colors:{
        'pop-up-primary': '#22539F',
        'pop-up-secondary' : '#676767'
      },
      fontFamily: {
        'Montserrat': ['var(--font-montserrat)', 'sans-serif']
      },

    },
  },
  plugins: [],
};
export default config;
