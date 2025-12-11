import { Button, Col, Flex, Row } from "antd";
import "./home.css";
import { Typography } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <>
      <motion.div
        className="heroSection"
        initial={{ scale: 0.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Row
          gutter={{ xs: 8, sm: 16, md: 24 }}
          style={{
            maxWidth: "1000px",
            width: "100%",
            margin: "0 auto",
            height: "100%",
          }}
        >
          <Col xs={24} sm={24} md={14}>
            <Flex vertical gap={5} justify="center" style={{ height: "100%" }}>
              <Title level={3}>
                এক ফোঁটা{" "}
                <span
                  style={{
                    color: "#C21807",
                  }}
                >
                  রক্ত
                </span>
                , বাঁচাতে পারে একটি জীবন
              </Title>

              <motion.span
                initial={{ x: -200, opacity: 0 }}
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
                  পাবনা জেলায় জরুরি মুহূর্তে রক্তদাতার প্রয়োজনে আমরা সবাইকে
                  একত্রিত করছি— Ihsan Al-Dima একটি মানবিক প্ল্যাটফর্ম, যেখানে
                  আপনার রক্ত হতে পারে কারো জীবনের শেষ ভরসা। আজই রক্তদাতা হিসেবে
                  নিবন্ধন করুন, মানবিকতার সর্বোচ্চ কাজের অংশ হোন।
                </Paragraph>
              </motion.span>
            </Flex>
          </Col>
          <Col xs={24} sm={24} md={10}>
            <Flex vertical gap={5} justify="center" style={{ height: "100%" }}>
              <Link
                to={"/signup"}
                style={{
                  margin: "0 auto",
                }}
              >
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
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
        </Row>
      </motion.div>
    </>
  );
};

export default HeroSection;
