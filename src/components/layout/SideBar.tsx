import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Flex, Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";

const { Sider } = Layout;

const menuItems = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "nav 1",
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: "nav 2",
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: "nav 3",
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
            defaultSelectedKeys={["1"]}
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
