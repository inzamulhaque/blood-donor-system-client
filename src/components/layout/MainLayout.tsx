import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import Footer from "../shared/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default MainLayout;
