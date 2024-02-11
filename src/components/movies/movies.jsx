import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import SearchBar from "../searchbar/searchbar";
import Cast from "../cast/cast";
import Reviews from "../review/reviews";
import { Link } from "react-router-dom";

const Movies = () => {
  const [query, setQuery] = useState("");
  const { data, isLoading, error } = useFetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=f538ea2fb2bd149bcd5c773b9ce949af`
  );

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div>
      <SearchBar onSubmit={handleQueryChange} />
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div className="movies">
        {data &&
          data.results.map((movie) => {
            console.log(movie);
            return (
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                {movie.title}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Movies;
