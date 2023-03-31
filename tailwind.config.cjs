/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        blink: "blink 0.8s infinite",
      },
      keyframes: {
        blink: {
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
