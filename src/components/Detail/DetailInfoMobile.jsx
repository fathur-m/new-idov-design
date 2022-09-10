import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BtnMotion from "../BtnMotion";
import { AiFillStar } from "react-icons/ai";
import { UseToggle } from "../Hook/UseToggle";

const DetailInfoMobile = (props) => {
  const { dataInfo, mutedBtn, mutedStatus, detailCategory } = props;
  const { status: read, toggleStatus: setRead } = UseToggle();
  const navigate = useNavigate();
  function getTime(val) {
    let minutes = val % 60;
    let hours = Math.floor(val / 60);
    return `${hours}h ${minutes}m`;
  }
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div className="block mxrem md:hidden">
      <h1 className="text-2xl font-bold text-gray-300">
        {truncate(dataInfo.name || dataInfo.title, 30)}
        <span className="font-normal">
          {" "}
          (
          {dataInfo.release_date?.slice(0, 4) ||
            dataInfo.first_air_date?.slice(0, 4)}
          )
        </span>
      </h1>
      <div className="flex mt-2 flex-wrap items-center gap-2">
        {dataInfo.genres?.map((i, e) => (
          <BtnMotion
            className="text-[12px] bg-ctm-blue/50 rounded-3xl p-2 px-4 cursor-pointer"
            key={e}
          >
            {i.name}
          </BtnMotion>
        ))}
        <BtnMotion className="text-[12px] bg-ctm-blue/50 rounded-3xl p-2 px-4 cursor-pointer">
          {detailCategory.charAt(0).toUpperCase() + detailCategory.slice(1)}
        </BtnMotion>
      </div>
      <div className="flex gap-2 mt-2 items-center">
        <BtnMotion
          btnClick={() => navigate("/login")}
          className="text-base bg-ctm-blue justify-center w-full h-[40px] rounded-full flex gap-2
          items-center"
        >
          Play
          <FaPlay className="text-lg" />
        </BtnMotion>
        <BtnMotion
          btnClick={mutedBtn}
          className={`text-2xl text-ctm-blue/50 bg-ctm-black min-w-[50px] h-[50px] rounded-[50%] flex items-center justify-center border-4 border-ctm-blue/20 ${
            mutedStatus && "border-ctm-blue/80"
          }`}
        >
          {mutedStatus ? (
            <FaVolumeUp className="text-ctm-blue" />
          ) : (
            <FaVolumeMute />
          )}
        </BtnMotion>
      </div>
      <div className="border mt-3 border-ctm-white/10 rounded-full"></div>
      <div className="mt-2">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-gray-400 text-base flex items-center gap-2">
            Ringkasan
          </h1>
          <span className="flex items-center gap-1">
            <AiFillStar className="text-yellow-400" />
            {parseFloat(dataInfo.vote_average).toFixed(1)}
          </span>
        </div>
        {read ? (
          <h1 className="text-gray-400 mt-1 text-sm">
            {dataInfo?.overview}
            <span
              onClick={setRead}
              className="font-bold text-ctm-blue cursor-pointer ml-2"
            >
              read less
            </span>
          </h1>
        ) : (
          <h1 className="text-gray-400 mt-1 text-sm">
            {truncate(dataInfo?.overview, 200)}
            {dataInfo.overview?.length > 200 && (
              <span
                onClick={setRead}
                className="font-bold text-ctm-blue cursor-pointer"
              >
                read more
              </span>
            )}
          </h1>
        )}
      </div>
    </div>
  );
};

export default DetailInfoMobile;
