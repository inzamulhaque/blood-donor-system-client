import { motion } from "framer-motion";
import { Spin } from "antd";

const Loader = ({ text = "Loading..." }: { text?: string }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(255,255,255,0.85)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
        }}
      >
        <Spin size="large" />
        <motion.p
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          style={{ marginTop: 12, fontWeight: 500 }}
        >
          {text}
        </motion.p>
      </motion.div>
    </>
  );
};

export default Loader;
