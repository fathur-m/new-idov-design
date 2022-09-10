import React, { useEffect, useState } from "react";
import HeroImg from "../assets/backdrop2.jpg";
import Iphone from "../assets/iphone.svg";
import Desktop from "../assets/desktop.svg";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";
import { AnimatePresence, motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="overlay top-0 left-0 z-10 w-full relative"
        style={{
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="backlinear"></div>
        <div className="relative z-10 text-center min-h-screen py-[64px] lg:flex flex-col items-center justify-center mxrem">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="lg:text-5xl text-2xl md:text-4xl font-medium text-ctm-white text-center pt-16">
              Selamat Datang di{" "}
              <span className="text-ctm-blue font-bold">IDOV Movie</span>
            </h1>
            <h2 className="text-white text-[20px] md:text-[28px] font-light text-center mt-2">
              Tempat terbaik streaming film favoritmu
            </h2>
            <h1 className="text-center mt-4 text-lg sm:text-2xl md:text-3xl">
              Tonton Dimana Saja
            </h1>
            <button
              onClick={() => navigate("/signup")}
              className="my-4 bg-ctm-green py-2 px-12 text-xl rounded-lg"
            >
              Daftar
            </button>
            <div className="md:flex grid grid-cols-2 items-center justify-center">
              <img
                src={Iphone}
                alt="/"
                className="w-full max-w-md md:max-w-xs lg:absolute left-[5%] bottom-[5%]"
              />
              <img
                src={Desktop}
                alt="/"
                className="w-full max-w-md md:max-w-xs lg:absolute right-[5%] bottom-[100px]"
              />
            </div>
            <h1 className="text-center text-lg">Download Now</h1>
            <img
              src="https://seeklogo.com/images/A/app-store-google-play-logo-4A2747BF5E-seeklogo.com.png"
              alt="/"
              className="max-w-[180px] mx-auto mt-4 mb-16"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
