export const isActiveRoute = (route, item) => {
  if (item.path === "/" && route.path !== "/" && route.path !== "") {
    return false;
  }

  if (route.path === item.path) {
    return true;
  }

  const regex = new RegExp(`^${item.path.replace(/:[^\s/]+/g, "[^/]+")}`);
  if (regex.test(route.path)) {
    return true;
  }

  if (item.children) {
    return item.children.some((child) => {
      return route.path.startsWith(child.path) || isActiveRoute(route, child);
    });
  }

  return false;
};
