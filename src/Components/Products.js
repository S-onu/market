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
          onMouseEnter={() => {
            props.runFunc();
          }}
        >
          <div className="accordion-item bg-dark">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button readMoreBtn bg-dark text-light collapsed"
                type="button"
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                onClick={()=>{props.runFunc2();props.runFunc()}}
              >
                Read more
              </button>
            </h2>
          </div>
        </div>
        <a href="#" className="btn btn-outline-success">
          Buy now
        </a>
      </div>
    </div>
  );
}
