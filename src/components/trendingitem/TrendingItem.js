import React, { useState, useEffect } from "react";
import { FetchMovie } from "../../services/api/api";

const TrendingItem = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    FetchMovie()
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.results);
      });
    console.log(movies);
  });

  return (
    <>
      {movies.map(({ id, original_title }) => (
        <li key={id}>{original_title}</li>
      ))}
    </>
  );
};

export { TrendingItem };
