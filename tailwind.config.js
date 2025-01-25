/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        text: "var(--text)",
        input: {
          bg: "var(--input-bg)",
          text: "var(--input-text)",
          border: "var(--input-border)",
          focus: "var(--input-focus)",
          error: "var(--input-error)",
        },
        button: {
          primary: {
            bg: "var(--button-primary-background)",
            text: "var(--button-primary-text)",
            hover: "var(--button-primary-hover)",
          },
          secondary: {
            bg: "var(--button-secondary-background)",
            text: "var(--button-secondary-text)",
            hover: "var(--button-secondary-hover)",
          },
          danger: {
            bg: "var(--button-danger-background)",
            text: "var(--button-danger-text)",
            hover: "var(--button-danger-hover)",
          },
        },
      },
    },
  },
  plugins: [],
};
