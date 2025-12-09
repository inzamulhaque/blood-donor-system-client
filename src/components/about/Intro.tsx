import { Button, Col, Flex, Row, Typography } from "antd";
import "./about.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { UserAddOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Intro = () => {
  return (
    <>
      <div className="intro">
        <Row
          gutter={{ xs: 8, sm: 16, md: 24 }}
          style={{
            maxWidth: "1000px",
            width: "100%",
            margin: "0 auto",
            height: "100%",
          }}
        >
          <Col
            xs={{ span: 24, order: 2 }}
            sm={{ span: 24, order: 2 }}
            md={{ span: 10, order: 1 }}
          >
            <Flex vertical gap={5} justify="center" style={{ height: "100%" }}>
              <Link
                to={"/signup"}
                style={{
                  margin: "0 auto",
                }}
              >
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button type="primary">
                    নিবন্ধন করুন <UserAddOutlined />
                  </Button>
                </motion.div>
              </Link>
            </Flex>
          </Col>

          <Col
            xs={{ span: 24, order: 1 }}
            sm={{ span: 24, order: 1 }}
            md={{ span: 14, order: 2 }}
          >
            <Flex vertical gap={5} justify="center" style={{ height: "100%" }}>
              <Title level={3}>মানবতার পাশে দাঁড়ানোর এক আন্তরিক উদ্যোগ</Title>

              <motion.span
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Paragraph
                  style={{
                    textAlign: "justify",
                    background: "rgba(255, 255, 255, 0.7)",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                  }}
                >
                  Ihsan Al-Dima হলো পাবনা জেলার জন্য একটি মানবিক রক্তদাতা
                  প্ল্যাটফর্ম, যেখানে জরুরি মুহূর্তে রক্তপ্রয়োজনে থাকা মানুষদের
                  সাথে সহমর্মী দাতাদের দ্রুত সংযুক্ত করা হয়। জীবনের মূল্য বুঝে
                  মানবতার জন্য কাজ করাই আমাদের বিশ্বাস ও অঙ্গীকার।
                </Paragraph>
              </motion.span>
            </Flex>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Intro;
