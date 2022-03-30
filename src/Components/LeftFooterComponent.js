import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function LeftFooterComponent(props) {
  const [noti, setNoti] = useState(0);

  let inputValues = localStorage.getItem("inputValues");
  let inputEditProductObj = JSON.parse(inputValues);
  let gaming = 3;
  let editing = 4;
  let random = 0;
  if (
    props.showResults2 == 0 ||
    props.showResults2 == 3 ||
    props.showResults2 == 4
  ) {
    gaming = 3;
    editing = 4;
    random = 0;
  } else if (props.showResults2 == 1) {
    gaming = 5;
  }
  let off = true;
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{ display: "flex"}}
          id="divForResponsiceLeftFooter"
          className="my-1"
        >
          <div className="mx-3" style={{ display: "flex" }}>
            <div className="mx-3">
              <Link to="/edit" className="btn btn-primary" type="button">
                Edit
              </Link>
            </div>
            <div className="d-grid gap-2">
              <Link
                id="comBtn"
                className="btn btn-outline-info"
                to="/compare"
                type="button"
              >
                Compare
              </Link>
            </div>
          </div>
          <hr />
          <div id="dropDownResponsive">
            <div className="dropdown dropdown1 mx-2">
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
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {inputEditProductObj[props.showResults2][0][
                  inputEditProductObj[props.showResults2][0].length - 4
                ].map((item) => {
                  const selectedNationFunc = () => {
                    console.log("clicked");
                  };
                  return (
                    <li>
                      <sapn
                        onClick={selectedNationFunc}
                        style={{ cursor: "pointer" }}
                        className="dropdown-item"
                      >
                        {item}
                      </sapn>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="dropdown dropdown1 mx-2">
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
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {inputEditProductObj[props.showResults2][0][
                  inputEditProductObj[props.showResults2][0].length - 3
                ].map((item) => {
                  return (
                    <li>
                      <span className="dropdown-item">{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="dropdown dropdown1 mx-2">
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
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {inputEditProductObj[props.showResults2][0][
                  inputEditProductObj[props.showResults2][0].length - 2
                ].map((item) => {
                  return (
                    <li>
                      <span className="dropdown-item">{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="dropdown dropdown1 mx-2">
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
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
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
        </div>
        <div
          id="responsiveBtn"
          onClick={() => {
            if (off) {
              document.getElementById(
                "divForResponsiceLeftFooter"
              ).style.display = "block";
              for (
                let i = 0;
                i < document.querySelectorAll(".dropdown1").length;
                i++
              ) {
                document.querySelectorAll(".dropdown1")[i].className += " my-2";
              }
              document.getElementById("dropDownResponsive").style.display =
                "block";
                document.getElementById("responsiveBtn").style.alignItems = "end"
                off = false;
              } else {
                document.getElementById("dropDownResponsive").style.display =
                "none";
                document.getElementById(
                  "divForResponsiceLeftFooter"
                  ).style.display = "flex";
                  document.getElementById("responsiveBtn").style.alignItems = "center"
              off = true;
            }
          }}
          className="mx-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="mx-2 bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
</svg>

          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-up"
            viewBox="0 0 16 16"
          >
            <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
          </svg> */}
        </div>
      </div>
    </>
  );
}
