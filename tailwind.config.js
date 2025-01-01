/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        space: "url('/tornado-hurricane-from-space-picjombu-com.jpg')",
      },
    },
  },
  plugins: [],
};
