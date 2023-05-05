import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductName = ({ prod }) => {
  const { name, image } = prod.show;
  console.log(prod.show);
  return (
    <div className="">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" height={"250px"} src={image?.original} />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>

          <Button variant="primary">
            <Link className="text-light u-none" to={`/${prod?.score}`}>Go Details</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductName;
