import IDForm from "../shared/form/IDForm";
import "./contact.css";
import IDInput from "../shared/form/IDInput";
import type { FieldValues } from "react-hook-form";
import { Button, Col, Row } from "antd";
import IDTextArea from "../shared/form/IDTextArea";
import { SendOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const ContactForm = () => {
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <>
      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          margin: "20px auto",
        }}
      >
        <h2 style={{ textAlign: "center", fontStyle: "italic" }}>
          Get In Touch
        </h2>
        <IDForm onSubmit={handleSubmit}>
          <Row
            gutter={[20, 5]}
            align="middle"
            justify="center"
            className="contactFormContainer"
          >
            <Col xs={22} md={20} lg={9}>
              <motion.div
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
              >
                <IDInput name="name" type="text" label="Name" required={true} />
              </motion.div>
            </Col>
            <Col xs={22} md={20} lg={9}>
              <motion.div
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
              >
                <IDInput
                  name="email"
                  type="email"
                  label="Email"
                  required={true}
                />
              </motion.div>
            </Col>
            <Col xs={22} md={20} lg={9}>
              <motion.div
                initial={{ y: -150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
              >
                <IDInput
                  name="phone"
                  type="text"
                  label="Phone Number"
                  required={false}
                />
              </motion.div>
            </Col>
            <Col xs={22} md={20} lg={9}>
              <motion.div
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
              >
                <IDInput
                  name="subject"
                  type="text"
                  label="Subject"
                  required={true}
                />
              </motion.div>
            </Col>
            <Col xs={22} md={20} lg={18}>
              <motion.div
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
              >
                <IDTextArea name="message" label="Message" required={true} />
              </motion.div>
            </Col>
            <Col
              xs={22}
              md={20}
              lg={18}
              style={{
                textAlign: "right",
              }}
            >
              <motion.div
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
              >
                <Button size="large" htmlType="submit" type="primary">
                  <SendOutlined />
                  Send
                </Button>
              </motion.div>
            </Col>
          </Row>
        </IDForm>
      </div>
    </>
  );
};

export default ContactForm;
