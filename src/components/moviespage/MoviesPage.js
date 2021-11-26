import { Link } from "react-router-dom";

function MoviesPage() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/moviespage">Movie</Link>
    </nav>
  );
}

export { MoviesPage };
