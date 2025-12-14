import { motion } from "framer-motion";
import Intro from "../components/contact/Intro";

const Contact = () => {
  return (
    <>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Intro />
      </motion.div>
    </>
  );
};

export default Contact;
