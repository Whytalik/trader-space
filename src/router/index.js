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

router.addRoute({
  path: '/trades/form/:id?',
  name: 'TradeForm',
  component: () => import('@/views/TradeFormView.vue')
});

router.addRoute({
  path: '/routines/form/:id?',
  name: 'RoutineForm',
  component: () => import('@/views/RoutineFormView.vue')
});

export default router;
