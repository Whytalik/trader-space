import { navigationConfig } from "@/router/navigation";
import { formatComponentName } from "@/utils/formatters";

const formatRouteName = (name) => name.toLowerCase().replace(/\s+/g, "-");

const createRoute = (path, name, componentPath, title) => ({
  path,
  name,
  component: () => import(componentPath),
  meta: {
    requiresAuth: true,
    title,
  },
});

export const generateBaseRoutes = () => {
  const routes = [];

  navigationConfig.forEach((group) => {
    group.items.forEach((item) => {
      routes.push(
        createRoute(
          item.path,
          formatRouteName(item.name),
          `@/views/${formatComponentName(item.name)}.vue`,
          `${item.name} | Trader Space`
        )
      );
    });
  });

  routes.push(
    createRoute(
      "/trades/form/:id?",
      "TradeForm",
      "@/views/TradeFormView.vue",
      (route) =>
        route.params.id
          ? `Edit Trade #${route.params.id} | Trader Space`
          : "Add Trade | Trader Space"
    ),
    createRoute(
      "/routines/form/:id?",
      "RoutineForm",
      "@/views/RoutineFormView.vue",
      (route) =>
        route.params.id
          ? `Edit Routine #${route.params.id} | Trader Space`
          : "Add Routine | Trader Space"
    )
  );

  return routes;
};
