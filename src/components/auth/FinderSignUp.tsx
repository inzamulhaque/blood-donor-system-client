import { useState } from "react";
import FormHeader from "./FormHeader";
import type { FieldValues } from "react-hook-form";
import { motion } from "framer-motion";
import IDForm from "../shared/form/IDForm";
import IDSelect from "../shared/form/IDSelect";
import { UPOZILAS_PABNA_OPTIONS } from "../../constants/upozila";
import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import IDInput from "../shared/form/IDInput";
import IDPassword from "../shared/form/IDPassword";
import AcceptPolicyTerms from "./AcceptPolicyTerms";
import NextOrSignupBtn from "./NextOrSignupBtn";

const FinderSignUp = () => {
  const [acceptTermsPolicy, setAcceptTermsPolicy] = useState<
    Record<string, boolean>
  >({ terms: false, policy: false });
  const [openSection, setOpenSection] = useState<number>(1);

  const handleSubmit = (values: FieldValues) => {
    setOpenSection(1);
    setAcceptTermsPolicy({ terms: false, policy: false });
    console.log(values);
  };

  return (
    <>
      <FormHeader
        title="Find Blood. Save Lives."
        shortDes="Find blood as a finder or donor — become a donor to help save lives."
      />

      <IDForm onSubmit={handleSubmit}>
        {openSection === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ width: "100%" }}
          >
            <IDInput
              label="Name"
              name="name"
              type="text"
              prefix={<UserOutlined />}
              required={true}
            />

            <IDInput
              label="Email"
              name="email"
              type="email"
              required={true}
              prefix={<MailOutlined />}
            />
          </motion.div>
        )}

        {openSection === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ width: "100%" }}
          >
            <IDPassword
              label="Password"
              name="password"
              required={true}
              prefix={<LockOutlined />}
            />

            <IDPassword
              label="Confirm Password"
              name="confirmPassword"
              required={true}
              prefix={<LockOutlined />}
            />
          </motion.div>
        )}

        {openSection === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ width: "100%" }}
          >
            <IDInput
              label="Phone"
              name="phoneNumber"
              type="text"
              required={true}
              prefix={<PhoneOutlined />}
            />

            <IDSelect
              label="Upozila"
              name="upozila"
              required={true}
              options={UPOZILAS_PABNA_OPTIONS}
              placeholder="Select your upozila"
            />

            <AcceptPolicyTerms
              acceptTermsPolicy={acceptTermsPolicy}
              setAcceptTermsPolicy={setAcceptTermsPolicy}
            />
          </motion.div>
        )}

        <NextOrSignupBtn
          acceptTermsPolicy={acceptTermsPolicy}
          setOpenSection={setOpenSection}
          totalSection={3}
          openSection={openSection}
        />
      </IDForm>
    </>
  );
};

export default FinderSignUp;
