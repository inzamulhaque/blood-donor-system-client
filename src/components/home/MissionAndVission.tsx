import { Col, Row } from "antd";
import { motion } from "framer-motion";
import missionVissionImg from "../../assets/homeImages/missionVission.png";

const MissionAndVission = () => {
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
              আমাদের মিশন ও ভিশন
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
              <h4>মানবতার স্পর্শে জীবন বাঁচানোর জন্য একসাথে</h4>

              <p
                style={{
                  margin: "5px 0",
                }}
              >
                আমাদের লক্ষ্য ও স্বপ্ন একটাই— পাবনা জেলায় একটি শক্তিশালী,
                দ্রুতসাড়া প্রদানকারী রক্তদাতা নেটওয়ার্ক তৈরি করা, যেখানে জরুরি
                মুহূর্তে রক্ত পাওয়া আর দুশ্চিন্তার কারণ হবে না।
              </p>

              <p
                style={{
                  margin: "5px 0",
                }}
              >
                আমরা বিশ্বাস করি— একজনের রক্তদান, আরেকজনের জীবনের নতুন শুরু।
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {"\u00A0"}এভাবেই Ihsan Al-Dima মানবতার আলো ছড়িয়ে দিতে চায় দাতা
                  থেকে দাতার হৃদয়ে।
                </span>
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
                src={missionVissionImg}
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

export default MissionAndVission;
