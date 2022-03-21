import React from "react";

export default function ProductPhoto() {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
        <center><img src="/Images/macBookAir-removebg-preview.png" class="d-block w-50" alt="..." /></center>
        </div>
        <div class="carousel-item">
        <center><img src="/Images/macBookAir2-removebg-preview.png" class="d-block w-50" alt="..." /></center>
        </div>
        <div class="carousel-item">
          <center><img src="/Images/macBookAir3-removebg-preview.png" class="d-block w-50" alt="..." /></center>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
