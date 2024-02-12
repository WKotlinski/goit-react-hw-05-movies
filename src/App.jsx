import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./components/home/home"));
const Movies = lazy(() => import("./components/movies/movies"));
const MovieDetails = lazy(() =>
  import("./components/moviedetails/moviedetails")
);

const Cast = lazy(() => import("./components/cast/cast"));
const Reviews = lazy(() => import("./components/review/reviews"));

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="header">
          <nav className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
          </nav>
        </header>
        <Suspense fallback={<div>Loading... </div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
