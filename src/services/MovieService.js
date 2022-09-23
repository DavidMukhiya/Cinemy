import axios from "axios";

const MOVIE_BASE_API_URL = "http://localhost:8080/movies";

class MovieService {
  getAllMovies() {
    return axios.get(MOVIE_BASE_API_URL);
  }

  addMovie(movie) {
    return axios.post(MOVIE_BASE_API_URL, movie);
  }

  getMovieByID(movieId) {
    return axios.get(MOVIE_BASE_API_URL + "/" + movieId);
  }

  updateMovie(movieId, movie){
    return axios.put(MOVIE_BASE_API_URL + '/'+movieId, movie)
  }
}

export default new MovieService();
