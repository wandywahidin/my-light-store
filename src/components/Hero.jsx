import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img
          src="/assets/bg.jpg"
          class="card-img"
          alt="Background"
          height="600px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 mb-0 fw-bold ">NEW LIGHT ARRIVALS</h5>
            <p class="card-text lead fs-1">
              CHECK OUT ALL THE LIGHT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
