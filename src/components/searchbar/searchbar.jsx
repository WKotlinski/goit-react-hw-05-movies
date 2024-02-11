import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const { data, loading, error } = useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=f538ea2fb2bd149bcd5c773b9ce949af&query=${search}`
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(query);
    onSubmit(query);
  };
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <h1>Search Bar</h1>
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="submitBtn">
          Submit
        </button>
        <input type="text" value={query} onChange={handleInputChange} />
      </form>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default SearchBar;
