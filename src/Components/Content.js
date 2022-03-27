import React from "react";
import Products from "./Products";
// import Source from "./Components/source.json";

export default function Content(props) {
  // localStorage.clear();
  // let laptop = [];
  // let mobile = [];
  let inputValues = localStorage.getItem("inputValues");
  let inputEditProductObj;
  // if (inputValues == null) {
    // inputEditProductObj = [laptop, mobile];
  // } else {
    inputEditProductObj = JSON.parse(inputValues);
  // }
  // inputEditProductObj[0] = Source.articles1
  // inputEditProductObj[1] = Source.articles2
  // localStorage.setItem("inputValues", JSON.stringify(inputEditProductObj));
  let index = -1;
  // Remember that local storage should not be cleared
  return (
    <>
      <div className="container">
        <div id="contentId" className="my-3">
          {inputEditProductObj[props.state].map(() => {
            index++;
            return <Products runFunc={props.runFunc} state0={props.state} NoOfProducts={index} />;
          })}
        </div>
      </div>
    </>
  );
}
