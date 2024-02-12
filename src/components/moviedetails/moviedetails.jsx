import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Reviews from "../review/reviews";
import Cast from "../cast/cast";
import { useState } from "react";
import css from "./moviedetails.module.css";
const MovieDetails = () => {
  const { movieId } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=f538ea2fb2bd149bcd5c773b9ce949af`;
  const { data, isLoading, error } = useFetch(url);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isCastOpen, setIsCastOpen] = useState(false);

  const toggleReview = () => {
    setIsReviewOpen(!isReviewOpen);
  };
  const toggleCast = () => {
    setIsCastOpen(!isCastOpen);
  };

  return (
    <div className={css.container}>
      {error && <div className={css.error}>{error.message}</div>}
      {isLoading && <div className={css.loading}>Loading...</div>}
      {data && (
        <div className={css.movieDetails}>
          <h1 className={css.movieTitle}>{data.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt=""
            className={css.movieImage}
          />
          <p className={css.movieOverview}>{data.overview}</p>
        </div>
      )}
      <button onClick={toggleReview} className={css.button}>
        Reviews
      </button>
      {isReviewOpen && <Reviews movieId={movieId} />}
      <button onClick={toggleCast} className={css.button}>
        Cast
      </button>
      {isCastOpen && <Cast movieId={movieId} />}
    </div>
  );
};
export default MovieDetails;
