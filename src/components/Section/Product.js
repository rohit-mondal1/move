import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ProductName from "./ProductName";

const Product = () => {
  const [api, setApi] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);

  console.log(api);
  return (
    <div>
      <Row xs={1} md={2} xl={4} lg={3} xxl={4} className="g-4">
        {api.map((prod) => (
          <ProductName prod={prod} />
        ))}
      </Row>
    </div>
  );
};

export default Product;
