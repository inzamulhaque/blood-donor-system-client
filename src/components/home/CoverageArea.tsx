import { UserAddOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row, Typography } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./home.css";

const { Title, Paragraph } = Typography;

const CoverageArea = () => {
  return (
    <>
      <motion.div
        className="coverageAreaSection"
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
          <Col xs={24} sm={24} md={14}>
            <Flex vertical gap={5} justify="center" style={{ height: "100%" }}>
              <Title level={3}>আমাদের কার্যক্ষেত্র</Title>

              <Paragraph
                style={{
                  textAlign: "justify",
                  background: "rgba(255, 255, 255, 0.7)",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                }}
              >
                Ihsan Al-Dima বর্তমানে শুধুমাত্র পাবনা জেলার মধ্যে রক্তদান
                ব্যবস্থাপনায় কাজ করছে। স্থানীয়ভাবে সংগঠিত এই উদ্যোগের মাধ্যমে
                আমরা দ্রুত, নিরাপদ এবং নির্ভরযোগ্য রক্তসেবা নিশ্চিত করতে
                প্রতিশ্রুতিবদ্ধ।
              </Paragraph>
            </Flex>
          </Col>
        </Row>
      </motion.div>
    </>
  );
};

export default CoverageArea;
