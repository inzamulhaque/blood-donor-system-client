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
    path: "/dashboard",
    element: <WithDashboardLayout />,
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
