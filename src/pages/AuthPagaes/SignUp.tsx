import { Button } from "antd";
import { motion } from "framer-motion";
import "./authStyle.css";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

const SignUp = () => {
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
          hgvgh
        </motion.div>
      </motion.div>
    </>
  );
};

export default SignUp;
