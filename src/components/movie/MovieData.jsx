import axios from "../../axios";
import { useEffect, useState } from "react";
import requests from "../../Request";

const MovieData = (page) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  function sleeper(ms) {
    return function (x) {
      return new Promise((resolve) => setTimeout(() => resolve(x), ms));
    };
  }

  useEffect(() => {
    setLoading(true);
    async function fetch(page) {
      try {
        await axios
          .get(`${requests.movie.Original}&page=${page}`)
          .then(sleeper(0))
          .then((res) => {
            setMovies((prev) => {
              return [...new Set([...prev, ...res.data.results])];
            });
            setHasMore(res.data.results.length > 0);
            setLoading(false);
          });
      } catch (err) {
        console.log("Data gagal", err);
      }
    }
    fetch(page);
  }, [page]);

  return { loading, movies, hasMore };
};

export default MovieData;
