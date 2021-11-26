import { Link } from "react-router-dom";
import { TrendingMovies } from "../trendingmovies";

function HomePage() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movie</Link>
      </nav>
      <ul>
        <TrendingMovies />
      </ul>
    </>
  );
}

export { HomePage };
