import React from "react";
import { motion } from "framer-motion";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

type TNextOrSignupBtnProps = {
  openSection: number;
  setOpenSection: React.Dispatch<React.SetStateAction<number>>;
  totalSection: number;
  acceptTermsPolicy: Record<string, boolean>;
};

const NextOrSignupBtn = ({
  openSection,
  setOpenSection,
  totalSection,
  acceptTermsPolicy,
}: TNextOrSignupBtnProps) => {
  return (
    <>
      {openSection < totalSection && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ width: "100%" }}
        >
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
        </motion.div>
      )}

      {openSection == totalSection && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ width: "100%" }}
        >
          <Button
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
        </motion.div>
      )}
    </>
  );
};

export default NextOrSignupBtn;
