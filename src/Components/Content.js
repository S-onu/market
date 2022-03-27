import React from "react";
import Products from "./Products";
// import Source from "./Components/source.json";

export default function Content(props) {
  let inputValues = localStorage.getItem("inputValues");
  let inputEditProductObj;
  inputEditProductObj = JSON.parse(inputValues);
  let index = -1;
  // Remember that local storage should not be cleared
  return (
    <>
      <div className="container">
        <div id="contentId" className="my-3">
          {inputEditProductObj[props.state].map(() => {
            index++;
            return (
              <Products
                runFunc={props.runFunc}
                state0={props.state}
                NoOfProducts={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
