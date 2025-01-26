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
        component: () => import(`../views/${item.name}View.vue`),
        meta: {
          requiresAuth: true,
          title: `${item.name} | Trader Space`,
        },
      });
    });
  });

  routes.push({
    path: "/trades/add",
    name: "trades.add",
    //component: () => import("../views/trades/AddView.vue"),
    meta: {
      requiresAuth: true,
      title: "Add Trade | Trader Space",
    },
  });

  routes.push({
    path: "/trades/analysis",
    name: "trades.analysis",
    //component: () => import("../views/trades/AnalysisView.vue"),
    meta: {
      requiresAuth: true,
      title: "Trade Analysis | Trader Space",
    },
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
  document.title = to.meta.title || "Trader Space";

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: "auth", query: { type: "login" } });
  } else {
    next();
  }
});

export default router;
