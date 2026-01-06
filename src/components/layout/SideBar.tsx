import {
  DashboardOutlined,
  LockOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Flex, Grid, Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import generateSidebarMenu from "../../utils/generateSidebarMenu";
import {
  ADMIN_ROUTES,
  DONOR_ROUTES,
  FINDER_ROUTES,
  SUPER_ADMIN_ROUTES,
} from "../../constants/RoleBaseRoutes";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";

const { Sider } = Layout;

const menuItems = [
  ...generateSidebarMenu(ADMIN_ROUTES),
  {
    key: "change-password",
    label: <Link to="/dashboard/change-password">Change Password</Link>,
    icon: <LockOutlined />,
  },
];

const { useBreakpoint } = Grid;

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname.split("/").pop();

  const screens = useBreakpoint();

  const [isCollapsed, setIsCollapsed] = useState<boolean | null>(null);

  const collapsed = isCollapsed !== null ? isCollapsed : !screens.md;

  const dispatch = useAppDispatch();

  const haldeSignOut = () => {
    dispatch(logout());
    navigate("/signin");

    toast.success("You have been securely logged out of your account!", {
      duration: 5000,
      position: "top-right",
    });
  };

  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          height: "100vh",
          position: "sticky",
          left: 0,
          top: 0,
          zIndex: 2,
        }}
      >
        <Header style={{ padding: 0 }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setIsCollapsed(!collapsed)}
            style={{
              fontSize: 16,
              width: 64,
              height: 64,
              color: "white",
            }}
          />
        </Header>

        <Flex vertical={true} style={{ height: "85vh" }}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[path as string]}
            items={menuItems}
            style={{ flex: 1 }}
          />

          <Menu
            theme="dark"
            mode="inline"
            selectable={false}
            items={[
              {
                key: "logout",
                icon: <LogoutOutlined style={{ color: "red" }} />,
                label: (
                  <span style={{ color: "red" }} onClick={haldeSignOut}>
                    LogOut
                  </span>
                ),
              },
            ]}
          />
        </Flex>
      </Sider>
    </>
  );
};

export default SideBar;
