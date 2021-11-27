function FetchMovie(movieId, type = "") {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}${type}?api_key=4ee679899b95e871f52315315906d996&language=en-US`
  );
}

export { FetchMovie };
