import axios from "../../Api/axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../../Api/Request";

const UseDetail = (dataCategory, dataId) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    setLoading(true);
    async function fetch(dataCategory, dataId) {
      try {
        await axios
          .get(
            `/${dataCategory}/${dataId}?api_key=${API_KEY}&append_to_response=videos,images`
          )
          .then((res) => {
            setData(res.data);
            setLoading(false);
          });
      } catch (err) {
        console.log(err);
        setError(true);
      }
    }
    fetch(dataCategory, dataId);
  }, [dataCategory, dataId]);

  return { data, loading, error, base_url };
};

export default UseDetail;
