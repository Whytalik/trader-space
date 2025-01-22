import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    setAuthenticationStatus(status) {
      this.isAuthenticated = status;
    },
    toggleAuthenticationStatus() {
      this.isAuthenticated = !this.isAuthenticated;
    },
  },
});
