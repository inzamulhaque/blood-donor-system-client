import { Button, Checkbox, Typography } from "antd";
import { useState } from "react";
import type { FieldValues } from "react-hook-form";
import IDForm from "../shared/form/IDForm";
import { Link } from "react-router-dom";
import IDInput from "../shared/form/IDInput";
import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import IDPassword from "../shared/form/IDPassword";
import IDSelect from "../shared/form/IDSelect";
import { UPOZILAS_PABNA_OPTIONS } from "../../constants/upozila";
import { BLOOD_GROUPS_OPTIONS } from "../../constants/bloodGroup";

const { Title, Text } = Typography;

const DonorSignUp = () => {
  const [acceptTermsPolicy, setAcceptTermsPolicy] = useState<
    Record<string, boolean>
  >({ terms: false, policy: false });
  const [openSection, setOpenSection] = useState<number>(1);

  const handleSubmit = (values: FieldValues) => {
    console.log(values);
  };
  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <Title level={2} style={{ margin: 0 }}>
          Join as a Blood Donor
        </Title>
        <Text type="secondary">
          Your one step today can save a life tomorrow.
        </Text>
      </div>

      <IDForm onSubmit={handleSubmit}>
        {openSection === 1 && (
          <>
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
          </>
        )}

        {openSection === 2 && (
          <>
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
          </>
        )}

        {openSection === 3 && (
          <>
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
          </>
        )}

        {openSection === 4 && (
          <>
            <IDSelect
              label="Blood Group"
              name="bloodGroup"
              required={true}
              options={BLOOD_GROUPS_OPTIONS}
              placeholder="Select your blood group"
            />

            <Checkbox
              onChange={() =>
                setAcceptTermsPolicy({
                  policy: !acceptTermsPolicy.policy,
                  terms: acceptTermsPolicy.terms,
                })
              }
            >
              I accept{" "}
              <Link to="/policy" target="_blank">
                our policy
              </Link>
            </Checkbox>

            <Checkbox
              onChange={() =>
                setAcceptTermsPolicy({
                  terms: !acceptTermsPolicy.terms,
                  policy: acceptTermsPolicy.policy,
                })
              }
            >
              I accept{" "}
              <Link to="/terms" target="_blank">
                our terms of service
              </Link>
            </Checkbox>
          </>
        )}

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ width: "100%" }}
        >
          {openSection < 4 && (
            <Button
              onClick={() => setOpenSection(openSection + 1)}
              type="primary"
              block
              style={{
                background: "linear-gradient(135deg, #c62828 0%, #8e24aa 100%)",
                border: "none",
                height: "45px",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "6px",
              }}
            >
              Next <RightOutlined />
            </Button>
          )}

          {openSection == 4 && (
            <Button
              onClick={() => setOpenSection(1)}
              type="primary"
              disabled={!acceptTermsPolicy.policy || !acceptTermsPolicy.terms}
              htmlType="submit"
              block
              style={{
                background: "linear-gradient(135deg, #c62828 0%, #8e24aa 100%)",
                border: "none",
                height: "45px",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "6px",
              }}
            >
              Sign Up
            </Button>
          )}
        </motion.div>

        <div style={{ textAlign: "center" }}>
          <Text type="secondary">Already have an account? </Text>
          <Link to="/signin" style={{ color: "#c62828", fontWeight: "600" }}>
            Sign In now
          </Link>
        </div>
      </IDForm>
    </>
  );
};

export default DonorSignUp;
