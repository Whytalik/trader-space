export const generateDetailRoutes = () => [
  {
    path: "/routines/:id",
    name: "routine",
    component: () => import("../../components/routines/RoutineDetails.vue"),
    meta: {
      requiresAuth: true,
      title: (route) => `Routine #${route.params.id} | Trader Space`,
    },
  },
  {
    path: "/trades/:id",
    name: "trade",
    component: () => import("../../components/trades/TradeDetails.vue"),
    meta: {
      requiresAuth: true,
      title: (route) => `Trade #${route.params.id} | Trader Space`,
    },
  },
  {
    path: "/trades/form/:id?",
    name: "TradeForm",
    component: () => import("../../views/TradeFormView.vue"),
    meta: {
      requiresAuth: true,
      title: (route) =>
        route.params.id
          ? `Edit Trade #${route.params.id} | Trader Space`
          : "Add Trade | Trader Space",
    },
  },
  {
    path: "/routines/form/:id?",
    name: "RoutineForm",
    component: () => import("../../views/RoutineFormView.vue"),
    meta: {
      requiresAuth: true,
      title: (route) =>
        route.params.id
          ? `Edit Routine #${route.params.id} | Trader Space`
          : "Add Routine | Trader Space",
    },
  },
];
