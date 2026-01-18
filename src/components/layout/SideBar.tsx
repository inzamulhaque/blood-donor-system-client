import {
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
} from "../../routes/RoleBaseRoutes";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";
import { useSignOutMutation } from "../../redux/features/auth/authApi";
import Loader from "../shared/Loader";

const { Sider } = Layout;

const { useBreakpoint } = Grid;

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname.split("/").pop();

  const screens = useBreakpoint();

  const [isCollapsed, setIsCollapsed] = useState<boolean | null>(null);

  const [signOut, { isLoading }] = useSignOutMutation();
  const dispatch = useAppDispatch();

  const menuItems = generateSidebarMenu(SUPER_ADMIN_ROUTES);

  const collapsed = isCollapsed !== null ? isCollapsed : !screens.md;

  const haldeSignOut = async () => {
    try {
      dispatch(logout());
      navigate("/signin");

      const res = await signOut({}).unwrap();

      console.log(res);

      toast.success(res?.message, {
        duration: 5000,
        position: "top-right",
      });
    } catch (error) {
      const errs: Record<string, unknown>[] = error?.data?.errorSources;

      if (Array.isArray(errs)) {
        errs.forEach((err) => {
          toast.error(err.message as string, {
            duration: 5000,
            position: "top-right",
          });
        });
      }
    }
  };

  if (isLoading) {
    return <Loader />;
  }

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
          zIndex: 10,
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
                icon: (
                  <span style={{ color: "red" }} onClick={haldeSignOut}>
                    <LogoutOutlined style={{ color: "red" }} />
                  </span>
                ),
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
