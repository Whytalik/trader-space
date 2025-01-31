import { useAuthStore } from "../stores/auth";

export const authGuard = (to, _from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: "auth", query: { type: "login" } });
  } else {
    next();
  }
};
