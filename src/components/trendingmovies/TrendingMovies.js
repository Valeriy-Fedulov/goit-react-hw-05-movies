import React, { useState, useEffect } from "react";
import { FetchMovies } from "../../services/api/api";

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    FetchMovies.then((response) => {
      return response.json();
    }).then((data) => {
      setMovies(data.results);
      console.log(movies);
    });
  }, []);

  return (
    <>
      {movies.map(({ id, title, name }) => (
        <li key={id}>{title ? title : name}</li>
      ))}
    </>
  );
};

export { TrendingMovies };
