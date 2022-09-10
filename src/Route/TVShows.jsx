import { motion } from "framer-motion";
import HeroTV from "../components/Hero/HeroTV";
import pageVariants from "../components/pageVariants";

const TVShows = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="padtop"
    >
      <HeroTV />
    </motion.div>
  );
};

export default TVShows;
