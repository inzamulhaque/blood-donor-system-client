import { Row, Col, Card, List, Divider } from "antd";
import { motion } from "framer-motion";
import { CheckCircleOutlined, LockOutlined } from "@ant-design/icons";

const PrivacyPolicy = () => {
  return (
    <div style={{ maxWidth: "1000px", margin: "40px auto", padding: "0 16px" }}>
      <motion.h3
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.7 }}
        style={{ textAlign: "center", fontWeight: 900 }}
      >
        গোপনীয়তা নীতি (Privacy Policy)
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ textAlign: "center", marginBottom: "30px" }}
      >
        Ihsan Al-Dima আপনার ব্যক্তিগত তথ্যের গোপনীয়তা ও নিরাপত্তাকে সর্বোচ্চ
        গুরুত্ব দেয়।
      </motion.p>

      <Row gutter={[24, 24]}>
        <Col xs={24}>
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card
              title={
                <div style={{ wordBreak: "break-word", whiteSpace: "normal" }}>
                  ১. আমরা কোন তথ্য সংগ্রহ করি
                </div>
              }
            >
              <List
                dataSource={[
                  "নাম",
                  "রক্তের গ্রুপ",
                  "মোবাইল নম্বর",
                  "ইমেইল ঠিকানা",
                  "উপজেলা (পাবনা জেলা ভিত্তিক)",
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <CheckCircleOutlined
                      style={{ color: "#52c41a", marginRight: 8 }}
                    />
                    {item}
                  </List.Item>
                )}
              />
            </Card>
          </motion.div>
        </Col>

        <Col xs={24}>
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card
              title={
                <div style={{ wordBreak: "break-word", whiteSpace: "normal" }}>
                  ২. আপনার তথ্য কারা দেখতে পারবে
                </div>
              }
            >
              <List
                dataSource={[
                  "জরুরি রক্তের প্রয়োজন রয়েছে এমন ব্যক্তি বা পরিবার",
                  "Ihsan Al-Dima-এর অনুমোদিত অ্যাডমিন টিম",
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <CheckCircleOutlined
                      style={{ color: "#52c41a", marginRight: 8 }}
                    />
                    {item}
                  </List.Item>
                )}
              />
            </Card>
          </motion.div>
        </Col>

        <Col xs={24}>
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card
              title={
                <div style={{ wordBreak: "break-word", whiteSpace: "normal" }}>
                  ৩. প্রাইভেট অ্যাকাউন্ট সুবিধা
                </div>
              }
            >
              <List
                dataSource={[
                  "সাধারণ ব্যবহারকারীরা আপনার তথ্য দেখতে পারবে না",
                  "শুধুমাত্র অ্যাডমিন টিম তথ্য দেখতে পারবে",
                  "অ্যাডমিন প্রয়োজন অনুযায়ী যোগাযোগ করতে পারবে",
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <LockOutlined
                      style={{ color: "#faad14", marginRight: 8 }}
                    />
                    {item}
                  </List.Item>
                )}
              />
            </Card>
          </motion.div>
        </Col>

        <Col xs={24}>
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card
              title={
                <div style={{ wordBreak: "break-word", whiteSpace: "normal" }}>
                  ৪. তথ্যের নিরাপত্তা
                </div>
              }
            >
              <p>
                আমরা আধুনিক ও নিরাপদ প্রযুক্তি ব্যবহার করে আপনার তথ্য সুরক্ষিত
                রাখি এবং কোনো অবস্থাতেই অনুমতি ছাড়া তৃতীয় পক্ষের সাথে তথ্য শেয়ার
                করি না।
              </p>
            </Card>
          </motion.div>
        </Col>

        <Col xs={24}>
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card
              title={
                <div style={{ wordBreak: "break-word", whiteSpace: "normal" }}>
                  ৫. তথ্যের ব্যবহার
                </div>
              }
            >
              <List
                dataSource={[
                  "জরুরি রক্তের অনুরোধ সমন্বয়ের জন্য",
                  "প্রয়োজনীয় যোগাযোগ নিশ্চিত করার জন্য",
                  "সেবার মান উন্নত করার জন্য",
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <CheckCircleOutlined
                      style={{ color: "#52c41a", marginRight: 8 }}
                    />
                    {item}
                  </List.Item>
                )}
              />
            </Card>
          </motion.div>
        </Col>

        <Col xs={24}>
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card
              title={
                <div style={{ wordBreak: "break-word", whiteSpace: "normal" }}>
                  ৬. আপনার অধিকার
                </div>
              }
            >
              <List
                dataSource={[
                  "তথ্য হালনাগাদ করার অধিকার",
                  "অ্যাকাউন্ট প্রাইভেট করার অধিকার",
                  "অ্যাকাউন্ট মুছে ফেলার অনুরোধ করার অধিকার",
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <CheckCircleOutlined
                      style={{ color: "#52c41a", marginRight: 8 }}
                    />
                    {item}
                  </List.Item>
                )}
              />
            </Card>
          </motion.div>
        </Col>

        <Col xs={24}>
          <Divider />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{ textAlign: "center", fontWeight: 500 }}
          >
            Ihsan Al-Dima — পাবনা জেলার জন্য একটি মানবিক ও নির্ভরযোগ্য রক্তদাতা
            প্ল্যাটফর্ম
          </motion.p>
        </Col>
      </Row>
    </div>
  );
};

export default PrivacyPolicy;
