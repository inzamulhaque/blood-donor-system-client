import { Col, Flex, Row } from "antd";
import { motion } from "framer-motion";
import whoWeAreImg from "../../assets/homeImages/whoWeAre.png";

const WhoWeAre = () => {
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
            className="whoWeAreTitle"
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
          >
            আমরা কে?
          </motion.h3>
        </Flex>

        <Row gutter={[20, 20]} align="middle">
          <Col xs={24} sm={24} md={7} lg={12} xl={12}>
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src={whoWeAreImg}
                alt="who we are image"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "10px",
                  boxShadow: " 0 10px 25px rgba(0, 0, 0, 0.15)",
                }}
              />
            </motion.div>
          </Col>
          <Col xs={24} sm={24} md={17} lg={12} xl={12}>
            <motion.div
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{
                textAlign: "justify",
                padding: "20px 25px",
                borderRadius: "12px",
                boxShadow:
                  "0 8px 20px rgba(0, 0, 0, 0.12), 0 4px 10px rgba(0, 0, 0, 0.08)",
              }}
            >
              <h4>
                জীবন বাঁচানোর এই পথে, আমরা শুধু একটি প্ল্যাটফর্ম নয়—একটি মানবিক
                পরিবার।
              </h4>

              <p
                style={{
                  padding: "5px 0",
                }}
              >
                Ihsan Al-Dima পাবনা জেলার মানুষের জন্য তৈরি একটি রক্তদাতা
                প্ল্যাটফর্ম, যেখানে জরুরি মুহূর্তে কারো জীবন রক্ষায় আমরা সবাই
                মিলে হাত বাড়াই। আমরা বিশ্বাস করি— এক ফোঁটা রক্তও কারো পৃথিবী
                বদলে দিতে পারে।
              </p>
              <p
                style={{
                  padding: "5px 0",
                }}
              >
                এই মানবিক উদ্যোগের তত্ত্বাবধানে আছে আমাদের সংগঠন আল-ওয়াসি
                ইসলামিক ফাউন্ডেশন, যারা এতিমদের ঈদের পোশাক, ইফতার এবং নানা
                কল্যাণমূলক কাজে দীর্ঘদিন ধরে পাশে আছে।
              </p>

              <p>
                আমরা চাই, আপনিও এই ভালো কাজের অংশ হোন—
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  কারণ আপনার রক্তদানই হতে পারে কারো বাঁচার শেষ আশার আলো।
                </span>
              </p>
            </motion.div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default WhoWeAre;
