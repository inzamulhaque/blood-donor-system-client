import { Button, Typography } from "antd";
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

const { Title, Text } = Typography;

const DonorSignUp = () => {
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
          </>
        )}

        {openSection === 4 && <>4</>}

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ width: "100%" }}
          onClick={() => setOpenSection(openSection + 1)}
        >
          {openSection <= 4 && (
            <Button
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

          {openSection > 4 && (
            <Button
              type="primary"
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
          <Text type="secondary">Don't have an account? </Text>
          <Link to="/signup" style={{ color: "#c62828", fontWeight: "600" }}>
            Sign up now
          </Link>
        </div>
      </IDForm>
    </>
  );
};

export default DonorSignUp;
