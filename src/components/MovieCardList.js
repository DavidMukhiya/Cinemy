import React, {useEffect, useState} from 'react'
import { Row, Col } from 'reactstrap'
import { MOVIES } from '../MOVIES'
import MovieService from '../services/MovieService'
import SimpleCard from './SimpleCard'

const MovieCardList = ({setMovieId}) => {
  const [MOVIES, setMOVIES] = useState([]);

  useEffect(()=>{
    MovieService.getAllMovies().then((response)=>{
        setMOVIES(response.data)
        console.log(response.data);
    }).catch(error =>{
      console.log(error);
    })
    
  },[])

  return (
    <>
      <Row>
        {MOVIES.map((movie)=>{
          return (
            <Col xs='4' sm='4' md='4' xl='4' key={movie.id} onClick={()=>setMovieId(movie.id)} >
              <SimpleCard movie = {movie}/>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default MovieCardList