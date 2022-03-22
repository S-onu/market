import React from "react";

export default function ComparingTwoProductsImformations() {
  return (
      <>
      <div className="container my-3 specs2">
          <h4>Price</h4>
          <h4> : </h4>
          <h4>₹92,900.00 - ₹1,17,900.00</h4>
      </div><hr />
      <div className="container"><h6>Specifications :-</h6></div>
    <div className="container p-3 specs2">
      <div className="col1">
        <div>Model Name</div>
      </div>
      <div className="col2">
        <div> : </div>
      </div>
      <div className="col3">
        <div>MacBook Air</div>
      </div>
      <div className="col1">
        <div>Display</div>
      </div>
      <div className="col2">
        <div> : </div>
      </div>
      <div className="col3">
        <div>33.74 cm / 13.3-inch (diagonal)</div>
      </div>
      <div className="col1">
        <div>Chip</div>
      </div>
      <div className="col2">
        <div> : </div>
      </div>
      <div className="col3">
        <div>Apple M1 chip</div>
      </div>
      <div className="col1">
        <div>Battery and Power</div>
      </div>
      <div className="col2">
        <div> : </div>
      </div>
      <div className="col3">
        <div>Up to 15 hours wireless web, 30W USB-C Power Adapter</div>
      </div>
      <div className="col1">
        <div>Memory</div>
      </div>
      <div className="col2">
        <div> : </div>
      </div>
      <div className="col3">
        <div>8GB, Configurable to: 16GB</div>
      </div>
      <div className="col1">
        <div>Storage</div>
      </div>
      <div className="col2">
        <div> : </div>
      </div>
      <div className="col3">
        <div>256GB, 256GB SSD, Configurable to: 512GB, 1TB or 2TB</div>
      </div>
      <div className="col1">
        <div>Camera</div>
      </div>
      <div className="col2">
        <div> : </div>
      </div>
      <div className="col3">
        <div>720p FaceTime HD camera</div>
      </div>
    </div>
    <div className="container my-3">
    <a href="#" className="btn btn-outline-success">
          Buy now
        </a></div>
    </>
  );
}
