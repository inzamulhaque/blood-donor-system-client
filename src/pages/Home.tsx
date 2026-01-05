import { motion } from "framer-motion";
import HeroSection from "../components/home/HeroSection";
import WhoWeAre from "../components/home/WhoWeAre";
import MissionAndVission from "../components/home/MissionAndVission";
import QuestionAnswer from "../components/home/QuestionAnswer";
import WhyDonateBlood from "../components/home/WhyDonateBlood";
import CoverageArea from "../components/home/CoverageArea";

const Home = () => {
  return (
    <>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <HeroSection />
        <WhoWeAre />
        <WhyDonateBlood />
        <CoverageArea />
        <MissionAndVission />
        <QuestionAnswer />
      </motion.div>
    </>
  );
};

export default Home;
