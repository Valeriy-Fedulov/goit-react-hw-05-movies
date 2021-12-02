import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FetchMovie } from "../services/api";
import s from "../css/Cast.module.css";
import profile from "../images/profile.png";

function Cast() {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams(null);

  useEffect(() => {
    FetchMovie(movieId, "/credits").then((response) => {
      setMovie(response.data.cast);
    });
  }, [movieId]);

  return (
    <ul className={s.cast}>
      {movie.length ? (
        movie.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              className={s.img}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : profile
              }
              alt={name}
            />
            <span>{name}</span>
            <span>Character: {character}</span>
          </li>
        ))
      ) : (
        <p>We have no information on this film.</p>
      )}
    </ul>
  );
}

export default Cast;
