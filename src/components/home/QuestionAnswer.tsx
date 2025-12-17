import { Col, Row } from "antd";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { motion } from "framer-motion";
import QAImg from "../../assets/homeImages/QA.png";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "১. Ihsan Al-Dima কী?",
    children: (
      <p>
        Ihsan Al-Dima হলো পাবনা জেলার জন্য একটি মানবিক Blood Donor Management
        প্ল্যাটফর্ম। এখানে রক্তদাতা ও রক্তের প্রয়োজনে থাকা মানুষকে দ্রুত এবং
        সহজে যুক্ত করার ব্যবস্থা রয়েছে।
      </p>
    ),
  },
  {
    key: "2",
    label: "২. আমি কীভাবে রক্তদাতা হিসেবে নিবন্ধন করবো?",
    children: (
      <p>
        রেজিস্ট্রেশন খুব সহজ। “SignUp” বা হোমপেজে থাকা “নিবন্ধন করুন” বাটনে
        ক্লিক করে আপনার প্রয়োজনীয় তথ্য দিন। আপনার প্রোফাইল ভেরিফাই হলেই আপনি
        আমাদের স্বেচ্ছাসেবী রক্তদাতা পরিবারের অংশ হয়ে যাবেন।
      </p>
    ),
  },
  {
    key: "3",
    label: "৩. রক্তদাতা হিসেবে আমাকে কখন যোগাযোগ করা হবে?",
    children: (
      <p>
        যখনই পাবনা জেলার কোনো রোগী আপনার রক্তের গ্রুপের রক্তের প্রয়োজন হবে, তখন
        আমাদের টিম বা রোগীর আত্মীয়রা আপনার সঙ্গে যোগাযোগ করবে। আপনি ইচ্ছা ও
        সক্ষমতা থাকলে রক্তদান করতে পারবেন—এটি সম্পূর্ণ আপনার সিদ্ধান্ত।
      </p>
    ),
  },
  {
    key: "4",
    label: "৪. রক্তদাতা হিসেবে নিবন্ধন করলে কি কোনো চার্জ বা ফি দিতে হয়?",
    children: (
      <p>
        না, আমাদের সব সেবা সম্পূর্ণ বিনামূল্যে। মানবতার সেবা ছড়িয়ে দেওয়াই আমাদের
        মূল উদ্দেশ্য।
      </p>
    ),
  },
  {
    key: "5",
    label: "৫. Ihsan Al-Dima কি আল-ওয়াসি ইসলামিক ফাউন্ডেশনের অংশ?",
    children: (
      <p>
        না, Ihsan Al-Dima পরিচালিত হয় আল-ওয়াসি ইসলামিক ফাউন্ডেশন-এর
        তত্ত্বাবধানে, তবে এটি সরাসরি ফাউন্ডেশনের অংশ নয়।
      </p>
    ),
  },
];

const QuestionAnswer = () => {
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
          <Col xs={24} sm={24} md={7} lg={12} xl={12}>
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ overflow: "hidden" }}
              viewport={{ once: true }}
            >
              <img
                src={QAImg}
                alt="Question and Answer Image"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
                  maxHeight: "300px",
                  borderRadius: "10px",
                  boxShadow: " 0 10px 25px rgba(0, 0, 0, 0.15)",
                }}
              />
            </motion.div>
          </Col>

          <Col xs={24} sm={24} md={17} lg={12} xl={12}>
            <motion.h3
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.3 }}
              style={{
                textAlign: "center",
                fontWeight: 900,
                marginBottom: "20px",
              }}
            >
              সাধারণ প্রশ্নাবলী
            </motion.h3>

            <motion.div
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Collapse accordion items={items} defaultActiveKey={["1"]} />
            </motion.div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default QuestionAnswer;
