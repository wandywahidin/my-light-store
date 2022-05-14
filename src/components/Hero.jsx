import React from "react";
import Products from "./Products";

const Hero = () => {
  return (
    <div className="row">
      <div className="col-sm-12 hero">
        <div className="card bg-dark text-white border-0">
          <img
            src="/assets/bg.jpg"
            className="card-img"
            alt="Background"
            height="600px"
            width="100vw"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 mb-0 fw-bold ">
                NEW LIGHT ARRIVALS
              </h5>
              <p className="card-text lead fs-1">CHECK OUT ALL THE LIGHT</p>
            </div>
          </div>
        </div>
        <Products />
      </div>
    </div>
  );
};

export default Hero;
