import UseCredits from "../Hook/UseCredits";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { UseToggle } from "../Hook/UseToggle";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { motion } from "framer-motion";
import DetailAktorPic from "./DetailAktorPic";
import { useState } from "react";

const arrowVar = {
  initial: {
    rotate: 0,
  },
  open: {
    rotate: 90,
  },
  close: {
    rotate: 0,
  },
};

const DetailCreditMobile = (props) => {
  const { creditCategory, creditId } = props;
  const { credit, base_url } = UseCredits(creditCategory, creditId);
  const { status: open, toggleStatus: setOpen } = UseToggle();
  const [aktorId, setAktorId] = useState(0);

  function getAktorId(val) {
    if (!open) {
      setOpen();
    }
    const id = val;
    setAktorId(id);
  }

  return (
    <div className="my-4 py-4 bg-ctm-blue/10 sm:hidden">
      <div className="mxrem">
        <div className="flex items-center justify-between text-gray-400 font-bold">
          <h1>Aktor</h1>
          <span
            className="flex items-center text-xs font-normal cursor-pointer gap-1"
            onClick={() => {
              if (open) {
                setOpen();
              }
            }}
          >
            {open ? "Tutup Detail" : "Lihat Detail"}
            <motion.span animate={open ? "open" : "close"} variants={arrowVar}>
              <MdOutlineArrowForwardIos className="text-base" />
            </motion.span>
          </span>
        </div>
        <DetailAktorPic
          aktorId={aktorId}
          dataAktor={credit.cast}
          status={open}
          imgUrl={base_url}
        />
        <div className="flex overflow-x-scroll overflow-y-hidden gap-2 pt-2 pb-4">
          {credit.cast?.map((i, key) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={key}
              className="min-w-[60px] flex items-center justify-center cursor-pointer"
              onClick={() => getAktorId(i.id)}
            >
              {i.profile_path ? (
                <LazyLoadImage
                  effect="opacity"
                  className="rounded-lg h-full w-full max-h-[100px]"
                  src={base_url + i.profile_path}
                  alt={i.name}
                />
              ) : (
                <FaUserAlt className="rounded-lg h-full w-full p-2 border border-ctm-blue/20 text-ctm-blue/50" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailCreditMobile;
