import {
  DashboardOutlined,
  LockOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Flex, Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import generateSidebarMenu from "../../utils/generateSidebarMenu";
import {
  ADMIN_ROUTES,
  DONOR_ROUTES,
  FINDER_ROUTES,
  SUPER_ADMIN_ROUTES,
} from "../../constants/RoleBaseRoutes";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const menuItems = [
  {
    key: "Dashboard",
    label: <Link to="/dashboard">Dashboard</Link>,
    icon: <DashboardOutlined />,
  },
  ...generateSidebarMenu(ADMIN_ROUTES),
  {
    key: "Change Password",
    label: <Link to="/dashboard/change-password">Change Password</Link>,
    icon: <LockOutlined />,
  },
];

const SideBar = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

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
        }}
      >
        <Header style={{ padding: 0 }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
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
            defaultSelectedKeys={["Dashboard"]}
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
                label: <span style={{ color: "red" }}>LogOut</span>,
              },
            ]}
          />
        </Flex>
      </Sider>
    </>
  );
};

export default SideBar;
