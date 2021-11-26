import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FetchMovies } from "../../services/api/api";

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  useEffect(() => {
    FetchMovies()
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title ? title : name}</Link>
        </li>
      ))}
    </>
  );
};

export { TrendingMovies };
