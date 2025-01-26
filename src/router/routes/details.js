export const generateDetailRoutes = () => [
  {
    path: "/routines/add",
    name: "add-routine",
    //component: () => import("../../views/AddRoutineView.vue"),
    meta: {
      requiresAuth: true,
      title: "Add Routine | Trader Space",
    },
  },
  {
    path: "/trades/add",
    name: "add-trade",
    //component: () => import("../../views/AddTradeView.vue"),
    meta: {
      requiresAuth: true,
      title: "Add Trade | Trader Space",
    },
  },
  {
    path: "/routines/:id/edit",
    name: "edit-routine",
    //component: () => import("../../views/EditRoutineView.vue"),
    meta: {
      requiresAuth: true,
      title: (route) => `Edit Routine #${route.params.id} | Trader Space`,
    },
  },
  {
    path: "/trades/:id/edit",
    name: "edit-trade",
    //component: () => import("../../views/EditTradeView.vue"),
    meta: {
      requiresAuth: true,
      title: (route) => `Edit Trade #${route.params.id} | Trader Space`,
    },
  },
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
];
