import { defineStore } from "pinia";
import "../theme/dark.css";
import "../theme/light.css";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: "dark",
  }),

  actions: {
    toggleTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
      document.documentElement.className = this.theme;
      localStorage.setItem("theme", this.theme);
    },

    initTheme() {
      this.theme = localStorage.getItem("theme") || "dark";
      document.documentElement.className = this.theme;
    },
  },
});
