import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Reviews from "../review/reviews";
import Cast from "../cast/cast";
import { useState } from "react";

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
    <div>
      {error && <div>{error.message}</div>}
      {isLoading && <div>Loading...</div>}
      {data && (
        <div>
          <h1>{data.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt=""
          />
          <p>{data.overview}</p>
        </div>
      )}
      <button onClick={toggleReview}>Rewies</button>
      {isReviewOpen && <Reviews movieId={movieId} />}
      <button onClick={toggleCast}>Cast</button>
      {isCastOpen && <Cast movieId={movieId} />}
    </div>
  );
};
export default MovieDetails;
