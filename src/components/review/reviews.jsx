import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Reviews = () => {
  const { movieId } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=f538ea2fb2bd149bcd5c773b9ce949af`;
  const { data, isLoading, error } = useFetch(url);

  return (
    <div>
      {error && <div>{error.message}</div>}
      {isLoading && <div>Loading...</div>}
      {data &&
        (data.results.length > 0 ? (
          <div>
            <ul>
              {data.results.map((review) => (
                <li key={review.id}>
                  <h3>{review.author}</h3>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>No reviews yet</div>
        ))}
    </div>
  );
};

export default Reviews;
