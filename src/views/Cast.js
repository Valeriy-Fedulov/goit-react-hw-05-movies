import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FetchMovie } from "../services/api/apimovie";
import profile from "../images/profile.png";

function Cast() {
  const [movie, setMovie] = useState();
  const { movieId } = useParams(null);

  useEffect(() => {
    FetchMovie(movieId, "/credits")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovie(data.cast);
        console.log(data.cast);
      });
  }, [movieId]);

  return (
    <ul>
      {movie &&
        movie.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : profile
              }
              alt={name}
            />
            <span>{name}</span>
            <span>{character}</span>
          </li>
        ))}
    </ul>
  );
}

export { Cast };
