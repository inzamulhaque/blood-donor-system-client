import { Col, List, Row } from "antd";
import { motion } from "framer-motion";
import whatWeDoImg from "../../assets/aboutImages/whatWeDo.png";
import { CheckCircleOutlined } from "@ant-design/icons";

const data = [
  "জরুরি সময়ে দ্রুত Blood Donor খুঁজে পেতে সহযোগিতা করি।",
  "সঠিক তথ্যভিত্তিক Donor List বজায় রাখি।",
  "Donor দের সহজে নিবন্ধন ও প্রোফাইল আপডেটের সুযোগ দিই।",
  "রোগীর পরিবারকে প্রয়োজনীয় Donor দের সাথে যোগাযোগ করতে সহায়তা করি।",
  "রক্তদান সম্পর্কে সচেতনতা তৈরি করি এবং মানবিক কাজে মানুষকে একত্র করি।",
];

const WhatWeDo = () => {
  return (
    <>
      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          margin: "30px auto",
        }}
      >
        <Row gutter={[20, 20]} align="middle">
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              viewport={{ once: true }}
            >
              <img
                src={whatWeDoImg}
                alt="what we do image"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "10px",
                  boxShadow: " 0 10px 25px rgba(0, 0, 0, 0.15)",
                }}
              />
            </motion.div>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <motion.h3
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.3 }}
              style={{
                textAlign: "center",
                fontWeight: 900,
              }}
            >
              আমরা কী করি?
            </motion.h3>

            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{
                textAlign: "justify",
                padding: "20px 25px",
                borderRadius: "12px",
                boxShadow:
                  "0 8px 20px rgba(0, 0, 0, 0.12), 0 4px 10px rgba(0, 0, 0, 0.08)",
                marginTop: "20px",
              }}
            >
              <h4>প্রয়োজনে–অপ্রয়োজনে, মানবতার সেবা ছড়িয়ে দিই সবার মাঝে।</h4>

              <div
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  padding: "20px 25px",
                  marginTop: "15px",
                  borderRadius: "12px",
                  boxShadow: "0 8px 22px rgba(0, 0, 0, 0.15)",
                }}
              >
                <List
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    >
                      <CheckCircleOutlined
                        style={{
                          paddingRight: "5px",
                          fontSize: "20px",
                        }}
                      />
                      <span>{item}</span>
                    </List.Item>
                  )}
                />
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default WhatWeDo;
