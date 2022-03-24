import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CardsInRows(props) {
  return (
    <Link to="/productsite">
      <Card className="m-2 bg-dark" style={{width: "18rem" }}>
        <Card.Img variant="top" src={props.imageUrlForCard} />
        <Card.Title className="my-1">Grab the offer now</Card.Title>
      </Card>
    </Link>
  );
}
