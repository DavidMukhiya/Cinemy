import React from 'react'
import { Row, Col } from 'reactstrap'
import { MOVIES } from '../MOVIES'
import SimpleCard from './SimpleCard'

const MovieCardList = () => {
  return (
    <>
      <Row>
        {MOVIES.map((movie)=>{
          return (
            <Col xs='4' sm='4' md='4' xl='4' key={movie.id}>
              <SimpleCard movie = {movie}/>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default MovieCardList