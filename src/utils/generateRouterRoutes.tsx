import type { TRoleBaseRoute } from "../constants/RoleBaseRoutes";

const generateRouterRoutes = (routes: TRoleBaseRoute[]) => {
  return routes
    .filter((route) => route.element && (route.index === true || route.path))
    .map((route) => ({
      ...(route.index ? { index: true } : { path: route.path }),
      element: route.element,
    }));
};

export default generateRouterRoutes;
