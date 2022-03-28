import React from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function LeftFooterComponent(props) {
  let inputValues = localStorage.getItem("inputValues");
  let inputEditProductObj = JSON.parse(inputValues);
  let gaming = 3
  let editing = 4
  let random = 0
  if(props.showResults2 == 0 || props.showResults2 == 3 || props.showResults2 == 4){
    gaming = 3;
    editing = 4;
    random = 0;
  } 
  else if(props.showResults2 == 1){
    gaming = 5;
  }
  return (
    <div
      style={{
        display: "flex",
        height: "2.4rem",
        justifyContent: "space-between",
      }}
      className="my-1"
    >
      <div style={{ display: "flex" }}>
        <div className="dropdown mx-2">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundColor: "#273034" }}
          >
            Select your Nation
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown mx-2">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundColor: "#273034" }}
          >
            Within price range
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown mx-2">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundColor: "#273034" }}
          >
            Shop in
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown mx-2">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundColor: "#273034" }}
          >
            Within price range
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown mx-2">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundColor: "#273034" }}
          >
            Buying for
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {inputEditProductObj[props.showResults2][0][
              inputEditProductObj[props.showResults2][0].length - 1
            ].map((item) => {
              const checking = () => {
                if (item == "Gaming") {
                  props.goToProductSite(gaming);
                } else if (item == "Editing") {
                  props.goToProductSite(editing);
                } else if (item == "Online classes/meetings") {
                  props.goToProductSite(5);
                } else if (item == "Daily use") {
                  props.goToProductSite(6);
                } else if (item == "Random") {
                  props.goToProductSite(random);
                }
                
              };
              return (
                <li>
                  <span
                    onClick={checking}
                    style={{ cursor: "pointer" }}
                    className="dropdown-item"
                  >
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="mx-3" style={{ display: "flex" }}>
        <div className="d-grid gap-2">
          <Link className="btn btn-outline-info" to="/compare" type="button">
            Compare<span className="badge mx-3 bg-primary rounded-pill">0</span>
          </Link>
        </div>
        <div className="mx-3">
          <Link to="/edit" className="btn btn-primary" type="button">
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}
