import React from "react";
import { motion } from "framer-motion";
import pageVariants from "../components/pageVariants";

const Movies = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div
        className="padtop relative"
        style={{
          backgroundImage: "url(https://wallpaperaccess.com/full/752715.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay"></div>
        <div className="mxrem min-h-[300px] z-10 relative flex items-center">
          <h1 className="text-[48px] font-light">Temukan Film Favoritmu</h1>
        </div>
      </div>
      <div className="divider"></div>
      <div className="my-16"></div>
    </motion.div>
  );
};

export default Movies;
