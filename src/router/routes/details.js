export const generateDetailRoutes = () => [
  {
    path: "/routines/:id",
    name: "routine",
    component: () => import("@/components/routines/RoutineDetails.vue"),
    meta: {
      requiresAuth: true,
      title: (route) => `Routine #${route.params.id} | Trader Space`,
    },
  },
  {
    path: "/trades/:id",
    name: "trade",
    component: () => import("@/components/trades/TradeDetails.vue"),
    meta: {
      requiresAuth: true,
      title: (route) => `Trade #${route.params.id} | Trader Space`,
    },
  },
];
