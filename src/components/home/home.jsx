import { useEffect, useState } from "react";
import styles from "./home.module.css";

import axios from "axios";
import { Link } from "react-router-dom";

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
      <ul className={movie - list}>
        {movieList.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.title}
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
