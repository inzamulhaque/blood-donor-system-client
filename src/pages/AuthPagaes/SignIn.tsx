import {
  ArrowLeftOutlined,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Card, Typography } from "antd";
import { motion } from "framer-motion";
import type { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";
import "./authStyle.css";
import IDForm from "../../components/shared/form/IDForm";
import IDInput from "../../components/shared/form/IDInput";
import IDPassword from "../../components/shared/form/IDPassword";
import FormHeader from "../../components/auth/FormHeader";

const { Text } = Typography;

const SignIn = () => {
  const handleSubmit = (values: FieldValues) => {
    console.log(values);
  };

  return (
    <>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="authFormContainer"
      >
        <motion.div
          className="backHomeBtn"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/">
            <Button
              type="text"
              icon={<ArrowLeftOutlined />}
              style={{ color: "white", fontSize: "16px", fontWeight: "500" }}
            >
              Back to Home
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ width: "100%", maxWidth: "450px" }}
        >
          <Card className="authFormCard">
            <FormHeader
              title="Continue Your Mission"
              shortDes="Your presence can make a difference today."
            />

            <IDForm onSubmit={handleSubmit}>
              <IDInput
                label="Email"
                name="email"
                type="email"
                prefix={<MailOutlined />}
                required={true}
              />

              <IDPassword
                label="Password"
                name="password"
                prefix={<LockOutlined />}
                required={true}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "10px",
                }}
              >
                <Link to="/forget-password" style={{ color: "#8e24aa" }}>
                  Forgot Password?
                </Link>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                style={{ width: "100%" }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  style={{
                    background:
                      "linear-gradient(135deg, #c62828 0%, #8e24aa 100%)",
                    border: "none",
                    height: "45px",
                    fontSize: "16px",
                    fontWeight: "600",
                    borderRadius: "6px",
                  }}
                >
                  Sign In
                </Button>
              </motion.div>

              <div style={{ textAlign: "center" }}>
                <Text type="secondary">Don't have an account? </Text>
                <Link
                  to="/signup"
                  style={{ color: "#c62828", fontWeight: "600" }}
                >
                  Sign up now
                </Link>
              </div>
            </IDForm>
          </Card>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SignIn;
