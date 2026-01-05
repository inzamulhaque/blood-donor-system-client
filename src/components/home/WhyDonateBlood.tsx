import { Col, Row } from "antd";
import { motion } from "framer-motion";
import whyDonateBloodImg from "../../assets/homeImages/whyDonateBlood.png";

const WhyDonateBlood = () => {
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
          <Col
            xs={{ span: 24, order: 2 }}
            sm={{ span: 24, order: 2 }}
            md={{ span: 12, order: 1 }}
            lg={{ span: 12, order: 1 }}
            xl={{ span: 12, order: 1 }}
          >
            <motion.h3
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.3 }}
              style={{
                textAlign: "center",
                fontWeight: 900,
              }}
            >
              রক্তদান, মানবতার সবচেয়ে বড় অবদান
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
              <h4>এক ফোঁটা রক্ত, অসংখ্য আশার গল্প</h4>

              <p
                style={{
                  margin: "5px 0",
                }}
              >
                রক্তের কোনো কৃত্রিম বিকল্প নেই—মানুষের রক্তই মানুষের জীবন
                বাঁচাতে পারে। স্বেচ্ছায় ও নিয়মিত রক্তদানের মাধ্যমে জরুরি
                মুহূর্তে একজন রোগীর নিরাপদ চিকিৎসা নিশ্চিত হয়। আপনার আজকের এই
                মানবিক সিদ্ধান্ত সমাজে আস্থা, সহানুভূতি এবং বেঁচে থাকার নতুন
                সম্ভাবনা তৈরি করে।
              </p>

              <p
                style={{
                  margin: "5px 0",
                  fontWeight: "bold",
                }}
              >
                Ihsan Al-Dima–এর সাথে যুক্ত হয়ে আপনার রক্তদানকে আরও সহজ করে
                তুলুন। পাবনা জুড়ে জীবন বাঁচানোর এই স্বেচ্ছাসেবী যাত্রায় আপনিও
                হোন একজন অংশীদার।
              </p>
            </motion.div>
          </Col>
          <Col
            xs={{ span: 24, order: 1 }}
            sm={{ span: 24, order: 1 }}
            md={{ span: 12, order: 2 }}
            lg={{ span: 12, order: 2 }}
            xl={{ span: 12, order: 2 }}
          >
            <motion.div
              initial={{ y: -150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              viewport={{ once: true }}
              style={{
                textAlign: "end",
              }}
            >
              <img
                src={whyDonateBloodImg}
                alt="mission and vision image"
                style={{
                  width: "100%",
                  maxWidth: "400px",
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

export default WhyDonateBlood;
