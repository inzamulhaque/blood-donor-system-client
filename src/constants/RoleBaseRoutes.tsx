import {
  AppstoreAddOutlined,
  ArrowsAltOutlined,
  DashboardOutlined,
  SearchOutlined,
  TeamOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import type { ReactNode } from "react";
import UserData from "../pages/Admin/UserData";
import AdminDashboard from "../components/dashboard/admin/AdminDashboard";
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
    link: "/admin/dashboard",
    name: "Dashboard",
    icon: <DashboardOutlined />,
    element: <AdminDashboard />,
  },

  {
    path: "admin/users",
    link: "/admin/dashboard/users",
    name: "Users",
    icon: <TeamOutlined />,
    element: <UserData />,
  },

  {
    path: "admin/donors",
    link: "/admin/dashboard/donors",
    name: "Donors",
    icon: <UserSwitchOutlined />,
    element: <Dashboard />,
  },

  {
    path: "admin/add-donor",
    link: "/admin/dashboard/add-donor",
    name: "Add Donor",
    icon: <UserAddOutlined />,
    element: <Dashboard />,
  },

  {
    path: "admin/block-user/:trackingNumber",
    link: "/admin/dashboard/block-user/:trackingNumber",
    element: <Dashboard />,
  },
];

export const SUPER_ADMIN_ROUTES: TRoleBaseRoute[] = [
  ...ADMIN_ROUTES,
  {
    path: "super-admin/make-admin",
    link: "/super-admin/dashboard/make-admin",
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
