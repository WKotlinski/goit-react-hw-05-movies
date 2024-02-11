import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Movies from "./components/movies/movies";
import MovieDetails from "./components/moviedetails/moviedetails";
import Cast from "./components/cast/cast";
import Reviews from "./components/review/reviews";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
