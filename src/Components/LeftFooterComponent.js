import React from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function LeftFooterComponent() {
  return (
    <div className="container my-3">
      <div className="container">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
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
      </div>
      <hr />
      <div className="container my-3">
        <label htmlFor="customRange3" className="form-label">
          Within price range
        </label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="1000"
          step="0.5"
          id="customRange3"
        />

        <div className="d-grid gap-2 d-md-flex my-2 justify-content-md-end">
          <button className="btn btn-sm btn-success me-md-2" type="button">
            Apply
          </button>
        </div>
      </div>

      <div className="container my-3">
        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
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
      </div>
      <hr />
      <div className="container my-3">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item bg-dark">
            <h2 className="accordion-header bg-dark" id="flush-headingOne">
              <button
                type="button"
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                style={{ backgroundColor: "#111b21", color: "#fff" }}
              >
                Buying for
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-dark">
                <div
                  style={{
                    border: "1px solid white",
                    cursor: "pointer",
                  }}
                  className="card my-1"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                  // className="card my-1"
                >
                  <div className="cardInLeftFooter">Gaming</div>
                </div>
                <div
                  style={{
                    border: "1px solid white",
                    cursor: "pointer",
                  }}
                  className="card my-1"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                  // className="card my-1"
                >
                  <div className="cardInLeftFooter">Editing</div>
                </div>
                <div
                  style={{
                    border: "1px solid white",
                    cursor: "pointer",
                  }}
                  className="card my-1"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                  // className="card my-1"
                >
                  <div className="cardInLeftFooter">Daily use</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="d-grid gap-2">
        <Link className="btn btn-outline-info" to="/compare" type="button">
          Compare<span className="badge mx-3 bg-primary rounded-pill">0</span>
        </Link>
      </div>
      <div className="d-grid my-3 gap-2">
        <Link to="/edit" className="btn btn-primary" type="button">
          Edit
        </Link>
      </div>
      <div className="d-grid my-3 gap-2">
        <a href="#" className="btn btn-success" type="button">
          Sell
        </a>
      </div>
    </div>
  );
}
