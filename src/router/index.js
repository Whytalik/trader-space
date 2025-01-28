import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { setDocumentTitle, authGuard } from "./middleware";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  setDocumentTitle(to);
  authGuard(to, from, next);
});

export default router;
