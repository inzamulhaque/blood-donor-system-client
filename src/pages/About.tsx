import { motion } from "framer-motion";
import Intro from "../components/about/Intro";
import OurStory from "../components/about/OurStory";
import WhatWeDo from "../components/about/WhatWeDo";
import Goal from "../components/about/Goal";

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
        <WhatWeDo />
        <Goal />
      </motion.div>
    </>
  );
};

export default About;
