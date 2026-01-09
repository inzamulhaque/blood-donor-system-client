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
import Dashboard from "../components/dashboard/Dashboard";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import { Roles } from "../constants/userConstant";

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

    children: generateRouterRoutes([...ADMIN_ROUTES]),
  },

  {
    path: "/dashboard/change-password",
    element: (
      <>
        <h1>change password</h1>
      </>
    ),
  },

  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
