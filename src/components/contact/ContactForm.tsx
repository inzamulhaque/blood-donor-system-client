import IDForm from "../shared/form/IDForm";
import "./contact.css";
import IDInput from "../shared/form/IDInput";
import type { FieldValues } from "react-hook-form";
import { Col, Row } from "antd";
import IDTextArea from "../shared/form/IDTextArea";

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
            gutter={[20, 20]}
            align="middle"
            justify="center"
            className="contactFormContainer"
          >
            <Col xs={22} md={20} lg={9}>
              <IDInput name="name" type="text" label="Name" />
            </Col>
            <Col xs={22} md={20} lg={9}>
              <IDInput name="email" type="email" label="Email" />
            </Col>
            <Col xs={22} md={20} lg={9}>
              <IDInput name="phone" type="text" label="Phone Number" />
            </Col>
            <Col xs={22} md={20} lg={9}>
              <IDInput name="subject" type="text" label="Subject" />
            </Col>
            <Col xs={22} md={20} lg={18}>
              <IDTextArea name="message" label="Message" />
            </Col>
          </Row>
        </IDForm>
      </div>
    </>
  );
};

export default ContactForm;
