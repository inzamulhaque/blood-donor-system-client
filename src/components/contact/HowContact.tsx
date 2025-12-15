import { Col, Flex, Row } from "antd";
import { motion } from "framer-motion";
import howContactImg from "../../assets/contactImages/howToContact.png";
import "./contact.css";
import { AimOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

const HowContact = () => {
  return (
    <>
      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Flex
          justify="center"
          style={{
            padding: "25px",
          }}
        >
          <motion.h3
            className="howContactTitle"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
          >
            যোগাযোগের মাধ্যম
          </motion.h3>
        </Flex>

        <Row gutter={[20, 20]} align="middle">
          <Col
            xs={{ span: 24, order: 2 }}
            sm={{ span: 24, order: 2 }}
            md={{ span: 17, order: 1 }}
            lg={{ span: 12, order: 1 }}
            xl={{ span: 12, order: 1 }}
          >
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{
                textAlign: "justify",
                padding: "20px 25px",
                borderRadius: "12px",
                boxShadow:
                  "0 8px 20px rgba(0, 0, 0, 0.12), 0 4px 10px rgba(0, 0, 0, 0.08)",
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
                  fontSize: "18px",
                  marginTop: "20px",
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
                  marginTop: "20px",
                }}
              >
                <PhoneOutlined />
                <p>01700000000</p>
              </Flex>
            </motion.div>
          </Col>

          <Col
            xs={{ span: 24, order: 1 }}
            sm={{ span: 24, order: 1 }}
            md={{ span: 7, order: 2 }}
            lg={{ span: 12, order: 2 }}
            xl={{ span: 12, order: 2 }}
          >
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                textAlign: "end",
              }}
            >
              <img
                src={howContactImg}
                alt="our story image"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  maxHeight: "300px",
                  borderRadius: "10px",
                  boxShadow: " 0 10px 25px rgba(0, 0, 0, 0.15)",
                }}
              />
            </motion.div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HowContact;
