import { Col, Flex, Row } from "antd";
import { motion } from "framer-motion";
import ourStoryImg from "../../assets/aboutImages/ourStory.png";

const OurStory = () => {
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
            className="ourStoryTitle"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
          >
            আমাদের গল্প
          </motion.h3>
        </Flex>

        <Row gutter={[20, 20]} align="middle">
          <Col
            xs={{ span: 24, order: 2 }}
            sm={{ span: 24, order: 2 }}
            md={{ span: 17, order: 1 }}
            lg={{ span: 12, order: 1 }}
            xl={{ span: 12, order: 1 }}
          >
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{
                textAlign: "justify",
                padding: "20px 25px",
                borderRadius: "12px",
                boxShadow:
                  "0 8px 20px rgba(0, 0, 0, 0.12), 0 4px 10px rgba(0, 0, 0, 0.08)",
              }}
            >
              <h4>একটি সংকট, একটি প্রয়োজন! আর সেখান থেকেই আমাদের পথচলা।</h4>

              <p
                style={{
                  padding: "5px 0",
                }}
              >
                পাবনা জেলায় অনেক সময় জরুরি রক্তের প্রয়োজন হলে মানুষ হতাশা আর
                দুশ্চিন্তায় ছুটে বেড়ায়। ঠিক সময়ে রক্ত না পাওয়ার কষ্ট—আমাদের চোখে
                বহুবার ধরা দিয়েছে। মানবতার এই অভাব থেকেই জন্ম নেয় Ihsan Al-Dima।
              </p>
              <p
                style={{
                  padding: "5px 0",
                }}
              >
                আমাদের মূল সংগঠন আল-ওয়াসি ইসলামিক ফাউন্ডেশন দীর্ঘদিন ধরে এতিমদের
                ঈদের পোশাক, ইফতার এবং নানা কল্যাণমূলক কাজে কাজ করে আসছে। সেই
                অভিজ্ঞতা, সহমর্মিতা ও মানবিকতার শক্তিই আমাদের অনুপ্রাণিত করে
                একটি নির্ভরযোগ্য রক্তদাতা প্ল্যাটফর্ম গড়ে তুলতে।
              </p>

              <p>
                আমাদের গল্প খুব সাধারণ—
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  কেউ যেন রক্তের জন্য আর অসহায় না হয়, কেউ যেন শেষ মুহূর্তে
                  সাহায্য থেকে বঞ্চিত না হয়।
                </span>
                এই বিশ্বাস থেকেই শুরু হয়েছে{" "}
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Ihsan Al-Dima
                </span>
                -এর যাত্রা।
              </p>
            </motion.div>
          </Col>

          <Col
            xs={{ span: 24, order: 1 }}
            sm={{ span: 24, order: 1 }}
            md={{ span: 7, order: 2 }}
            lg={{ span: 12, order: 2 }}
            xl={{ span: 12, order: 2 }}
          >
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                textAlign: "end",
              }}
            >
              <img
                src={ourStoryImg}
                alt="our story image"
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

export default OurStory;
