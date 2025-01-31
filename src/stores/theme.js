import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: localStorage.getItem("theme") || "dark",
  }),

  actions: {
    toggleTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
      this.applyTheme();
    },

    applyTheme() {
      document.documentElement.className = this.theme;
      localStorage.setItem("theme", this.theme);
    },

    initTheme() {
      this.applyTheme();
    },
  },

  persist: true,
});
