import { useParams } from "react-router-dom";
import UseDetail from "../components/Hook/UseDetail";
import { motion } from "framer-motion";
import pageVariants from "../components/pageVariants";
import VideoPlayer from "../components/VideoPlayer";
import DetailInfo from "../components/Detail/DetailInfo";
import { useState } from "react";
import DetailInfoMobile from "../components/Detail/DetailInfoMobile";
import Loading from "../components/Loading";
import DetailCreditMobile from "../components/Detail/DetailCreditMobile";
import Row from "../components/Row/Row";
import requests from "../Api/Request";

const Detail = () => {
  const { category, id } = useParams();
  const { data, loading, error, base_url } = UseDetail(category, id);
  const [muted, setMuted] = useState(false);

  if (error) {
    return null;
  }

  return (
    <motion.div
      className="h-full"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div className="relative h-full">
          <VideoPlayer videoData={data} muteStatus={muted} urlImg={base_url} />
          <div className="relative z-10 flex flex-col pt-[250px]">
            <DetailInfo
              dataInfo={data}
              mutedBtn={() => setMuted(!muted)}
              mutedStatus={muted}
              detailCategory={category}
              detailId={id}
              baseUrl={base_url}
            />
            <DetailInfoMobile
              dataInfo={data}
              mutedBtn={() => setMuted(!muted)}
              mutedStatus={muted}
              detailCategory={category}
            />
            <DetailCreditMobile creditCategory={category} creditId={id} />
            <Row
              title="Rekomendasi"
              category="movie"
              Url={requests.Similiar(id, category)}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Detail;
