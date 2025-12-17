import { UserAddOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row, Typography } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./contact.css";

const { Title, Paragraph } = Typography;

const Intro = () => {
  return (
    <>
      <motion.div
        className="contactIntro"
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

          <Col
            xs={{ span: 24, order: 1 }}
            sm={{ span: 24, order: 1 }}
            md={{ span: 14, order: 2 }}
          >
            <Flex vertical gap={5} justify="center" style={{ height: "100%" }}>
              <Title level={3}>আমাদের সাথে যোগাযোগ করুন</Title>

              <Paragraph
                style={{
                  textAlign: "justify",
                  background: "rgba(255, 255, 255, 0.7)",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                }}
              >
                রক্তদাতা, রক্তপ্রয়োজন বা আমাদের সেবাসমূহ সংক্রান্ত যেকোনো তথ্যের
                জন্য Ihsan Al-Dima আপনার সাথে সংযোগে আগ্রহী। আমরা সঠিক তথ্য,
                দ্রুত সমন্বয় এবং নির্ভরযোগ্য সহযোগিতার মাধ্যমে পাবনা জেলায়
                রক্তসেবা সহজ ও কার্যকর করতে কাজ করছি। আপনার প্রশ্ন বা প্রয়োজন
                অনুযায়ী সহায়তার জন্য অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন।
              </Paragraph>
            </Flex>
          </Col>
        </Row>
      </motion.div>
    </>
  );
};

export default Intro;
