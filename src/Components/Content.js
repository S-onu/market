import React from "react";
import Products from "./Products";

export default function Content(props) {
  let inputValues = localStorage.getItem("inputValues");
  let inputEditProductObj;
  if (inputValues == null) {
    inputEditProductObj = [];
  } else {
    inputEditProductObj = JSON.parse(inputValues);
  }
  let index = -1;
  // Remember that local storage should not be cleared
  return (
    <>
      <div className="container">
        <div id="contentId" className="my-3">
          {inputEditProductObj[0].map(() => {
            index++;
            return <Products runFunc={props.runFunc} NoOfProducts={index} />;
          })}
        </div>
      </div>
    </>
  );
}
