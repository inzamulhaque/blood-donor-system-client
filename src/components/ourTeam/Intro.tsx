import { UserAddOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row, Typography } from "antd";
import "./ourTeam.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const Intro = () => {
  return (
    <>
      <motion.div
        className="ourTeamIntro"
        initial={{ scale: 0.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
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
                আমাদের নিবেদিত টিম—নিরাপদ{" "}
                <span
                  style={{
                    color: "#C21807",
                  }}
                >
                  রক্তসেবায়
                </span>{" "}
                আপনার পাশে
              </Title>

              <Paragraph
                style={{
                  textAlign: "justify",
                  background: "rgba(255, 255, 255, 0.7)",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                }}
              >
                আমাদের টিম গঠিত কিছু দক্ষ, দায়িত্বশীল ও মানবিক সদস্যদের নিয়ে,
                যারা প্রতিদিন নিরলসভাবে কাজ করে রক্তদাতা ও রক্তগ্রহীতার মধ্যে
                দ্রুত, স্বচ্ছ ও নির্ভরযোগ্য সেবা নিশ্চিত করতে। রক্তের জরুরি
                মুহূর্তে সঠিক তথ্য, দ্রুত সমন্বয় এবং নিরাপদ যোগাযোগ — সবকিছুই
                আমরা সর্বোচ্চ গুরুত্ব দিয়ে পরিচালনা করি।{" "}
                <span style={{ fontWeight: "bold" }}>
                  আপনার একটি রক্তদান কারো জীবনে নতুন শ্বাস হয়ে উঠতে পারে
                </span>
                , আর সেই সেতুবন্ধন তৈরি করতেই আমাদের টিম সর্বদা প্রস্তুত।
              </Paragraph>
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
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  viewport={{ once: true }}
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

export default Intro;
