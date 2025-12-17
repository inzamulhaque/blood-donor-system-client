import type React from "react";
import IDForm from "../shared/form/IDForm";
import "./contact.css";
import IDInput from "../shared/form/IDInput";
import type { FieldValues } from "react-hook-form";

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

        <div className="contactFormContainer">
          <IDForm onSubmit={handleSubmit}>
            <IDInput name="name" type="text" label="Name" />
          </IDForm>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
