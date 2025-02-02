import { defineStore } from "pinia";
import usersData from "../data/users.json";
import { useAuthStore } from "./auth";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: usersData,
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  }),

  getters: {
    isUserLoggedIn: (state) => state.currentUser !== null,
  },

  actions: {
    setCurrentUser(user) {
      this.currentUser = user;
      localStorage.setItem("currentUser", JSON.stringify(user));
    },

    registerUser(userData) {
      this.users.push(userData);
      localStorage.setItem("users", JSON.stringify(this.users));
    },

    findUser(email, password) {
      return this.users.find(
        (user) => user.email === email && user.password === password
      );
    },

    signIn(email, password) {
      const user = this.findUser(email, password);
      if (user) {
        this.setCurrentUser(user);
        const authStore = useAuthStore();
        authStore.setAuthenticationStatus(true);
      } else {
        alert("Invalid credentials");
      }
    },

    signUp(userData) {
      const existingUser = this.users.find(
        (user) => user.email === userData.email
      );
      if (existingUser) {
        alert("User already exists");
      } else {
        this.registerUser(userData);
      }
    },

    updateAvatar(avatar) {
      if (this.currentUser) {
        this.currentUser.avatar = avatar;
        localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
      }
    },

    logout() {
      this.currentUser = null;
      localStorage.removeItem("currentUser");
      const authStore = useAuthStore();
      authStore.setAuthenticationStatus(false);
    },
  },
});
