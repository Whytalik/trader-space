import { defineStore } from "pinia";
import darkTheme from "../theme/dark";
import lightTheme from "../theme/light";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    currentTheme: darkTheme,
    themes: {
      dark: darkTheme,
      light: lightTheme,
    },
  }),
  actions: {
    toggleTheme() {
      this.currentTheme =
        this.currentTheme.name === "dark"
          ? this.themes.light
          : this.themes.dark;

      document.documentElement.className = this.currentTheme.name;
      this.applyTheme();
    },

    initTheme() {
      const savedTheme = localStorage.getItem("theme") || "dark";
      this.currentTheme = this.themes[savedTheme];

      document.documentElement.className = this.currentTheme.name;
      this.applyTheme();
    },

    applyTheme() {
      const root = document.documentElement;
      const setCssVariables = (obj, prefix = "") => {
        Object.entries(obj).forEach(([key, value]) => {
          if (typeof value === "object") {
            setCssVariables(value, `${prefix}${key}-`);
          } else {
            root.style.setProperty(`--${prefix}${key}`, value);
          }
        });
      };

      setCssVariables(this.currentTheme.colors);
      localStorage.setItem("theme", this.currentTheme.name);
    },
  },
});
