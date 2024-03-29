import React from "react";

export default function ContentHeader(props) {
  return (
    <div className="container">
      <h1>&#9733; Suggestions</h1>
      <div className="badges">
        <span onClick={()=>{props.goToProductSite(0)}} className="badge mx-1 bg-secondary">Laptop</span>
        <span onClick={()=>{props.goToProductSite(1)}} className="badge mx-1 bg-secondary">Mobile</span>
        <span onClick={()=>{props.goToProductSite(2)}} className="badge mx-1 bg-secondary">Tablets</span>
      </div>
    </div>
  );
}
