/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f6ff',
        'neon-pink': '#ff00e6',
      },
      boxShadow: {
        'neon': '0 0 10px #00f6ff, 0 0 20px #00f6ff, 0 0 40px #00f6ff',
      }
    }
  },
  plugins: [],
};
