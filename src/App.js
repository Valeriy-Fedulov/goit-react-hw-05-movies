import "./App.css";
import { lazy, Suspense } from "react";
import { Loading } from "./components/loader";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/navigation";

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

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

// <Route path="cast" element={<Cast />} />
// <Route path="reviews" element={<Reviews />} />
