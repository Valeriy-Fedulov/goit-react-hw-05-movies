function FetchSearch(query) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=4ee679899b95e871f52315315906d996&language=en-US&query=${query}&page=1&include_adult=false`
  );
}

export { FetchSearch };
