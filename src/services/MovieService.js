import axios from "axios";

const MOVIE_BASE_API_URL = "http://localhost:8080/movies";

class MovieService {
  getAllMovies() {
    return axios.get(MOVIE_BASE_API_URL);
  }
}

export default new MovieService();
