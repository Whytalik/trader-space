import { navigationConfig } from "@/router/navigation";
import { formatComponentName } from "../../utils/formatters";

const formatRouteName = (name) => name.toLowerCase().replace(/\s+/g, "-");

export const generateBaseRoutes = () => {
  const routes = [];

  navigationConfig.forEach((group) => {
    group.items.forEach((item) => {
      routes.push({
        path: item.path,
        name: formatRouteName(item.name),
        component: () =>
          import(`../../views/${formatComponentName(item.name)}.vue`),
        meta: {
          requiresAuth: true,
          title: `${item.name} | Trader Space`,
        },
      });
    });
  });

  return routes;
};
