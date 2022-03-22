import React from "react";

export default function ProductPhoto() {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3200">
          <center>
            <img
              src="/Images/macBookAir-removebg-preview.png"
              className="d-block w-50"
              alt="..."
            />
          </center>
        </div>
        <div className="carousel-item" data-bs-interval="3200">
          <center>
            <img
              src="/Images/macBookAir2-removebg-preview.png"
              className="d-block w-50"
              alt="..."
            />
          </center>
        </div>
        <div className="carousel-item" data-bs-interval="3200">
          <center>
            <img
              src="/Images/macBookAir3-removebg-preview.png"
              className="d-block w-50"
              alt="..."
            />
          </center>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bg-dark"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

{
  /* <center><img src="/Images/macBookAir-removebg-preview.png" className="d-block w-50" alt="..." /></center> */
}
