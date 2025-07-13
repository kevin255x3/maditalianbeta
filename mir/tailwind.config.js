/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '768px',   // iPad Mini, Air (Portrait)
        'tablet-lg': '1024px', // iPad Pro (Portrait) & larger tablets
        'desktop': '1280px', // True desktop experience
      },
    },
  },
  plugins: [],
}