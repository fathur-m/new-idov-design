import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const RowCard = (props) => {
  const { data, category } = props;
  const [arrow, setArrow] = useState(false);
  const [arrowHover, setArrowHover] = useState(false);
  const divRef = useRef();
  const base_url = "https://image.tmdb.org/t/p/original/";
  const navigate = useNavigate();

  const nextBtn = () => {
    const nextVal = divRef.current.offsetWidth - 64;
    divRef.current.scrollBy({
      top: 0,
      left: nextVal,
      behavior: "smooth",
    });
  };
  const prevBtn = () => {
    const nextVal = divRef.current.offsetWidth - 64;
    divRef.current.scrollBy({
      top: 0,
      left: -nextVal,
      behavior: "smooth",
    });
  };
  const scrollDiv = () => {
    if (divRef.current.scrollLeft > 0) {
      setArrow(true);
    } else {
      setArrow(false);
    }
  };
  useEffect(() => {
    const refValue = divRef.current;
    refValue.addEventListener("scroll", scrollDiv);
    return () => refValue.removeEventListener("scroll", scrollDiv);
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => setArrowHover(true)}
      onMouseLeave={() => setArrowHover(false)}
    >
      <div
        ref={divRef}
        className="flex overflow-x-scroll overflow-y-hidden scrollbar relative gap-4"
      >
        {data?.map((item) => (
          <motion.div
            onClick={() => navigate(`/${category}/${item.id}`)}
            whileHover={{ scale: 1.1 }}
            key={item.id}
            className="rounded-lg flex w-full h-full min-w-[200px] overflow-hidden cursor-pointer"
          >
            <LazyLoadImage
              className="w-full h-full object-cover"
              effect="opacity"
              src={`${base_url}${item.backdrop_path || item.poster_path}`}
              alt={item.title}
              threshold={100}
              width={200}
              height={100}
            />
          </motion.div>
        ))}
      </div>
      <div className="absolute right-0 h-full top-0 w-16 bg-gradient-to-r from-ctm-black/0 to-ctm-black"></div>
      {arrowHover && (
        <>
          {arrow && (
            <div className="absolute left-0 h-full top-0 w-16 bg-gradient-to-l from-ctm-black/0 to-ctm-black"></div>
          )}
          <button
            onClick={nextBtn}
            className="absolute right-2 top-1/2 -translate-y-1/2 text text-4xl"
          >
            <MdOutlineArrowForwardIos />
          </button>
          {arrow && (
            <button
              onClick={prevBtn}
              className="absolute left-2 top-1/2 -translate-y-1/2 text text-4xl"
            >
              <MdOutlineArrowBackIos />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default RowCard;
