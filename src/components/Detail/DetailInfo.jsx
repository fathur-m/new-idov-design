import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BtnMotion from "../BtnMotion";
import DetailCredit from "./DetailCredit";
import { data } from "autoprefixer";

const DetailInfo = (props) => {
  const { dataInfo, mutedBtn, mutedStatus, detailCategory, detailId, baseUrl } =
    props;
  const navigate = useNavigate();

  function getTime(val) {
    let minutes = val % 60;
    let hours = Math.floor(val / 60);
    return `${hours}h ${minutes}m`;
  }
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  const dollarUs = Intl.NumberFormat("en-US");

  return (
    <div className="hidden md:block w-full">
      <div className="mxrem">
        <div className="flex gap-4 items-center text-sm">
          {detailCategory == "movie" && (
            <span className="flex items-center gap-2 text-gray-300 bg-ctm-blue text-sm px-2 py-1 rounded-md">
              <BiTime />
              {getTime(dataInfo.runtime)}
            </span>
          )}
          {detailCategory == "tv" && (
            <span>
              <span className="flex gap-1 items-center bg-gray-500 px-2 py-1 rounded-md">
                <span className="">{dataInfo.number_of_seasons}</span>
                <span>Season</span>
              </span>
            </span>
          )}
          <span className="flex gap-1 items-center bg-yellow-400 rounded-md py-1 px-2 text-black">
            {parseFloat(dataInfo.vote_average).toFixed(1)}
            <span>Rating</span>
          </span>
        </div>
        <div className="flex gap-4 mt-2">
          <h1 className="text-4xl font-bold">
            {dataInfo.title || dataInfo.name}{" "}
            <span className="font-normal text-xl">
              (
              {dataInfo.release_date?.slice(0, 4) ||
                dataInfo.first_air_date?.slice(0, 4)}
              )
            </span>
          </h1>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <BtnMotion
            btnClick={() => navigate("/login")}
            className="text-base bg-ctm-blue justify-center h-[40px] w-[150px] rounded-full flex gap-2 items-center"
          >
            Play
            <FaPlay className="text-lg" />
          </BtnMotion>
          {dataInfo.genres?.map((i, e) => (
            <BtnMotion
              className="h-fit text-[12px] bg-ctm-blue/50 rounded-3xl p-2 px-4 cursor-pointer"
              key={e}
            >
              {i.name}
            </BtnMotion>
          ))}
          <BtnMotion
            btnClick={() => navigate(`/${detailCategory}`)}
            className="h-fit text-[12px] bg-ctm-blue/50 rounded-3xl p-2 px-4 cursor-pointer"
          >
            {detailCategory.charAt(0).toUpperCase() + detailCategory.slice(1)}
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
        <div className="flex gap-4 my-4">
          <div className="max-w-[50%] bg-ctm-blue rounded-lg py-2 px-4">
            <h1>{dataInfo?.overview}</h1>
          </div>
        </div>
      </div>
      <DetailCredit
        creditCategory={detailCategory}
        creditId={detailId}
        aktorUrl={baseUrl}
      />
      
    </div>
  );
};

export default DetailInfo;
