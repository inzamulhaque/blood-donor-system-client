import { Flex } from "antd";
import "./Navbar.css";
import Logo from "../../../assets/al-dima-logo.png";
import { Link, NavLink } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
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
          {/* website logo */}
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

          {/* main menu */}
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

          {/* auth buttons */}
          <Flex justify="space-between" className="lgAuthBtns" gap={30}>
            <Link to={"/signup"}>
              <button className="navBtn navBtn-signup">SignUp</button>
            </Link>
            <Link to={"/signin"}>
              <button className="navBtn navBtn-signin">SignIn</button>
            </Link>
          </Flex>

          {/* menu icon for toggle small screen menu */}
          <MenuOutlined className="menuIcon" onClick={() => setOpen(!open)} />
        </Flex>

        {/* small screen menu */}
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

          <Link to="/signup" onClick={() => setOpen(false)}>
            <button className="navBtn navBtn-signup smMenuBtn">SignUp</button>
          </Link>
          <Link to="/signin" onClick={() => setOpen(false)}>
            <button className="navBtn navBtn-signin smMenuBtn">SignIn</button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
