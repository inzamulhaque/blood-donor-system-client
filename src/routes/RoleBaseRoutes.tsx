import {
  AppstoreAddOutlined,
  ArrowsAltOutlined,
  CalendarOutlined,
  DashboardOutlined,
  LockOutlined,
  ProfileOutlined,
  SearchOutlined,
  TeamOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import type { ReactNode } from "react";

import AdminDashboard from "../pages/Admin/AdminDashboard";
import Dashboard from "../components/dashboard/Dashboard";
import FindDonor from "../pages/Admin/FindDonor";
import UserData from "../pages/Admin/UserData";
import UserDetails from "../pages/Admin/UserDetails";
import AddDonor from "../pages/Admin/AddDonor";
import ChangePassword from "../pages/AuthPagaes/ChangePassword";
import Profile from "../components/dashboard/CommonPage/Profile";
import EditProfile from "../components/dashboard/CommonPage/EditProfile";
import DonateDates from "../components/dashboard/CommonPage/DonateDates";
import MakeAdmin from "../pages/SuperAdmin/MakeAdmin";

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
    path: "profile",
    link: "/admin/dashboard/profile",
    name: "Profile",
    icon: <ProfileOutlined />,
    element: <Profile />,
  },

  {
    path: "profile/edit",
    element: <EditProfile />,
  },

  {
    path: "users",
    link: "/admin/dashboard/users",
    name: "Users",
    icon: <TeamOutlined />,
    element: <UserData />,
  },

  {
    path: "users/:trackingNumber",
    element: <UserDetails />,
  },

  {
    path: "donors",
    link: "/admin/dashboard/donors",
    name: "Find Donors",
    icon: <SearchOutlined />,
    element: <FindDonor />,
  },

  {
    path: "add-donor",
    link: "/admin/dashboard/add-donor",
    name: "Add Donor",
    icon: <UserAddOutlined />,
    element: <AddDonor />,
  },

  {
    path: "donate-dates",
    link: "/admin/dashboard/donate-dates",
    name: "Donate Dates",
    icon: <CalendarOutlined />,
    element: <DonateDates />,
  },

  {
    path: "change-password",
    link: "/admin/dashboard/change-password",
    name: "Change Password",
    icon: <LockOutlined />,
    element: <ChangePassword />,
  },

  {
    path: "block-user/:trackingNumber",
    link: "/admin/dashboard/block-user/:trackingNumber",
    element: <Dashboard />,
  },
];

export const SUPER_ADMIN_ROUTES: TRoleBaseRoute[] = [
  {
    index: true,
    link: "/super-admin/dashboard",
    name: "Dashboard",
    icon: <DashboardOutlined />,
    element: <AdminDashboard />,
  },

  {
    path: "profile",
    link: "/super-admin/dashboard/profile",
    name: "Profile",
    icon: <ProfileOutlined />,
    element: <Profile />,
  },

  {
    path: "profile/edit",
    element: <EditProfile />,
  },

  {
    path: "users",
    link: "/super-admin/dashboard/users",
    name: "Users",
    icon: <TeamOutlined />,
    element: <UserData />,
  },

  {
    path: "users/:trackingNumber",
    element: <UserDetails />,
  },

  {
    path: "donors",
    link: "/super-admin/dashboard/donors",
    name: "Find Donors",
    icon: <SearchOutlined />,
    element: <FindDonor />,
  },

  {
    path: "add-donor",
    link: "/super-admin/dashboard/add-donor",
    name: "Add Donor",
    icon: <UserAddOutlined />,
    element: <AddDonor />,
  },

  {
    path: "make-admin",
    link: "/super-admin/dashboard/make-admin",
    name: "Make Admin",
    icon: <UserAddOutlined />,
    element: <MakeAdmin />,
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
