import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import { FetchTrending } from "../services/api/apitrending";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    FetchTrending().then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <ul>
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title ? title : name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default HomePage;
