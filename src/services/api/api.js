const FetchMovie = () => {
  return fetch(
    "https://api.themoviedb.org/3/trending/get-trending/all/day?api_key=4ee679899b95e871f52315315906d996"
  );
};

export { FetchMovie };