import "./App.css";
import { lazy, Suspense } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/navigation";

// import { HomePage } from "./views/HomePage";
// import { MoviesPage } from "./views/MoviesPage";
// import { MovieDetailsPage } from "./views/MovieDetailsPage";
// import { Cast } from "./views/Cast";
// import { Reviews } from "./views/Reviews";

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: "movie-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);
const Cast = lazy(() => import("./views/Cast" /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import("./views/Reviews" /* webpackChunkName: "reviews" */)
);

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<>...</>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
