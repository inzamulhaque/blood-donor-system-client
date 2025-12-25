import IDForm from "../shared/form/IDForm";
import "./contact.css";
import IDInput from "../shared/form/IDInput";
import type { FieldValues } from "react-hook-form";
import { Button, Col, Row } from "antd";
import IDTextArea from "../shared/form/IDTextArea";
import { SendOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import simplifyZodErrors from "../../utils/SimplifyZodErrors";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "../../schemas/Contact";

const ContactForm = () => {
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formDefaultValues, setFormDefaultValues] = useState<FieldValues>({});

  const simpleErroes = useMemo(() => {
    const serr = simplifyZodErrors(formErrors) || {};

    const errFields = Object.keys(serr).join(", ");

    if (errFields) {
      toast.error(
        `আপনার ${errFields} ফিল্ডে সমস্যা আছে। দয়া করে সেগুলো ঠিক করুন।`,
        {
          duration: 7000,
          position: "top-center",
        }
      );
    }

    return serr;
  }, [formErrors]);

  const handleSubmit = (values: FieldValues) => {
    setFormDefaultValues(values);
    console.log({ values });
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
        <IDForm
          onSubmit={handleSubmit}
          resolver={zodResolver(ContactSchema)}
          setFormErrors={setFormErrors}
          defaultValues={formDefaultValues}
        >
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
                <IDInput
                  name="name"
                  type="text"
                  label="Name"
                  required={true}
                  err={simpleErroes["name"]}
                />
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
                  err={simpleErroes["email"]}
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
                  err={simpleErroes["phone"]}
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
                  err={simpleErroes["subject"]}
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
                <IDTextArea
                  name="message"
                  label="Message"
                  required={true}
                  err={simpleErroes["message"]}
                />
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
