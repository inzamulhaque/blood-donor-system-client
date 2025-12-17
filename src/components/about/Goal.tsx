import { Col, Row } from "antd";
import { motion } from "framer-motion";
import goalImage from "../../assets/aboutImages/goal.png";

const Goal = () => {
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
              আমাদের ভবিষ্যৎ উদ্দেশ্য
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
              <p
                style={{
                  margin: "5px 0",
                }}
              >
                আমাদের যাত্রা শুধু একটি সেবা প্রদানকে কেন্দ্র করে নয়—আমরা চাই
                একটি দীর্ঘস্থায়ী প্রভাব তৈরি করতে। ভবিষ্যতে আমরা আমাদের
                প্ল্যাটফর্মকে আরও উন্নত প্রযুক্তি, সহজ ব্যবহারযোগ্য ইন্টারফেসের
                মাধ্যমে আরও মানুষের উপযোগী করে তুলতে চাই। সমাজে ইতিবাচক পরিবর্তন
                আনার লক্ষ্যে আমরা আমাদের সেবার পরিধি বাড়াতে, নতুন ফিচার যুক্ত
                করতে এবং প্রতিটি ব্যবহারকারীর অভিজ্ঞতাকে আরও উন্নত করতে
                নিরলসভাবে কাজ করে যাচ্ছি।
              </p>

              <p
                style={{
                  margin: "5px 0",
                }}
              >
                আমরা বিশ্বাস করি—
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  আজকের ছোট একটি উদ্যোগ, আগামী দিনের বড় পরিবর্তনের সূচনা হতে
                  পারে।
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
                src={goalImage}
                alt="mission and vision image"
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

export default Goal;
