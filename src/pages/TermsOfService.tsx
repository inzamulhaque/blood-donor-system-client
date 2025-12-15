import { Row, Col, Card, List, Divider } from "antd";
import { motion } from "framer-motion";
import { CheckCircleOutlined, LockOutlined } from "@ant-design/icons";

const TermsOfService = () => {
  // Data arrays
  const platformPurpose = [
    "জরুরি রক্তের প্রয়োজন পূরণ",
    "রক্তদাতা ও রক্তগ্রহীতার মধ্যে যোগাযোগ স্থাপন",
    "অন্য কোনো বাণিজ্যিক, অবৈধ বা ব্যক্তিগত স্বার্থে ব্যবহার সম্পূর্ণ নিষিদ্ধ",
  ];

  const transactionPolicy = [
    "কোনো প্রকার অর্থ লেনদেন করা যাবে না",
    "রক্তদানের আগে দাতাকে কোনো টাকা দেওয়া যাবে না",
    "রক্তদানের সঙ্গে সংশ্লিষ্ট প্রয়োজনীয় খরচ সৌজন্যমূলকভাবে প্রদান করতে হবে",
    "রক্ত কেনা-বেচা বা আর্থিক লাভের উদ্দেশ্যে ব্যবহার সম্পূর্ণভাবে নিষিদ্ধ",
  ];

  const properUse = [
    "ব্যবহারকারীর নাম, ফোন নম্বর, ইমেইল বা অন্যান্য ব্যক্তিগত তথ্যের অপব্যবহার করা যাবে না",
    "অনুমতি ছাড়া অন্যের তথ্য সংগ্রহ, সংরক্ষণ বা শেয়ার করা নিষিদ্ধ",
    "ভুয়া তথ্য প্রদান বা অন্যের পরিচয়ে নিবন্ধন গুরুতর অপরাধ",
  ];

  const userResponsibility = [
    "সত্য ও সঠিক তথ্য প্রদান করবেন",
    "মানবিকতা, সৌজন্য ও সম্মানের সাথে যোগাযোগ করবেন",
    "কোনো বিভ্রান্তিকর, ক্ষতিকর বা অনৈতিক কার্যকলাপে জড়িত হবেন না",
  ];

  const accountSuspension = [
    "শর্তাবলি লঙ্ঘন করলে",
    "রক্ত ক্রয়-বিক্রয়ের চেষ্টা করলে",
    "তথ্যের অপব্যবহার বা প্রতারণায় জড়িত হলে",
  ];

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
        সেবার শর্তাবলি (Terms of Service)
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ textAlign: "center", marginBottom: "30px" }}
      >
        Ihsan Al-Dima একটি মানবিক ও স্বেচ্ছাসেবাভিত্তিক Blood Donor Management
        Platform।
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
                  ১. প্ল্যাটফর্ম ব্যবহারের উদ্দেশ্য
                </div>
              }
            >
              <List
                dataSource={platformPurpose}
                renderItem={(item) => (
                  <List.Item style={{ padding: 0 }}>
                    <CheckCircleOutlined
                      style={{ marginRight: 6, color: "#52c41a" }}
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
                  ২. অর্থ লেনদেন সংক্রান্ত নীতিমালা
                </div>
              }
            >
              <List
                dataSource={transactionPolicy}
                renderItem={(item) => (
                  <List.Item style={{ padding: 0 }}>
                    <LockOutlined
                      style={{ marginRight: 6, color: "#faad14" }}
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
                  ৩. রক্ত ক্রয়-বিক্রয় নিষিদ্ধ / তথ্যের সঠিক ব্যবহার
                </div>
              }
            >
              <List
                dataSource={properUse}
                renderItem={(item) => (
                  <List.Item style={{ padding: 0 }}>
                    <CheckCircleOutlined
                      style={{ marginRight: 6, color: "#1890ff" }}
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
                  ৫. ব্যবহারকারীর দায়িত্ব
                </div>
              }
            >
              <List
                dataSource={userResponsibility}
                renderItem={(item) => (
                  <List.Item style={{ padding: 0 }}>
                    <CheckCircleOutlined
                      style={{ marginRight: 6, color: "#52c41a" }}
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
                  ৬. অ্যাকাউন্ট স্থগিত বা বাতিল
                </div>
              }
            >
              <List
                dataSource={accountSuspension}
                renderItem={(item) => (
                  <List.Item style={{ padding: 0 }}>
                    <LockOutlined
                      style={{ marginRight: 6, color: "#faad14" }}
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

export default TermsOfService;
