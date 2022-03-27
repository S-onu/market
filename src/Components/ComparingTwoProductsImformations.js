import React from "react";

export default function ComparingTwoProductsImformations(props) {
  // let laptop = []
  // let mobile = []
  let inputValues = localStorage.getItem("inputValues");
  // let inputEditProductObj;
  // if (inputValues == null) {
  // inputEditProductObj = [laptop, mobile];
  // } else {
  let inputEditProductObj = JSON.parse(inputValues);
  // }
  return (
    <>
      <div className="container my-3 specs2">
        <h4>Price</h4>
        <h4> : </h4>
        <h4>₹ {inputEditProductObj[props.state2][props.state][5]}</h4>
      </div>
      <hr />
      <div className="container">
        <h6>Specifications :-</h6>
      </div>
      <div className="container p-3 specs2">
        <div className="col1">
          <div>Model Name</div>
        </div>
        <div className="col2">
          <div> : </div>
        </div>
        <div className="col3">
          <div>{inputEditProductObj[props.state2][props.state][1]}</div>
        </div>
        <div className="col1">
          <div>Display</div>
        </div>
        <div className="col2">
          <div> : </div>
        </div>
        <div className="col3">
          <div>{inputEditProductObj[props.state2][props.state][6]}</div>
        </div>
        <div className="col1">
          <div>Chip</div>
        </div>
        <div className="col2">
          <div> : </div>
        </div>
        <div className="col3">
          <div>{inputEditProductObj[props.state2][props.state][7]}</div>
        </div>
        <div className="col1">
          <div>Battery and Power</div>
        </div>
        <div className="col2">
          <div> : </div>
        </div>
        <div className="col3">
          <div>{inputEditProductObj[props.state2][props.state][8]}</div>
        </div>
        <div className="col1">
          <div>Memory</div>
        </div>
        <div className="col2">
          <div> : </div>
        </div>
        <div className="col3">
          <div>{inputEditProductObj[props.state2][props.state][9]}</div>
        </div>
        <div className="col1">
          <div>Storage</div>
        </div>
        <div className="col2">
          <div> : </div>
        </div>
        <div className="col3">
          <div>{inputEditProductObj[props.state2][props.state][10]}</div>
        </div>
        <div className="col1">
          <div>Camera</div>
        </div>
        <div className="col2">
          <div> : </div>
        </div>
        <div className="col3">
          <div>{inputEditProductObj[props.state2][props.state][11]}</div>
        </div>
      </div>
    </>
  );
}
