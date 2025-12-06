import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { AnimatePresence } from "framer-motion";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
    </>
  );
};

export default MainLayout;
