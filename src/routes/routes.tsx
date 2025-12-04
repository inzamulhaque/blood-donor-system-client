import { createBrowserRouter } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import MainLayout from "../components/layout/MainLayout";

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
    ],
  },
]);

export default router;
