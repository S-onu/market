import React from "react";
import ProductPhoto from "./ProductPhoto";

export default function Products() {
  return (
    <div className="card bg-dark text-light my-1">
      <div className="card-body">
        <h4 className="card-title">1. MACBOOK AIR</h4>
        <ProductPhoto
          imageUrl1="/Images/macBookAir-removebg-preview.png"
          imageUrl2="/Images/macBookAir2-removebg-preview.png"
          imageUrl3="/Images/macBookAir3-removebg-preview.png"
        />

        <h4 className="text-light">₹92,900.00 - ₹1,17,900.00</h4>

        <div
          className="accordion my-3 accordion-flush"
          id="accordionFlushExample"
        >
          <div className="accordion-item bg-dark">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button bg-dark text-light collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Read more
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <ul
                className="nav nav-pills m-3 mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Specefications
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Other varients
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane mx-3 fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="container specs">
                    <div className="col1">
                      <div>Model Name</div>
                      <div>Display</div>
                      <div>Chip</div>
                      <div>Battery and Power</div>
                      <div>Memory</div>
                      <div>Storage</div>
                      <div>Camera</div>
                    </div>
                    <div className="col2">
                      <div> : </div>
                      <div> : </div>
                      <div> : </div>
                      <div> : </div>
                      <div> : </div>
                      <div> : </div>
                      <div> : </div>
                    </div>
                    <div className="col3">
                      <div>MacBook Air</div>
                      <div>33.74 cm / 13.3-inch (diagonal)</div>
                      <div>Apple M1 chip</div>
                      <div>
                        Up to 15 hours wireless web, 30W USB-C Power Adapter
                      </div>
                      <div>8GB, Configurable to: 16GB</div>
                      <div>
                        256GB, 256GB SSD, Configurable to: 512GB, 1TB or 2TB
                      </div>
                      <div>720p FaceTime HD camera</div>
                    </div>
                  </div>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button
                      className="btn btn-outline-light me-md-2"
                      type="button"
                    >
                      Add to compare
                    </button>
                  </div>
                </div>
                <div
                  className="tab-pane mx-3 fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  Coming soon
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="btn btn-outline-success">
          Buy now
        </a>
      </div>
    </div>
  );
}
