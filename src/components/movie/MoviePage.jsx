import { useCallback, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import MovieData from "./MovieData";

const MoviePage = () => {
  const [page, setPage] = useState(1);
  const [pageReached, setPageReached] = useState(false);
  const { movies, hasMore, loading } = MovieData(page);

  const observer = useRef();

  const lastMoviesRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      if (page === 10) {
        setPageReached(true);
      } else {
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPage((prev) => prev + 1);
          }
        });
        if (node) observer.current.observe(node);
      }
    },
    [loading, hasMore, page, setPage]
  );

  console.log(movies);

  return (
    <div className="mxrem flex flex-wrap gap-16 justify-center">
      {movies.map((movie, index) => {
        if (movies.length === index) {
          return (
            <MovieCard
              key={index}
              movieRef={lastMoviesRef}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
            />
          );
        } else {
          return (
            <MovieCard
              key={index}
              movieRef={lastMoviesRef}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
            />
          );
        }
      })}
      {pageReached ? (
        <div className="h-[300px] flex items-center">
          <h1>Page reached limit 20</h1>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default MoviePage;
