import React from "react";
import ComparingTwoProductsImformations from "./ComparingTwoProductsImformations";
import ProductPhoto from "./ProductPhoto";
import { Link } from "react-router-dom";

export default function ComparingProducts(props) {
  let laptop = [];
  let mobile = [];
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
            imageUrl1={
              inputEditProductObj[props.state2][props.state[props.state.length - 2]][2]
            }
            imageUrl2={
              inputEditProductObj[props.state2][props.state[props.state.length - 2]][3]
            }
            imageUrl3={
              inputEditProductObj[props.state2][props.state[props.state.length - 2]][4]
            }
            // className="d-block w-100"
            width="50"
          />
        </div>
        <div className="inRight bg-dark my-3">
          <ProductPhoto
            imageUrl1={
              inputEditProductObj[props.state2][props.state[props.state.length - 1]][2]
            }
            imageUrl2={
              inputEditProductObj[props.state2][props.state[props.state.length - 1]][3]
            }
            imageUrl3={
              inputEditProductObj[props.state2][props.state[props.state.length - 1]][4]
            }
            // className="d-block w-100"
            width="50"
          />
        </div>
      </div>
      <div className="container comparingProductDetails my-4">
        <div className="leftProductInfo text-light bg-dark">
          <ComparingTwoProductsImformations state2={props.state2}
            state={props.state[props.state.length - 2]}
          />
        </div>
        <div className="rightProductInfo text-light bg-dark">
          <ComparingTwoProductsImformations state2={props.state2}
            state={props.state[props.state.length - 1]}
          />
        </div>
      </div>
      <div className="container comparingProductDetails my-4">
        <div className="leftProductInfo2 text-light bg-dark">
          <iframe
            style={{ width: "100%", height: "100%" }}
            src={`${
              inputEditProductObj[props.state2][props.state[props.state.length - 2]][12]
            }`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="rightProductInfo2 text-light bg-dark">
          <iframe
            style={{ width: "100%", height: "100%" }}
            src={`${
              inputEditProductObj[props.state2][props.state[props.state.length - 1]][12]
            }`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="container comparingProductDetails my-4">
        <div className="leftProductInfo text-light bg-dark">
          <div className="container my-3">
            <a href="#" className="btn btn-success">
              Buy now
            </a>
          </div>
        </div>
        <div className="rightProductInfo text-light bg-dark">
          <div className="container my-3">
            <a href="#" className="btn btn-success">
              Buy now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
