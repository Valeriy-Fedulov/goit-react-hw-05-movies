import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router";
import { NavLink, Outlet } from "react-router-dom";
import { FetchMovie } from "../services/api/apimovie";

function MovieDetailsPage() {
  const [movie, setMovie] = useState();
  const { movieId } = useParams(null);
  const location = useLocation();
  const navigate = useNavigate();

  console.log(useParams());
  useEffect(() => {
    FetchMovie(movieId).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  return (
    <>
      {console.log(location)}
      <button type="button" onClick={() => navigate(location.state.from)}>
        Back
      </button>
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <ul>
            {movie.genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
          <h2>Additional information</h2>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
}

export default MovieDetailsPage;
