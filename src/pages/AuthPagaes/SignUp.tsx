import { Button, Card, Flex, Space, Typography } from "antd";
import { motion } from "framer-motion";
import "./authStyle.css";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useState } from "react";
import DonorSignUp from "../../components/auth/DonorSignUp";
import FinderSignUp from "../../components/auth/FinderSignUp";

type TRole = "donor" | "finder";

const { Text } = Typography;
const SignUp = () => {
  const [selectedRole, setSelectedRole] = useState<TRole>("donor");

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
            <Flex align="center" justify="space-between" gap="small">
              <Text strong style={{ fontSize: 16 }}>
                Register as a
              </Text>

              <Space style={{ marginLeft: "10px" }}>
                <Button
                  type={selectedRole === "donor" ? "primary" : "default"}
                  onClick={() => setSelectedRole("donor")}
                >
                  Donor
                </Button>

                <Button
                  type={selectedRole === "finder" ? "primary" : "default"}
                  onClick={() => setSelectedRole("finder")}
                >
                  Find Only
                </Button>
              </Space>
            </Flex>

            <div style={{ textAlign: "center", margin: "10px 0px" }}>
              {selectedRole === "donor" && (
                <motion.div
                  initial={{ x: 150, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <DonorSignUp />
                </motion.div>
              )}
              {selectedRole === "finder" && (
                <motion.div
                  initial={{ x: 150, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <FinderSignUp />
                </motion.div>
              )}
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SignUp;
