import { AnimatePresence } from "motion/react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const WithDashboardLayout = () => {
  return (
    <>
      <SideBar />

      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
    </>
  );
};

export default WithDashboardLayout;
