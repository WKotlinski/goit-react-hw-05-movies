import axios from "axios";
import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = "f538ea2fb2bd149bcd5c773b9ce949af";
  const base_url = `https://api.themoviedb.org/3/movie/157336?api_key=${API_KEY}}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(url);
        setData(data);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return [data, isLoading, error];
};
export default useFetch;