import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1>This is the About Page</h1>
      </motion.div>
    </>
  );
};

export default About;
