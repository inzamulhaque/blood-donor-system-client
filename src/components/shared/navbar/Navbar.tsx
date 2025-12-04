import { Flex } from "antd";
import "./Navbar.css";
import Logo from "../../../assets/al-dima-logo.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <Flex
          gap={"middle"}
          vertical
          justify="space-between"
          align="center"
          style={{
            maxWidth: "1200px",
            width: "100%",
            height: "70px",

            margin: "0 auto",
          }}
        >
          <div className="logo">
            <img
              src={Logo}
              alt="Al-Dima Logo"
              style={{ height: "40px", marginRight: "10px" }}
            />
          </div>
        </Flex>
      </nav>
    </>
  );
};

export default Navbar;
