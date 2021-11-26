import "./App.css";

import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/homepage";
import { MoviesPage } from "./components/moviespage";
import { MovieDetailsPage } from "./components/moviedetalspage";
import { Cast } from "./components/cast";
import { Reviews } from "./components/reviews";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exect element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;

// <Route path="movies" element={<MoviesPage />} />
// <Route path="movies/:movieId" element={<MovieDetailsPage />} />
// <Route path="movies/:movieId/cast" element={<Cast />} />
// <Route path="movies/:movieId/reviews" element={<Reviews />} />
