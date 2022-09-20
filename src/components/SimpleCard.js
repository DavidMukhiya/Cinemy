import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";


import React from "react";

const SimpleCard = ({movie}) => {
    const {image, name} = movie;
  return (
        <Card className="m-5 p-5">
            <CardImg src={image} alt={name} width='100%' height='2600px'/>
            <CardImgOverlay>
                <CardTitle style={{color:"ButtonFace", fontFamily:"cursive", fontSize:"10rem", backgroundColor:"ActiveCaption",}}>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
};

export default SimpleCard;
