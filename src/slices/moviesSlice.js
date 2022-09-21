import { MOVIES } from "../MOVIES";

export const selectAllMovies = ()=>{
    return MOVIES;
}

export const selectMovieById = (id) => {
    return MOVIES.find((movie)=> movie.id == id);
}