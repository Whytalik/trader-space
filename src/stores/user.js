import { defineStore } from "pinia";
import users from "../data/users.json";
import { useAuthStore } from "./auth";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: users,
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  }),
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
      }
    },
    signUp(userData) {
      const existingUser = this.users.find(
        (user) => user.email === userData.email
      );

      existingUser ? alert("User already exists") : this.registerUser(userData);
    },
    updateAvatar(avatar) {
      if (this.currentUser) {
        this.currentUser.avatar = avatar;
        localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
      }
    },
  },
});
