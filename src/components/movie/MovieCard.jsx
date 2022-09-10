import { CircularProgressbar } from "react-circular-progressbar";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";

const MovieCard = (props) => {
  const { movieRef, id, title, poster_path, vote_average } = props;
  const [hover, setHover] = useState(false);

  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div
      ref={movieRef}
      key={id}
      className="max-w-[180px] flex flex-col gap-2 relative cursor-pointer"
    >
      <LazyLoadComponent effect="blur">
        <div className="max-w-[180px] h-[250px] overflow-hidden">
          <motion.img
            onMouseEnter={() => setHover(!hover)}
            whileHover={{ scale: 1.1, borderRadius: 0 }}
            className="w-full h-full rounded-lg rounded-tl-[90px]"
            src={`${base_url}${poster_path}`}
            alt={title}
          />
          <div className="absolute top-6 -right-8 bg-ctm-black rounded-[50%] w-[70px] h-[70px] flex items-center justify-center">
            <span className="font-bold">
              {parseFloat(vote_average).toFixed(1)}
            </span>
            <div className="absolute w-[60px] h-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <CircularProgressbar
                background={true}
                value={vote_average}
                maxValue={10}
                styles={{
                  path: {
                    stroke: "#6a8cbf",
                  },
                  trail: {
                    stroke: "#575757",
                  },
                  background: {
                    fill: "transparent",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </LazyLoadComponent>
      <h1>{title}</h1>
    </div>
  );
};

export default MovieCard;
