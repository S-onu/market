import React from "react";
import Products from "./Products";

export default function Content() {
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
          {/* <Products /> */}
          {inputEditProductObj[0].map(() => {
            index++;
            return <Products NoOfProducts={index} />;
          })}
        </div>
      </div>
    </>
  );
}
