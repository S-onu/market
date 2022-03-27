import React from "react";
import ProductPhoto from "./ProductPhoto";

export default function Products(props) {
  let inputValues = localStorage.getItem("inputValues");
  let inputEditProductObj;
  if (inputValues == null) {
    inputEditProductObj = [];
  } else {
    inputEditProductObj = JSON.parse(inputValues);
  }
  return (
    <div className="card bg-dark text-light my-2">
      <div className="card-body">
        <h4 className="card-title">
          {inputEditProductObj[props.state0][props.NoOfProducts][0]}.{" "}
          {inputEditProductObj[props.state0][props.NoOfProducts][1]}
        </h4>
        <ProductPhoto
          imageUrl1={inputEditProductObj[props.state0][props.NoOfProducts][2]}
          imageUrl2={inputEditProductObj[props.state0][props.NoOfProducts][3]}
          imageUrl3={inputEditProductObj[props.state0][props.NoOfProducts][4]}
          width="50"
        />

        <h4 className="text-light">
          ₹ {inputEditProductObj[props.state0][props.NoOfProducts][5]}
        </h4>

        <div
          className="accordion myAccordion my-3 accordion-flush"
          id="accordionFlushExample"
          onClick={() => {
            props.runFunc();
          }}
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
              className="accordion-collapse py-2 collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
              style={{backgroundColor:"#30363c"}}
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
                      <div>{inputEditProductObj[props.state0][props.NoOfProducts][1]}</div>
                      <div>{inputEditProductObj[props.state0][props.NoOfProducts][6]}</div>
                      <div>{inputEditProductObj[props.state0][props.NoOfProducts][7]}</div>
                      <div>{inputEditProductObj[props.state0][props.NoOfProducts][8]}</div>
                      <div>{inputEditProductObj[props.state0][props.NoOfProducts][9]}</div>
                      <div>
                        {inputEditProductObj[props.state0][props.NoOfProducts][10]}
                      </div>
                      <div>
                        {inputEditProductObj[props.state0][props.NoOfProducts][11]}
                      </div>
                    </div>
                  </div>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button
                      className="btn compareBTN btn-outline-light me-md-2"
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
