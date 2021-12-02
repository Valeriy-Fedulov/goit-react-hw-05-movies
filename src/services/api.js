import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = { api_key: "4ee679899b95e871f52315315906d996" };

function FetchTrending() {
  return axios("/trending/movie/day");
}

function FetchMovie(movieId, type = "") {
  return axios(`/movie/${movieId}${type}`, { params: { language: "en-US" } });
}

function FetchSearch(query) {
  return axios("/search/movie", {
    params: {
      query: `${query}`,
      language: "en-US",
      page: 1,
      include_adult: false,
    },
  });
}

export { FetchTrending, FetchSearch, FetchMovie };
