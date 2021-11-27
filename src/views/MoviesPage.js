import { FetchSearch } from "../services/api/search";
import { useState } from "react";
import { Link } from "react-router-dom";

function MoviesPage() {
  const [query, setQuery] = useState();
  const [movies, setMovies] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return setQuery("");

    FetchSearch(query.trim().toLowerCase())
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      });

    setQuery("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </form>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export { MoviesPage };
