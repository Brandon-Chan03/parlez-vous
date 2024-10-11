/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-background": "var(--primary-background)",
        "secondary-background": "var(--secondary-background)",
        "primary-text": "var(--primary-text)",
        "primary-accent": "var(--primary-accent)",
        "secondary-accent": "var(--secondary-accent)",
        "alert": "var(--alert)",
      },
    },
  },
  plugins: [],
};
