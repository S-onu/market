import React from "react";
import ProductPhoto from "./ProductPhoto";

export default function Products() {
  return (
    <div class="card bg-dark text-light">
      <div class="card-header">Featured</div>
      <div class="card-body">
        <h4 class="card-title">1. MACBOOK AIR</h4>
        <ProductPhoto />

        <h4 className="text-light">₹92,900.00 - ₹1,17,900.00</h4>

        <div class="accordion my-3 accordion-flush" id="accordionFlushExample">
          <div class="accordion-item bg-dark">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button bg-dark text-light collapsed"
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
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <ul class="nav nav-pills m-3 mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
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
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
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
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane mx-3 fade show active"
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
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-outline-light me-md-2" type="button">
                      Add to compare
                    </button>
                  </div>
                </div>
                <div
                  class="tab-pane mx-3 fade"
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
        <a href="#" class="btn btn-outline-success">
          Buy now
        </a>
      </div>
    </div>
  );
}
