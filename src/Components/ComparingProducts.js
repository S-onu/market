import React from "react";
import ComparingTwoProductsImformations from "./ComparingTwoProductsImformations";
import ProductPhoto from "./ProductPhoto";
import {Link} from "react-router-dom";

export default function ComparingProducts(props) {
  let laptop = []
  let mobile = []
  let inputValues = localStorage.getItem("inputValues");
    let inputEditProductObj;
    if (inputValues == null) {
      inputEditProductObj = [laptop, mobile];
    } else {
      inputEditProductObj = JSON.parse(inputValues);
    }
  return (
    <>
    <div className="container my-3 text-center">
      <h1>Design</h1>
    </div>
    <div className="container comparingTwoProducts">
      <div className="inLeft bg-dark my-3">
        <ProductPhoto
          imageUrl1={inputEditProductObj[0][props.state][2]}
          imageUrl2={inputEditProductObj[0][props.state][3]}
          imageUrl3={inputEditProductObj[0][props.state][4]}
          // className="d-block w-100"
          width="100"
        />
      </div>
      <div className="inRight bg-dark my-3">
        <ProductPhoto
          imageUrl1={inputEditProductObj[0][props.state2][2]}
          imageUrl2={inputEditProductObj[0][props.state2][3]}
          imageUrl3={inputEditProductObj[0][props.state2][4]}
          // className="d-block w-100"
          width="100"
        />
      </div>
    </div>
    <div className="container comparingProductDetails my-4">
      <div className="leftProductInfo text-light bg-dark">
        <ComparingTwoProductsImformations state={props.state}/>
      </div>
      <div className="rightProductInfo text-light bg-dark">
        <ComparingTwoProductsImformations  state={props.state2}/>
      </div>
    </div>
    </>
  );
}
