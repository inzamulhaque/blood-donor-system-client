import {
  AppstoreAddOutlined,
  ArrowsAltOutlined,
  SearchOutlined,
  TeamOutlined,
  UnorderedListOutlined,
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
    path: "users",
    link: "/dashboard/users",
    name: "Users",
    icon: <TeamOutlined />,
    element: <Dashboard />,
  },

  {
    path: "donors",
    link: "/dashboard/donors",
    name: "Donors",
    icon: <UserSwitchOutlined />,
    element: <Dashboard />,
  },

  {
    path: "add-donor",
    link: "/dashboard/add-donor",
    name: "Add Donor",
    icon: <UserAddOutlined />,
    element: <Dashboard />,
  },

  {
    path: "block-user/:trackingNumber",
    link: "/dashboard/block-user/:trackingNumber",
    element: <Dashboard />,
  },
];

export const SUPER_ADMIN_ROUTES: TRoleBaseRoute[] = [
  ...ADMIN_ROUTES,
  {
    path: "make-admin",
    link: "/dashboard/make-admin",
    name: "Make Admin",
    icon: <UserAddOutlined />,
    element: <Dashboard />,
  },
];

export const DONOR_ROUTES: TRoleBaseRoute[] = [
  {
    path: "my-donation-list",
    link: "/dashboard/my-donation-list",
    name: "My Donation List",
    icon: <UnorderedListOutlined />,
    element: <Dashboard />,
  },

  {
    path: "add-new-donation",
    link: "/dashboard/add-new-donation",
    name: "Add New Donation",
    icon: <AppstoreAddOutlined />,
    element: <Dashboard />,
  },

  {
    path: "find-donor",
    link: "/dashboard/find-donor",
    name: "Find Donor",
    icon: <SearchOutlined />,
    element: <Dashboard />,
  },
];

export const FINDER_ROUTES: TRoleBaseRoute[] = [
  {
    path: "find-donor",
    link: "/dashboard/find-donor",
    name: "Find Donor",
    icon: <SearchOutlined />,
    element: <Dashboard />,
  },

  {
    path: "finder-to-donor",
    link: "/dashboard/finder-to-donor",
    name: "Became A Donor",
    icon: <ArrowsAltOutlined />,
    element: <Dashboard />,
  },
];
