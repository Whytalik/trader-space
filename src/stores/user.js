import { defineStore } from "pinia";
import users from "../data/users.json";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: users,
    currentUser: null,
  }),
  actions: {
    setCurrentUser(user) {
      this.currentUser = user;
      localStorage.setItem("currentUser", JSON.stringify(user));
    },
    registerUser(userData) {
      this.users.push(userData);
    },
    findUser(email, password) {
      return this.users.find(
        (user) => user.email === email && user.password === password
      );
    },
  },
});
