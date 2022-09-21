import { Card, CardImg, CardText } from "reactstrap";

import React from 'react'

const CardDetail = ({movie}) => {
  const{image, name, description} = movie;
  return (
    <Card>
      <CardImg src={image} alt={name}/>
      <CardText>
        {description}
      </CardText>
    </Card>
  )
}

export default CardDetail