export const API_KEY = process.env.REACT_APP_API_KEY_MOVIE;

const requests = {
  Similiar: (id, category) => `/${category}/${id}/similar?api_key=${API_KEY}`,
  tv: {
    Original: `/discover/tv?api_key=${API_KEY}&language=en-US`,
    Genre: `/genre/tv/list?api_key=${API_KEY}&language=en-US`,
    Popular: `/tv/popular?api_key=${API_KEY}&language=en-US`,
    TopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
    OnAir: `/tv/on_the_air?api_key=${API_KEY}&language=en-US`,
    Action: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  },
  movie: {
    Original: `/discover/movie?api_key=${API_KEY}&language=en-US`,
    Genre: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    Popular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    UpComing: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  },
};

let genreList = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

export default requests;

// fetchTvOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
// fetchTvPopular: `/tv/popular?api_key=${API_KEY}&language=en-US`,
// fetchTopRatedTv: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
// fetchTvOnAir: `/tv/on_the_air?api_key=${API_KEY}&language=en-US`,
// fetchSimilar: `/similar?api_key=${API_KEY}&language=en-US`,
// fetchGenre: `/genre/movie/list?api_key=${API_KEY}&language=id`,
// fetchMovieUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
// fetchMoviePopular: `/movie/popular?api_key=${API_KEY}&language=en-Us`,
// fetchMovieNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US`,
// fetchTopRatedMovie: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
// fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
// fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
// fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
// fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
// fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
