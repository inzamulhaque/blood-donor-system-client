import { Flex } from "antd";
import "./Navbar.css";
import Logo from "../../../assets/al-dima-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
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
            <Link to={"/"}>
              <img
                src={Logo}
                alt="Al-Dima Logo"
                style={{
                  height: "40px",
                  marginRight: "10px",
                  borderRadius: "5px",
                }}
              />
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
          <Flex justify="space-around" gap={5}>
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
          <Flex justify="space-between" gap={30}>
            <Link to={"/signup"}>
              <button className="navBtn navBtn-signup">SignUp</button>
            </Link>
            <Link to={"/signin"}>
              <button className="navBtn navBtn-signin">SignIn</button>
            </Link>
          </Flex>
          {/* </Flex> */}
        </Flex>
      </nav>
    </>
  );
};

export default Navbar;
