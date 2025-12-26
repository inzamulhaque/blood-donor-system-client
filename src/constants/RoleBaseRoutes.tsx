import {
  DashboardOutlined,
  TeamOutlined,
  UserAddOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import type { ReactNode } from "react";
import Dashboard from "../components/dashboard/Dashboard";

export type TRoleBaseRoute = {
  path?: string;
  link?: string;
  index?: boolean;
  name?: string;
  icon?: ReactNode;
  element: ReactNode;
};

export const ADMIN_ROUTES: TRoleBaseRoute[] = [
  {
    index: true,
    link: "/dashboard",
    name: "Dashboard",
    icon: <DashboardOutlined />,
    element: <Dashboard />,
  },

  {
    path: "/users",
    link: "/dashboard/users",
    name: "Users",
    icon: <TeamOutlined />,
    element: <Dashboard />,
  },

  {
    path: "/donors",
    link: "/dashboard/donors",
    name: "Donors",
    icon: <UserSwitchOutlined />,
    element: <Dashboard />,
  },

  {
    path: "/add-donor",
    link: "/dashboard/add-donor",
    name: "Add Donor",
    icon: <UserAddOutlined />,
    element: <Dashboard />,
  },

  {
    path: "/block-user/:trackingNumber",
    link: "/dashboard/block-user/:trackingNumber",
    element: <Dashboard />,
  },
];

export const SUPER_ADMIN_ROUTES: TRoleBaseRoute[] = [
  ...ADMIN_ROUTES,
  {
    path: "/make-admin",
    link: "/dashboard/make-admin",
    name: "Make Admin",
    icon: <UserAddOutlined />,
    element: <Dashboard />,
  },
];
