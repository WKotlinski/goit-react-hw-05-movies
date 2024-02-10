import { useEffect, useState } from "react";

import axios from "axios";

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchTrends = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/day?api_key=f538ea2fb2bd149bcd5c773b9ce949af"
        );
        setMovieList(data.results);
      } catch (error) {
        console.log(error);
        setError("Error fetching data");
      } finally {
        console.log("Data fetched");
        setLoading(false);
        console.log(movieList);
      }
    };
    FetchTrends();
  }, []);

  return (
    <div>
      <h1>Strona główna</h1>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      <ul className="movie-list">
        {movieList.map((movie) => (
          <li key={movie.id}>
            <p>{movie.title}</p>
            {movie.overview}
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
