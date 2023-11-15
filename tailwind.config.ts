import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,mdx,png}"
    // "./src/pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{html,js,ts,jsx,tsx,mdx}",
    // "./src/shared/**/*.{html,js,ts,jsx,tsx,mdx,png}",
    // "./src/features/**/*.{html,js,ts,jsx,tsx,mdx,png}",
    // "./src/app/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      green: {
        dark: "#5EAE53",
        light: "#AFD3AA",
        DEFAULT: "#5EAE53",
      },
      pink: "#EB8E78",
      white: "#ffffff",
      black: {
        dark: "#000000",
        light: "#333333",
        DEFAULT: "#000000",
      },
      orange: "#F6B76C",
      gray: "#F7F7F7",
    },
    fontFamily: {
      work: ['"Work Sans"', '"sans-serif"'],
      caveat: ['"Caveat"', '"cursive"'],
      dm: ['"DM Sans"', '"sans-serif"'],
    },
    fontSize: {
      xs: ["12px", "normal"],
      sm: ["14px", "32px"],
      base: ["16px", "32px"],
      lg: ["20px", "32px"],
      xl: ["24px", "32px"],
      "2xl": ["40px", "48px"],
      "3xl": ["56px", "64px"],
      "4xl": ["72px", "80px"],
    },
    borderRadius: {
      none: "0",
      sm: "0.5rem",
      md: "0.75rem",
      full: "9999px",
      DEFAULT: "0.5rem",
    },
    extend: {
      backgroundImage: {
        'hero': "url('/hero-background.png')",
        'hero-mobile': "url('/hero-background-mobile.png')",
        'iphone': "url('/iphone.png')",
      },
      boxShadow: {
        cardhover: "10px 20px 40px 0px rgba(97, 49, 0, 0.20)",
        inputShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        DEFAULT: "0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
      },
    },
  },
  plugins: [],
};
export default config;
