import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
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
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Header style={{ padding: 0 }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
      </Sider>
    </>
  );
};

export default SideBar;
