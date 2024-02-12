import { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import css from "./home.module.css";

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrends = async () => {
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
    fetchTrends();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Strona główna</h1>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      <ul className={css.movieList}>
        {movieList.map((movie) => (
          <li key={movie.id} className={css.movieItem}>
            <Link to={`/movies/${movie.id}`} className={css.movieLink}>
              <h2 className={css.title}>{movie.title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
                className={css.movieImage}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
