import React from "react";
import ComparingTwoProductsImformations from "./ComparingTwoProductsImformations";
import ProductPhoto from "./ProductPhoto";

export default function ComparingProducts() {
  return (
    <>
    <div className="container my-3 text-center">
      <h1>Design</h1>
    </div>
    <div className="container comparingTwoProducts">
      <div className="inLeft bg-dark my-3">
        <ProductPhoto
          imageUrl1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe2YNPbIkb2o-v4Vg6CJx4bDhAEFmwIfSGCw&usqp=CAU"
          imageUrl2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQogQ3P3ojYSeiQf-5SlBmN0VxGePAsk8WpmQ&usqp=CAU"
          imageUrl3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRyzBd6jnUbcZD5DbMyPR3qJOAjel21xiEw&usqp=CAU"
          // className="d-block w-100"
          width="100"
        />
      </div>
      <div className="inRight bg-dark my-3">
        <ProductPhoto
          imageUrl1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe2YNPbIkb2o-v4Vg6CJx4bDhAEFmwIfSGCw&usqp=CAU"
          imageUrl2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQogQ3P3ojYSeiQf-5SlBmN0VxGePAsk8WpmQ&usqp=CAU"
          imageUrl3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRyzBd6jnUbcZD5DbMyPR3qJOAjel21xiEw&usqp=CAU"
          // className="d-block w-100"
          width="100"
        />
      </div>
    </div>
    <div className="container comparingProductDetails my-4">
      <div className="leftProductInfo text-light bg-dark">
        <ComparingTwoProductsImformations/>
      </div>
      <div className="rightProductInfo text-light bg-dark">
        <ComparingTwoProductsImformations/>
      </div>
    </div>
    </>
  );
}
