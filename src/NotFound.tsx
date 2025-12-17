import { Button } from "antd";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <motion.h1
        initial={{ scale: 0.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          fontSize: "100px",
          fontWeight: "900",
          color: "#ff4d4f",
          margin: 0,
        }}
      >
        404
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          fontSize: "20px",
          marginTop: "10px",
          color: "#444",
        }}
      >
        The page you are looking for does not exist.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ marginTop: "20px" }}
      >
        <Link to="/">
          <Button
            type="primary"
            size="large"
            style={{
              borderRadius: "6px",
              fontWeight: 600,
            }}
          >
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
