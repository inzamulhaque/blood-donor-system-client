import { Flex } from "antd";
import "./Navbar.css";
import Logo from "../../../assets/al-dima-logo.png";
import { Link } from "react-router-dom";
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
            <Link to={"/"}>
              <img src={Logo} alt="Al-Dima Logo" className="navLogo" />
            </Link>
          </Flex>

          {/* <Flex
            align="center"
            justify="space-between"
            style={{
              height: "100%",
              fontSize: "18px",
            }}
          > */}

          {/* main menu */}
          <Flex justify="space-around" gap={5} className="lgMenu">
            <Link to={"/"} className="menuItem">
              Home
            </Link>
            <Link to={"/about"} className="menuItem">
              About
            </Link>
            <Link to={"/our-team"} className="menuItem">
              Our Team
            </Link>
            <Link to={"/contact"} className="menuItem">
              Contact
            </Link>
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

          {/* </Flex> */}

          {/* menu icon for toggle small screen menu */}
          <MenuOutlined className="menuIcon" onClick={() => setOpen(!open)} />
        </Flex>

        {/* small screen menu */}
        <div className={`smMenu ${open ? "smMenuOpen" : ""}`}>
          <Link to="/" className="smMenuItem" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link
            to="/about"
            className="smMenuItem"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            to="/our-team"
            className="smMenuItem"
            onClick={() => setOpen(false)}
          >
            Our Team
          </Link>
          <Link
            to="/contact"
            className="smMenuItem"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

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
