import React from "react";
import { Carousel } from "react-bootstrap";
import CardsInRows from "./CardsInRows";
import ProductPhoto from "./ProductPhoto";

export default function HomePage(props) {
  return (
    <>
      <div className="container my-3">
        <ProductPhoto
          imageUrl1="/Images/homeScreanImage1.JPG"
          imageUrl2="/Images/homeScreanImage2.JPG"
          imageUrl3="/Images/homeScreanImage3.JPG"
          width="100"
        />
      </div>
      <div className="container py-2 my-4 bg-dark">
        <h4 className="mx-1">Upto 55% off</h4>
        <div className="row1" style={{ display: "flex", overflowX: "scroll" }}>
          <CardsInRows imageUrlForCard="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC14bUcYj0MG4evp8IiAaBm2ytz2XDYaA_Bw&usqp=CAU" goToProductSite={props.goToProductSite} />
          <CardsInRows imageUrlForCard="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC_Nd0xiyrN9Z48TMmglVBYhRouqzzVp9SJQ&usqp=CAU" />
          <CardsInRows imageUrlForCard="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC14bUcYj0MG4evp8IiAaBm2ytz2XDYaA_Bw&usqp=CAU" />
          <CardsInRows imageUrlForCard="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC_Nd0xiyrN9Z48TMmglVBYhRouqzzVp9SJQ&usqp=CAU" />
          <CardsInRows imageUrlForCard="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC14bUcYj0MG4evp8IiAaBm2ytz2XDYaA_Bw&usqp=CAU" />
          <CardsInRows imageUrlForCard="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC_Nd0xiyrN9Z48TMmglVBYhRouqzzVp9SJQ&usqp=CAU" />
        </div>
      </div>
      <div className="container my-2">
        <img className="w-100" src="/Images/homeScreanImage1.JPG" alt="" />
      </div>
    </>
  );
}
