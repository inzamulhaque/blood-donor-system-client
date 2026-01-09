import type React from "react";
import type { TRoleBaseRoute } from "../routes/RoleBaseRoutes";
import { Link } from "react-router-dom";

const generateSidebarMenu = (items: TRoleBaseRoute[]) => {
  return items
    .filter((item) => item.link && item.name && item.icon)
    .map((item) => ({
      key: item.name?.toLowerCase().trim().replace(/\s+/g, "-") as string,
      icon: item.icon as React.ReactNode,
      label: <Link to={item.link as string}>{item.name}</Link>,
    }));
};

export default generateSidebarMenu;
