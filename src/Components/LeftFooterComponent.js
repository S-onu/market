import React from "react";
import { Link } from "react-router-dom";

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
      <div className="my-3 container">
        <div className="card buying-guide-card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-dark text-light">
              &#9734; 12.5 to 14-inch screen
            </li>
            <li className="list-group-item bg-dark text-light">
              &#9734; SSD Storage instead of a hard drive.
            </li>
            <li className="list-group-item bg-dark text-light">
              &#9734; 9+ hours of battery life
            </li>
          </ul>
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
    </div>
  );
}
