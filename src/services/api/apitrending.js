import axios from "axios";

function FetchTrending() {
  axios.defaults.baseURL = "https://api.themoviedb.org/3/trending/movie/day";
  axios.defaults.params = { api_key: "4ee679899b95e871f52315315906d996" };
  return axios();
}

export { FetchTrending };
