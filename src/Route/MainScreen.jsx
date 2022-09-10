import Hero from "../components/Hero/Hero";
import Row from "../components/Row/Row";
import requests from "../Api/Request";
import { motion } from "framer-motion";
import pageVariants from "../components/pageVariants";

const MainScreen = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <Hero />
      <div className="divider mb-12"></div>
      <Row title="Film Populer" Url={requests.movie.Popular} category="movie" />
      <Row title="Serial TV Populer" Url={requests.tv.Popular} category="tv" />
      <Row
        title="Film yang akan datang"
        Url={requests.movie.UpComing}
        category="movie"
      />
      <Row
        title="Acara TV berperingkat teratas"
        Url={requests.tv.TopRated}
        category="tv"
      />
      <Row title="Sedang Tayang" Url={requests.tv.OnAir} category="tv" />
      <div className="divider mt-8"></div>
    </motion.div>
  );
};

export default MainScreen;
