import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import SearchBar from "../searchbar/searchbar";
import { Link } from "react-router-dom";
import css from "./movies.module.css";

const Movies = () => {
  const [query, setQuery] = useState("");
  const { data, isLoading, error } = useFetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=f538ea2fb2bd149bcd5c773b9ce949af`
  );

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleQueryChange} />
      {isLoading && <div className={css.loading}>Loading...</div>}
      {error && <div className={css.error}>{error}</div>}
      <div className={css.movies}>
        {data &&
          data.results.map((movie) => {
            return (
              <Link
                to={`/movies/${movie.id}`}
                key={movie.id}
                className={css.movieLink}
              >
                {movie.title}
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                  className={css.movieImage}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Movies;
