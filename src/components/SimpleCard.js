import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";


import React from "react";

const SimpleCard = ({movie}) => {
    const {image, name} = movie;
  return (
        <Card className="m-1 p-2">
            <CardImg src={image} alt={name} width='100%'/>
            <CardImgOverlay>
                <CardTitle style={{color:"ButtonFace", fontFamily:"cursive", fontSize:"2rem", backgroundColor:"ActiveCaption",}}>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
};

export default SimpleCard;
