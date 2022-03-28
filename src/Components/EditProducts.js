import React from "react";
import { Link } from "react-router-dom";
import ProductPhoto from "./ProductPhoto";

export default function EditProducts() {
  const handleOnBlur = () => {
    let allInputsInTheEditProducts = document.querySelectorAll(".bgColor");
    for (let i = 0; i < allInputsInTheEditProducts.length; i++) {
      if (i == 3 || i == 4) {
        continue;
      } else {
        allInputsInTheEditProducts[i].addEventListener("blur", () => {
          if (allInputsInTheEditProducts[i].value == "") {
            allInputsInTheEditProducts[i].className =
              "form-control is-invalid bgColor";
          } else {
            allInputsInTheEditProducts[i].className =
              "form-control is-valid bgColor";
          }
        });
      }
    }
  };
  return (
    <>
      <div onMouseMove={handleOnBlur} className="container my-3">
        <h2>Edit the rank or product here</h2>
        <hr />
        <form className="row my-3 g-3">
          <div className="col-md-4">
            <label htmlFor="validationCustom02" className="form-label">
              Rank
            </label>
            <input
              type="text"
              className="form-control bgColor"
              id="rankInputId"
              required
            />
            <div className="invalid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationServer03" className="form-label">
              Model name
            </label>
            <input
              type="text"
              className="form-control bgColor"
              id="validationServer03"
              aria-describedby="validationServer03Feedback"
              required
            />
            <div id="validationServer03Feedback" className="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Image url
            </label>
            <input
              type="email"
              placeholder="URL 1"
              className="form-control bgColor"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div
              id="validationServer03Feedback"
              className="invalid-feedback my-1"
            >
              Please provide at least one image url
            </div>
            <input
              type="email"
              placeholder="URL 2"
              className="form-control my-2 bgColor"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <input
              type="email"
              placeholder="URL 3"
              className="form-control my-2 bgColor"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <ProductPhoto
            imageUrl1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe2YNPbIkb2o-v4Vg6CJx4bDhAEFmwIfSGCw&usqp=CAU"
            imageUrl2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQogQ3P3ojYSeiQf-5SlBmN0VxGePAsk8WpmQ&usqp=CAU"
            imageUrl3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRyzBd6jnUbcZD5DbMyPR3qJOAjel21xiEw&usqp=CAU"
            width="50"
          />
          <div className="col-md-6">
            <label htmlFor="validationServer03" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control bgColor"
              id="validationServer03"
              aria-describedby="validationServer03Feedback"
              required
            />
            <div id="validationServer03Feedback" className="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <hr />
          <h3>Add specifications</h3>
          <div className="col-md-4">
            <label htmlFor="validationCustom01" className="form-label">
              Display
            </label>
            <input
              type="text"
              className="form-control bgColor"
              id="validationCustom01"
              required
            />
            <div className="invalid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom02" className="form-label">
              Chip
            </label>
            <input
              type="text"
              className="form-control bgColor"
              id="validationCustom02"
              required
            />
            <div className="invalid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom02" className="form-label">
              Battery and Power
            </label>
            <input
              type="text"
              className="form-control bgColor"
              id="validationCustom02"
              required
            />
            <div className="invalid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom02" className="form-label">
              Memory
            </label>
            <input
              type="text"
              className="form-control bgColor"
              id="validationCustom02"
              required
            />
            <div className="invalid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom02" className="form-label">
              Storage
            </label>
            <input
              type="text"
              className="form-control bgColor"
              id="validationCustom02"
              required
            />
            <div className="invalid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom02" className="form-label">
              Camera
            </label>
            <input
              type="text"
              className="form-control bgColor"
              id="validationCustom02"
              required
            />
            <div className="invalid-feedback">Looks good!</div>
          </div>
          <hr />
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input is-invalid"
                type="checkbox"
                value=""
                id="invalidCheck3"
                aria-describedby="invalidCheck3Feedback"
                required
              />
              <label className="form-check-label" htmlFor="invalidCheck3">
                Agree to terms and conditions
              </label>
              <div id="invalidCheck3Feedback" className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
        </form>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link className="btn btn-outline-secondary" to="/productsite">
            Back
          </Link>
          <Link
            className="btn mx-5 btn-primary"
            to="/productsite"
          >
            Submit form
          </Link>
        </div>
      </div>
    </>
  );
}
