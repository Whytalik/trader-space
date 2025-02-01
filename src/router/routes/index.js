import { generateBaseRoutes } from "./base";
import { generateDetailRoutes } from "./details";
import AuthLayout from "@/components/auth/AuthLayout.vue";

export const routes = [
  ...generateBaseRoutes(),
  ...generateDetailRoutes(),
  {
    path: "/auth",
    name: "auth",
    component: AuthLayout,
    meta: { requiresAuth: false },
  },
];
