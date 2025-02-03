/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        text: "var(--text)",
      },
      fontSize: {
        header: "2rem",
        title: "1.5rem",
        subtitle: "1.25rem",
        body: "1rem",
        small: "0.875rem",
      },
    },
  },
  plugins: [],
};
