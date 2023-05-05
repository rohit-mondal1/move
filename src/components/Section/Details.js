import React from "react";
import { Button } from "react-bootstrap";
import { useLoaderData, useLocation } from "react-router-dom";

const Details = () => {
  const api = useLoaderData();

  const { pathname } = useLocation();
  const leng = pathname.length;
  const path = pathname.slice(1, leng);

  const found = api.find((element) => element.score == path);
  const data = found?.show;
  const { image, name, language, status, weight, summary, rating } = data;
  // console.log(data);

  const handelSubmit = (e) => {

    const booked = localStorage.getItem("booked");
    console.log(booked);
    if (booked) {
      window.localStorage.setItem("booked", ...booked , JSON.stringify(data) );
    }else{
      window.localStorage.setItem("booked", JSON.stringify([data]));
    }
  };
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

          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Book Now
          </button>

          {/* <!-- Modal --> */}
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    From
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="12" class="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="12"
                        placeholder="name"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="1" class="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        id="1"
                        placeholder="name@example.com"
                      />
                    </div>
                    <button
                      onClick={handelSubmit}
                      type="button"
                      class="btn btn-success px-5"
                    >
                      Submit
                    </button>
                  </form>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
