import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { HomePage } from "./views/HomePage";
import { MoviesPage } from "./views/MoviesPage";
import { MovieDetailsPage } from "./views/MovieDetailsPage";
import { NotFoundView } from "./views/NotFoundView";

import { Cast } from "./components/cast";
import { Reviews } from "./components/reviews";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="movies/:movieId/cast" element={<Cast />} />
        <Route path="movies/:movieId/reviews" element={<Reviews />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </>
  );
}

export default App;
