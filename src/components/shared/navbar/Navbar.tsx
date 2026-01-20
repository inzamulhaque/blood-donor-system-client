import { Flex } from "antd";
import "./Navbar.css";
import Logo from "../../../assets/al-dima-logo.png";
import { Link, NavLink } from "react-router-dom";
import { InfoCircleOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { useCurrentUser } from "../../../redux/features/auth/authSlice";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = useAppSelector(useCurrentUser);

  return (
    <>
      <nav>
        <Flex
          gap={"middle"}
          vertical={false}
          justify="space-between"
          align="center"
          style={{
            maxWidth: "1000px",
            width: "100%",
            height: "60px",
            margin: "0 auto",
          }}
        >
          <Flex
            align="center"
            justify="start"
            style={{
              height: "100%",
            }}
          >
            <Link to={"/"} onClick={() => setOpen(false)}>
              <img src={Logo} alt="Al-Dima Logo" className="navLogo" />
            </Link>
          </Flex>

          <Flex justify="space-around" gap={5} className="lgMenu">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `menuItem ${isActive ? "activeMenuItem" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `menuItem ${isActive ? "activeMenuItem" : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to={"/our-team"}
              className={({ isActive }) =>
                `menuItem ${isActive ? "activeMenuItem" : ""}`
              }
            >
              Our Team
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `menuItem ${isActive ? "activeMenuItem" : ""}`
              }
            >
              Contact
            </NavLink>
          </Flex>

          <Flex justify="space-between" className="lgAuthBtns" gap={30}>
            {user?.role ? (
              <Link to={`/${user.role}/dashboard`}>
                <button className="navBtn navBtn-signin">
                  <InfoCircleOutlined /> My Account
                </button>
              </Link>
            ) : (
              <>
                <Link to={"/signup"}>
                  <button className="navBtn navBtn-signup">SignUp</button>
                </Link>
                <Link to={"/signin"}>
                  <button className="navBtn navBtn-signin">SignIn</button>
                </Link>
              </>
            )}
          </Flex>

          <MenuOutlined className="menuIcon" onClick={() => setOpen(!open)} />
        </Flex>

        <div className={`smMenu ${open ? "smMenuOpen" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `smMenuItem ${isActive ? "smActiveMenuItem" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `smMenuItem ${isActive ? "smActiveMenuItem" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/our-team"
            className={({ isActive }) =>
              `smMenuItem ${isActive ? "smActiveMenuItem" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            Our Team
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `smMenuItem ${isActive ? "smActiveMenuItem" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>

          {user?.role ? (
            <Link to={`/${user.role}/dashboard`} onClick={() => setOpen(false)}>
              <button className="navBtn navBtn-signin smMenuBtn">
                My Account
              </button>
            </Link>
          ) : (
            <>
              <Link to="/signup" onClick={() => setOpen(false)}>
                <button className="navBtn navBtn-signup smMenuBtn">
                  SignUp
                </button>
              </Link>
              <Link to="/signin" onClick={() => setOpen(false)}>
                <button className="navBtn navBtn-signin smMenuBtn">
                  SignIn
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
