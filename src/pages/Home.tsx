import { motion } from "framer-motion";
import HeroSection from "../components/home/HeroSection";
import WhoWeAre from "../components/home/WhoWeAre";

const Home = () => {
  return (
    <>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <HeroSection />
        <WhoWeAre />
      </motion.div>
    </>
  );
};

export default Home;
