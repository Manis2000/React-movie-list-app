import React from 'react'
import {Card, Button} from "react-bootstrap";

export const CustomCard = ({movie, func}) => {
    console.log(movie);

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie?.Poster }/>
    <Card.Body>
      <Card.Title>{movie?.Title}</Card.Title>
      <Card.Text>
        Rating: {movie?.imdbRating}
      </Card.Text>
      <Card.Text>
       Year:  {movie?.Year}
      </Card.Text>

      <div className="d-flex justify-content-between">
         <Button onClick = {() => func({...movie, type:"happy"})} variant = "danger"> Happy </Button>
         <Button onClick = {() => func({...movie, type: "lazy"})} variant = "info"> Lazy </Button>
      </div>
      
    </Card.Body>
  </Card>
  )
}
