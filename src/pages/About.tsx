import { motion } from "framer-motion";
import Intro from "../components/about/Intro";
import OurStory from "../components/about/OurStory";

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
        <Intro />
        <OurStory />
      </motion.div>
    </>
  );
};

export default About;
