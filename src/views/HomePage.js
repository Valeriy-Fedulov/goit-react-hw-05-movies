import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FetchTrending } from "../services/api/apitrending";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log(FetchTrending());
    FetchTrending()
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
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
