import { createBrowserRouter } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import MainLayout from "../components/layout/MainLayout";
import NotFound from "../NotFound";
import OurTeam from "../pages/OurTeam";
import Contact from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";
import SignIn from "../pages/AuthPagaes/SignIn";
import SignUp from "../pages/AuthPagaes/SignUp";
import WithDashboardLayout from "../components/layout/WithDashboardLayout";
import generateRouterRoutes from "../utils/generateRouterRoutes";
import {
  ADMIN_ROUTES,
  DONOR_ROUTES,
  FINDER_ROUTES,
  SUPER_ADMIN_ROUTES,
} from "./RoleBaseRoutes";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import { Roles } from "../constants/userConstant";
import PublicRoute from "../components/layout/PublicRoute";
import VerifyEmail from "../pages/AuthPagaes/VerifyEmail";
import ForgotPassword from "../pages/AuthPagaes/ForgotPassword";
import ResetPassword from "../pages/AuthPagaes/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/our-team",
        element: <OurTeam />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms",
        element: <TermsOfService />,
      },
    ],
  },

  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoute role={Roles.ADMIN}>
        <WithDashboardLayout />
      </ProtectedRoute>
    ),

    children: generateRouterRoutes(ADMIN_ROUTES),
  },

  {
    path: "/super-admin/dashboard",
    element: (
      <ProtectedRoute role={Roles.SUPER_ADMIN}>
        <WithDashboardLayout />
      </ProtectedRoute>
    ),

    children: generateRouterRoutes(SUPER_ADMIN_ROUTES),
  },

  {
    path: "/donor/dashboard",
    element: (
      <ProtectedRoute role={Roles.DONOR}>
        <WithDashboardLayout />
      </ProtectedRoute>
    ),

    children: generateRouterRoutes(DONOR_ROUTES),
  },

  {
    path: "/finder/dashboard",
    element: (
      <ProtectedRoute role={Roles.FINDER}>
        <WithDashboardLayout />
      </ProtectedRoute>
    ),

    children: generateRouterRoutes(FINDER_ROUTES),
  },

  {
    path: "/signin",
    element: (
      <PublicRoute>
        <SignIn />
      </PublicRoute>
    ),
  },

  {
    path: "/signup",
    element: (
      <PublicRoute>
        <SignUp />
      </PublicRoute>
    ),
  },

  {
    path: "/forget-password",
    element: (
      <PublicRoute>
        <ForgotPassword />
      </PublicRoute>
    ),
  },

  {
    path: "/reset-password",
    element: (
      <PublicRoute>
        <ResetPassword />
      </PublicRoute>
    ),
  },

  {
    path: "/verify-email",
    element: (
      <PublicRoute>
        <VerifyEmail />
      </PublicRoute>
    ),
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
