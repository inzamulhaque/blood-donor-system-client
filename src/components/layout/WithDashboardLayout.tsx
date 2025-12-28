import { AnimatePresence } from "motion/react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import logo from "../../assets/al-dima-logo.png";

const WithDashboardLayout = () => {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar />

        <Layout>
          <Header
            style={{
              background: "#fff",
              paddingRight: "20px",
              boxShadow: "0 2px 8px #f0f1f2",
              textAlign: "right",
              position: "sticky",
              right: 0,
              top: 0,
              zIndex: 1,
            }}
          >
            <img
              src={logo}
              alt="Ihsan Al-Dima Logo"
              style={{ height: "40px", verticalAlign: "middle" }}
            />
          </Header>

          <AnimatePresence mode="wait">
            <Outlet />
          </AnimatePresence>
        </Layout>
      </Layout>
    </>
  );
};

export default WithDashboardLayout;
