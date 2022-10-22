import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CardArticle = ({ car, i }) => {
  return (
    // <div key={i} className="cardArticle">
    //   <div> {car && car.source.name}</div>

    //   <div> {car && car.source.id}</div>

    //   <div> {car && car.author}</div>
    //   <div>{car && car.title} </div>
    //   <a href={car && car.url}> lien</a>
    //   <img src={car.urlToImage} alt={car.urlToImage} />
    //   <div>{car.publishedAt}</div>
    //   <div> {car.content}</div>
    // </div>

    <div>
      <Card style={{ width: "18rem" }} id="container">
        <Card.Img className="imgarticle" variant="top" src={car.urlToImage} />
        <Card.Body className="bakcard">
          <Card.Title>{car && car.source.name}</Card.Title>
          <Card.Text>{car && car.author}</Card.Text>
          <Card.Text>{car.publishedAt}</Card.Text>

          <Link to={`/article/${car.author}`}>
            <Button variant="primary" className="btninfo">
              Info
            </Button>
          </Link>
          <div> 	⭐	⭐	⭐	⭐	⭐</div>
        </Card.Body>
      </Card>
    </div>
  );
};
