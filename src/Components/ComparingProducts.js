import React from "react";
import ComparingImages from "./ComparingImages";

export default function ComparingProducts() {
  return (
    <div className="container comparingTwoProducts">
      <div className="inLeft bg-dark my-3">
        <ComparingImages
          comparingImageUrl1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe2YNPbIkb2o-v4Vg6CJx4bDhAEFmwIfSGCw&usqp=CAU"
          comparingImageUrl2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQogQ3P3ojYSeiQf-5SlBmN0VxGePAsk8WpmQ&usqp=CAU"
          comparingImageUrl3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRyzBd6jnUbcZD5DbMyPR3qJOAjel21xiEw&usqp=CAU"
          className="d-block w-100"
        />
      </div>
      <div className="inRight bg-dark my-3">
        <ComparingImages
          comparingImageUrl1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe2YNPbIkb2o-v4Vg6CJx4bDhAEFmwIfSGCw&usqp=CAU"
          comparingImageUrl2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQogQ3P3ojYSeiQf-5SlBmN0VxGePAsk8WpmQ&usqp=CAU"
          comparingImageUrl3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRyzBd6jnUbcZD5DbMyPR3qJOAjel21xiEw&usqp=CAU"
          className="d-block w-100"
        />
      </div>
    </div>
  );
}
