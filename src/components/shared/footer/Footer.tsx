import { Col, Divider, Flex, Row } from "antd";
import { motion } from "framer-motion";
import logo from "../../../assets/al-dima-logo.png";
import {
  AimOutlined,
  FacebookOutlined,
  MailOutlined,
  PhoneOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          background: "linear-gradient(135deg, #2d3436 0%, #1e272e 100%)",
          color: "#dfe6e9",
          padding: "30px",
          marginTop: "auto",
        }}
      >
        <Row gutter={[50, 40]}>
          <Col xs={24} sm={24} md={12} lg={6}>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    width: "150px",
                    height: "60px",
                    borderRadius: "5px",
                    boxShadow:
                      "0 6px 12px rgba(0, 0, 0, 0.45), 0 0 18px rgba(255, 255, 255, 0.08)",
                  }}
                />
              </Link>

              <p
                style={{
                  marginTop: "10px",
                  textAlign: "justify",
                }}
              >
                Ihsan Al-Dima — পাবনা জেলার একটি মানবিক রক্তদাতা প্ল্যাটফর্ম,
                যেখানে দাতা ও রোগীকে দ্রুত সংযুক্ত করে জীবন বাঁচাতে আমরা কাজ
                করি।
              </p>

              <Flex
                gap={"10px"}
                style={{
                  margin: "10px",
                }}
              >
                <a
                  href="#"
                  style={{
                    width: " 40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "white",
                    fontSize: "22px",
                    color: "#1877F2",
                  }}
                >
                  <FacebookOutlined />
                </a>
                <a
                  href="#"
                  style={{
                    width: " 40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "white",
                    fontSize: "22px",
                    color: "#FF0000",
                  }}
                >
                  <YoutubeOutlined />
                </a>
                <a
                  href="#"
                  style={{
                    width: " 40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "white",
                    fontSize: "22px",
                    color: "#EA4335",
                  }}
                >
                  <MailOutlined />
                </a>
              </Flex>
            </motion.div>
          </Col>

          <Col xs={24} sm={24} md={12} lg={6}>
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3>Quick Links</h3>

              <div
                style={{
                  marginTop: "10px",
                }}
              >
                <Link to="/" className="footerLink">
                  Home
                </Link>
                <Link to="/about" className="footerLink">
                  About
                </Link>
                <Link to="/signin" className="footerLink">
                  Sign In
                </Link>
                <Link to="/signup" className="footerLink">
                  Sign Up
                </Link>
              </div>
            </motion.div>
          </Col>

          <Col xs={24} sm={24} md={12} lg={6}>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3>Important Links</h3>

              <div
                style={{
                  marginTop: "10px",
                }}
              >
                <Link to="/policy" className="footerLink">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="footerLink">
                  Terms of Service
                </Link>
                <Link to="/our-team" className="footerLink">
                  Our Team
                </Link>
                <Link to="/contact" className="footerLink">
                  Contact
                </Link>
              </div>
            </motion.div>
          </Col>

          <Col xs={24} sm={24} md={12} lg={6}>
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3>Get In Touch</h3>

              <div
                style={{
                  marginTop: "10px",
                }}
              >
                <Flex
                  gap={"8px"}
                  style={{
                    fontSize: "18px",
                  }}
                >
                  <AimOutlined />
                  <p>Pabna Sadar, Pabna, Bangladesh</p>
                </Flex>

                <Flex
                  gap={"8px"}
                  style={{
                    fontSize: "16px",
                    marginTop: "8px",
                    fontWeight: "600",
                  }}
                >
                  <MailOutlined />
                  <p>ihsanaldimapabna@gmail.com</p>
                </Flex>

                <Flex
                  gap={"8px"}
                  style={{
                    fontSize: "18px",
                    marginTop: "8px",
                  }}
                >
                  <PhoneOutlined />
                  <p>01700000000</p>
                </Flex>
              </div>
            </motion.div>
          </Col>
        </Row>

        <Divider
          style={{
            height: "2px",
            background: "gray",
          }}
        />

        <Flex gap={"10px"} justify="space-between" align="center" vertical>
          <p
            style={{
              textAlign: "center",
            }}
          >
            &copy; {new Date().getFullYear()} Ihsan Al-Dima. All rights
            reserved.
          </p>

          <p
            style={{
              textAlign: "center",
            }}
          >
            Developed with ❤️ by{" "}
            <a href="https://www.linkedin.com/in/md-inzamul-haque/">
              MD Inzamul Haque
            </a>
          </p>
        </Flex>
      </footer>
    </>
  );
};

export default Footer;
