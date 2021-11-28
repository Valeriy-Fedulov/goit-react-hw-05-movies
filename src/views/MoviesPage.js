import { FetchSearch } from "../services/api/search";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router";

function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {}, [location.search]);

  useEffect(() => {
    location.search &&
      FetchSearch(new URLSearchParams(location.search).get("query")).then(
        (response) => {
          setMovies(response.data.results);
        }
      );
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return setQuery("");

    FetchSearch(query.trim().toLowerCase()).then((response) => {
      setMovies(response.data.results);
    });

    navigate({ ...location, search: `query=${query}` });
    setQuery("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </form>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <NavLink to={{ pathname: `${id}`, state: { from: location } }}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MoviesPage;
