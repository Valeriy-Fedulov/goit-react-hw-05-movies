import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FetchTrending } from "../services/api/apitrending";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    FetchTrending().then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <ul>
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title ? title : name}</Link>
        </li>
      ))}
    </ul>
  );
}

export { HomePage };
