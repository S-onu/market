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
  console.log(inputEditProductObj);
  return (
    <>
      <div className="container">
        <div id="contentId" className="my-3">
          <Products />
          {inputEditProductObj.map(() => {
            return <Products />;
          })}
        </div>
      </div>
    </>
  );
}
