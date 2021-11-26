import { TrendingMovies } from "../trendingmovies";

function HomePage() {
  return (
    <>
      <div>
        <span>Home</span>
        <span>Movie</span>
      </div>
      <ul>
        <TrendingMovies />
      </ul>
    </>
  );
}

export { HomePage };
