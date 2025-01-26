import { useAuthStore } from "../stores/auth";

export const setDocumentTitle = (to) => {
  document.title =
    typeof to.meta.title === "function"
      ? to.meta.title(to)
      : to.meta.title || "Trader Space";
};

export const authGuard = (to, _from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: "auth", query: { type: "login" } });
  } else {
    next();
  }
};
