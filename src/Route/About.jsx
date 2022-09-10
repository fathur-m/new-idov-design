import { motion } from "framer-motion";
import pageVariants from "../components/pageVariants";

const About = () => {
  return (
    <motion.div
      className="padtop mxrem"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <h1>About</h1>
    </motion.div>
  );
};

export default About;
