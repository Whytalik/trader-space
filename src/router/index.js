import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { authGuard } from "./middleware";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  authGuard(to, from, next);
});

export default router;
