import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FetchMovie } from "../services/api/apimovie";

function Reviews() {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams(null);

  useEffect(() => {
    FetchMovie(movieId, "/reviews").then((response) => {
      setMovie(response.data.results);
    });
  }, [movieId]);

  return (
    <ul>
      {movie.length ? (
        movie.map(({ id, author, content }) => (
          <li key={id}>
            <h2>Author: {author}</h2>
            <span>{content}</span>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </ul>
  );
}

export { Reviews };
