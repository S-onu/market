import React from "react";
import { Carousel } from "react-bootstrap";
import CardsInRows from "./CardsInRows";

export default function HomePage() {
  return (
    <>
      <div className="container my-3">
        <Carousel>
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              src="/Images/homeScreanImage1.JPG"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              src="/Images/homeScreanImage2.JPG"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              src="/Images/homeScreanImage3.JPG"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container py-2 my-4 bg-dark">
        <h4>Upto 55% off</h4>
        <div className="row1" style={{ display: "flex", overflowX:"scroll" }}>
          <CardsInRows imageUrlForCard="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC14bUcYj0MG4evp8IiAaBm2ytz2XDYaA_Bw&usqp=CAU" />
          <CardsInRows imageUrlForCard="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC_Nd0xiyrN9Z48TMmglVBYhRouqzzVp9SJQ&usqp=CAU" />
          <CardsInRows imageUrlForCard="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC14bUcYj0MG4evp8IiAaBm2ytz2XDYaA_Bw&usqp=CAU" />
          <CardsInRows imageUrlForCard="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC_Nd0xiyrN9Z48TMmglVBYhRouqzzVp9SJQ&usqp=CAU" />
          <CardsInRows imageUrlForCard="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC14bUcYj0MG4evp8IiAaBm2ytz2XDYaA_Bw&usqp=CAU" />
          <CardsInRows imageUrlForCard="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC_Nd0xiyrN9Z48TMmglVBYhRouqzzVp9SJQ&usqp=CAU" />
        </div>
      </div>
      <div className="container my-2">
          <img className="w-100" src="/Images/homeScreanImage1.JPG"  alt="" />
      </div>
    </>
  );
}
