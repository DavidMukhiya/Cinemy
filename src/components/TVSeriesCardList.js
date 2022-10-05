import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";
import MovieService from "../services/MovieService";
import SimpleCard from "./SimpleCard";

const Tvseries = ({ setMovieId }) => {
  const [MOVIES, setMOVIES] = useState([]);

  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = () => {
    MovieService.getAllMovies()
      .then((response) => {
        setMOVIES(response.data)
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteMovie = (id) => {
    console.log(id);
    MovieService.deleteMovie(id)
      .then((response) => {
        getAllMovies();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Row>
        {MOVIES.filter((m)=>m.movie===false).map((movie) => {
          return (
            <Col
              xs="4"
              sm="4"
              md="4"
              xl="4"
              key={movie.id}
              onClick={() => setMovieId(movie.id)}
            >
              <SimpleCard movie={movie} />
              <Link className="btn btn-info" to={`/editMovie/${movie.id}`}>
                Update
              </Link>
              <Button
                className="btn btn-danger m-2"
                onClick={() => deleteMovie(movie.id)}
              >
                Delete
              </Button>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Tvseries;
