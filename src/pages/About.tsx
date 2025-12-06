import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <h1>This is the About Page</h1>
      </motion.div>
    </>
  );
};

export default About;
