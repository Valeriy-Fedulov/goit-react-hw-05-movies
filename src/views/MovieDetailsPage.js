import { useState, useEffect, lazy, Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FetchMovie } from "../services/api";
import s from "../css/MovieDelailsPage.module.css";
import posterImg from "../images/movie.jpeg";
import { Loading } from "../components/loader";
import {
  useParams,
  useLocation,
  useNavigate,
  Routes,
  Route,
} from "react-router";

function MovieDetailsPage() {
  const [movie, setMovie] = useState();
  const { movieId } = useParams(null);
  const location = useLocation();
  const navigate = useNavigate();
  const Cast = lazy(() => import("./Cast" /* webpackChunkName: "cast" */));

  const Reviews = lazy(() =>
    import("./Reviews" /* webpackChunkName: "reviews" */)
  );

  useEffect(() => {
    FetchMovie(movieId).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  return (
    <div>
      <button
        className={s.goback}
        type="button"
        onClick={() =>
          location.state ? navigate(location.state.from) : navigate("/")
        }
      >
        {"<< Go back"}
      </button>
      {movie && (
        <>
          <div className={s.poster}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                  : posterImg
              }
              alt={movie.title}
            />
            <div className={s.title}>
              <h2>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h2>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h2>Genres</h2>
              <ul className={s.genres}>
                {movie.genres.map(({ id, name }) => (
                  <li key={id}>[{name}]</li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
          <h2>Additional information</h2>
          <ul>
            <li>
              <NavLink to="cast" state={location.state}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" state={location.state}>
                Reviews
              </NavLink>
            </li>
          </ul>
          <hr />
          <Outlet />
        </>
      )}

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default MovieDetailsPage;
