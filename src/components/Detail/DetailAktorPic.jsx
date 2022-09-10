import { motion } from "framer-motion";
import "react-circular-progressbar/dist/styles.css";
import { FaUserAlt } from "react-icons/fa";

const aktorVariants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  in: {
    height: null,
    opacity: 1,
  },
  out: {
    height: 0,
    opacity: 0,
  },
};

const DetailAktor = (props) => {
  const { status, dataAktor, aktorId, imgUrl } = props;

  const data = dataAktor?.filter((item) => item.id === aktorId);

  return (
    <motion.div
      animate={status ? "in" : "out"}
      variants={aktorVariants}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      {data?.map((aktor) => (
        <div
          key={aktor.id}
          className="py-4 flex flex-col justify-center items-center"
        >
          <div className="w-[40%] min-h-[210px]">
            {aktor.profile_path ? (
              <img
                className="w-full h-full rounded-lg"
                src={imgUrl + aktor.profile_path}
                alt={aktor.name}
              />
            ) : (
              <FaUserAlt className="rounded-lg h-full w-full p-2 border border-ctm-blue/20 text-ctm-blue/50" />
            )}
          </div>
          <h1 className="font-bold pt-2 text-center">{aktor.name}</h1>
          <h1 className="text-sm text-center">{aktor.character}</h1>
        </div>
      ))}
    </motion.div>
  );
};

export default DetailAktor;
