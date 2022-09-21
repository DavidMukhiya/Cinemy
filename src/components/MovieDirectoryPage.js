import { Container, Row, Col } from "reactstrap";
import { useState } from "react";
import MovieDetail from "./MovieDetail";
import MovieCardList from "./MovieCardList";
import { selectMovieById } from "../slices/moviesSlice";

import React from "react";

const MovieDirectoryPage = () => {
  const [movieId, setMovieId] = useState(0);
  const selectedMovie = selectMovieById(movieId);
  return (
    <Container>
      <Row>
        <Col>
          <MovieCardList setMovieId={setMovieId} />
        </Col>
        <Col>
          <MovieDetail movie={selectedMovie} />
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDirectoryPage;
