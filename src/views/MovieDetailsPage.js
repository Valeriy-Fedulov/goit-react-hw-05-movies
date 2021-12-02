import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router";
import { NavLink, Outlet } from "react-router-dom";
import { FetchMovie } from "../services/api";
import s from "../css/MovieDelailsPage.module.css";
import posterImg from "../images/movie.jpeg";

function MovieDetailsPage() {
  const [movie, setMovie] = useState();
  const { movieId } = useParams(null);
  const location = useLocation();
  const navigate = useNavigate();

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
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
          <hr />
          <Outlet />
        </>
      )}
    </div>
  );
}

export default MovieDetailsPage;
