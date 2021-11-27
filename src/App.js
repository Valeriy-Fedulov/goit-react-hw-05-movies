import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { HomePage } from "./views/HomePage";
import { MoviesPage } from "./views/MoviesPage";
import { MovieDetailsPage } from "./views/MovieDetailsPage";

import { Cast } from "./views/Cast";
import { Reviews } from "./views/Reviews";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
