import React from "react";

export default function Modal(props) {
  let inputValues = localStorage.getItem("inputValues");
  let inputEditProductObj;
  inputEditProductObj = JSON.parse(inputValues);
  return (
    <>
      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content bg-dark">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Specifications
              </h5>
              <button
                type="button"
                class="btn-close bg-light"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body bg-dark">
              <div className="container my-3 specs">
                <h4>Price</h4>
                <h4> : </h4>
                <h4>₹ {inputEditProductObj[props.state0][props.val][5]}</h4>
              </div>
              <div className="container p-3 specs">
                <div className="col1">
                  <div>Model Name</div>
                </div>
                <div className="col2">
                  <div> : </div>
                </div>
                <div className="col3">
                  <div>{inputEditProductObj[props.state0][props.val][1]}</div>
                </div>
                <div className="col1">
                  <div>Display</div>
                </div>
                <div className="col2">
                  <div> : </div>
                </div>
                <div className="col3">
                  <div>{inputEditProductObj[props.state0][props.val][6]}</div>
                </div>
                <div className="col1">
                  <div>Chip</div>
                </div>
                <div className="col2">
                  <div> : </div>
                </div>
                <div className="col3">
                  <div>{inputEditProductObj[props.state0][props.val][7]}</div>
                </div>
                <div className="col1">
                  <div>Battery and Power</div>
                </div>
                <div className="col2">
                  <div> : </div>
                </div>
                <div className="col3">
                  <div>{inputEditProductObj[props.state0][props.val][8]}</div>
                </div>
                <div className="col1">
                  <div>Memory</div>
                </div>
                <div className="col2">
                  <div> : </div>
                </div>
                <div className="col3">
                  <div>{inputEditProductObj[props.state0][props.val][9]}</div>
                </div>
                <div className="col1">
                  <div>Storage</div>
                </div>
                <div className="col2">
                  <div> : </div>
                </div>
                <div className="col3">
                  <div>{inputEditProductObj[props.state0][props.val][10]}</div>
                </div>
                <div className="col1">
                  <div>Camera</div>
                </div>
                <div className="col2">
                  <div> : </div>
                </div>
                <div className="col3">
                  <div>{inputEditProductObj[props.state0][props.val][11]}</div>
                </div>
              </div>
              <hr />
            </div>
            <div className="d-grid m-3 gap-2 d-md-flex justify-content-md-end">
              <button
                className="btn compareBTN btn-outline-light me-md-2" data-bs-dismiss="modal"
                type="button"
                onClick={props.runFunc3}
              >
                Add to compare
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
