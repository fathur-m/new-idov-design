import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { UseToggle } from "./Hook/UseToggle";

const VideoPlayer = (props) => {
  const { videoData, muteStatus, urlImg } = props;
  const [vidKey, setVidKey] = useState(0);
  const { status: error, toggleStatus: setError } = UseToggle();
  const length = videoData.videos?.results.length - 1;
  const getVidKey = () => {
    setVidKey((prev) => prev + 1);
  };

  useEffect(() => {
    if (vidKey === length || videoData.videos?.results.length === 0) {
      setError();
    }
  }, [vidKey]);

  return (
    <div className="absolute top-0 left-0 w-screen h-[50vh] md:h-[70vh]">
      <div className="relative h-full w-full bg-ctm-black flex items-center">
        <div className="overlay-detail z-10"></div>
        {error ? (
          <div
            style={{
              backgroundImage: `url(${urlImg + videoData.backdrop_path})`,
            }}
            className="w-full h-full"
          ></div>
        ) : (
          <ReactPlayer
            className="absolute top-0 left-0 w-full h-full"
            playsinline={true}
            muted={muteStatus ? false : true}
            playing={true}
            url={`https://www.youtube-nocookie.com/embed/${videoData.videos?.results[vidKey]?.key}&rel=0&amp;showinfo=0`}
            width="100%"
            height="100%"
            loop={true}
            onError={getVidKey}
            controls={false}
          />
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
