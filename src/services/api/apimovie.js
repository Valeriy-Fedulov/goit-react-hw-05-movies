import axios from "axios";

function FetchMovie(movieId, type = "") {
  axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/${movieId}${type}`;
  axios.defaults.params = {
    api_key: "4ee679899b95e871f52315315906d996",
    language: "en-US",
  };
  return axios();
}

export { FetchMovie };
