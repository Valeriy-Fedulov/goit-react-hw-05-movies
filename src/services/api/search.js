import axios from "axios";

function FetchSearch(query) {
  axios.defaults.baseURL = "https://api.themoviedb.org/3/search/movie";
  axios.defaults.params = {
    api_key: "4ee679899b95e871f52315315906d996",
    query: `${query}`,
    language: "en-US",
    page: 1,
    include_adult: false,
  };
  return axios();
}

export { FetchSearch };
