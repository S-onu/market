import React, { useState } from "react";
import Modal from "./Modal";
import Products from "./Products";
// import Source from "./Components/source.json";

export default function Content(props) {
  let inputValues = localStorage.getItem("inputValues");
  let inputEditProductObj;
  inputEditProductObj = JSON.parse(inputValues);
  let index = -1;
  // Remember that local storage should not be cleared

  const [val, setVal] = useState(0);

  const runFunc2 = () => {
    let readMoreBtn = document.querySelectorAll(".readMoreBtn");
    for (let i = 0; i < readMoreBtn.length; i++) {
      readMoreBtn[i].addEventListener("click", () => {
        setVal(i);
      });
    }
  };

  return (
    <>
      <div className="container">
        <div id="contentId" className="my-3">
          {inputEditProductObj[props.state].map(() => {
            index++;
            return (
              <Products
                runFunc={props.runFunc}
                runFunc2={runFunc2}
                state0={props.state}
                NoOfProducts={index}
              />
            );
          })}
          <Modal val={val} state0={props.state}
                runFunc3={props.runFunc3} />
        </div>
      </div>
    </>
  );
}
