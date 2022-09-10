import axios from "../../Api/axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../../Api/Request";

const UseCredits = (category, id) => {
  const [credit, setCredit] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetch(category, id) {
      const res = await axios.get(
        `/${category}/${id}/credits?api_key=${API_KEY}&language=en-US`
      );
      setCredit(res.data);
    }
    fetch(category, id);
  }, [category, id]);

  return { credit, base_url };
};

export default UseCredits;
