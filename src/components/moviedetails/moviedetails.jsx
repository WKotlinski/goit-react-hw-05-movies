import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const MovieDetails = () => {
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/?api_key=f538ea2fb2bd149bcd5c773b9ce949af`;
  const [data, isLoading, error] = useFetch(url);
  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {data && (
        <div>
          <h1>{data.title}</h1>
          <p>{data.overview}</p>
        </div>
      )}
    </div>
  );
};
export default MovieDetails;
