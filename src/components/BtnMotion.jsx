import { motion } from "framer-motion";

const BtnMotion = (props) => {
  const { children, className = "", btnClick } = props;
  return (
    <motion.button
      onClick={btnClick}
      className={`${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
};

export default BtnMotion;
