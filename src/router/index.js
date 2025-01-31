import { createRouter, createWebHistory } from "vue-router";
import { generateBaseRoutes } from "./routes/base";
import { generateDetailRoutes } from "./routes/details";
import { setDocumentTitle, authGuard } from "./middleware";

const routes = [...generateBaseRoutes(), ...generateDetailRoutes()];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  setDocumentTitle(to);
  authGuard(to, from, next);
});

export default router;
