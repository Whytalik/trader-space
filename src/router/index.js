import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "../components/auth/AuthLayout.vue";
import { useAuthStore } from "../stores/auth";
import { navigationConfig } from "../config/navigation";

const generateRoutes = () => {
  const routes = [];

  navigationConfig.forEach((group) => {
    group.items.forEach((item) => {
      routes.push({
        path: item.path,
        name: item.name.toLowerCase(),
        component: () =>
          import(`../views/${item.name.replace(/\s+/g, "")}View.vue`),
        meta: { requiresAuth: true },
      });
    });
  });

  return routes;
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...generateRoutes(),
    {
      path: "/auth",
      name: "auth",
      component: AuthLayout,
      meta: { requiresAuth: false },
    },
  ],
});

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: "auth", query: { type: "login" } });
  } else {
    next();
  }
});

export default router;
