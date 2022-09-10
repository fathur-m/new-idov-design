import axios from "../../Api/axios";
import { useEffect, useState } from "react";

const UseRow = (Url) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    async function fetch(Url) {
      try {
        await axios.get(Url).then((res) => {
          setData(res.data.results);
          setLoading(false);
        });
      } catch (err) {
        console.log(err);
        setError(true);
      }
    }
    fetch(Url);
  }, [Url]);

  return { data, loading, error };
};

export default UseRow;
