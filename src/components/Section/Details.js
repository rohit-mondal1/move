import React from "react";
import { Button } from "react-bootstrap";
import { useLoaderData, useLocation } from "react-router-dom";

const Details = () => {
  const api = useLoaderData();

  const { pathname } = useLocation();
  const leng = pathname.length;
  const path = pathname.slice(1, leng);

  const found = api.find((element) => element.score == path);
  const data = found.show;
  const { image, name, language, status, weight, summary, rating } = data;
  console.log(data);
  return (
    <div>
      <div className="g-4 my-5 one">
        <div>
          <img src={image.original} alt="" width={"300px"} height={"350px"} />
        </div>
        <div>
          <h3>Name : {name}</h3>
          <h5>Language : {language}</h5>
          <h5>Status : {status}</h5>
          <h5>Weight : {weight}</h5>
          <h5>Rating : {rating.average || 0}</h5>
          <p>{summary}</p>
          <Button variant="primary">Go Details</Button>
        </div>
      </div>
    </div>
  );
};

export default Details;
