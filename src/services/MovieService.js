import axios from "axios";

const MOVIE_BASE_API_URL = "http://localhost:8080/movies";

class MovieService {
  getAllMovies() {
    return axios.get(MOVIE_BASE_API_URL)
  }

  addMovie(movie){
    return axios.post(MOVIE_BASE_API_URL, movie)
  }

  getEmployeByID(movieId){
    return axios.get(MOVIE_BASE_API_URL + '/' +movieId);
  }
}

export default new MovieService();
