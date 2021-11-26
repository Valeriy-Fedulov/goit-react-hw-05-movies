import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FetchMovies } from "../../services/api/api";

function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    FetchMovies()
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovie(data.results);
        console.log(movie);
      });
  }, []);

  return (
    <>
      {movie.map(({ overview }) => (
        <p>{overview}</p>
      ))}
    </>
  );
}

export { MovieDetailsPage };
