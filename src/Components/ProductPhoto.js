import React from "react";
import { Carousel } from "react-bootstrap";
export default function ProductPhoto(props) {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={3200}>
          <center>
            <img
              className="d-block w-50"
              src={props.imageUrl1}
              alt="First slide"
            />
          </center>
        </Carousel.Item>
        <Carousel.Item interval={3200}>
          <center>
            <img
              className="d-block w-50"
              src={props.imageUrl2}
              alt="Second slide"
            />
          </center>
        </Carousel.Item>
        <Carousel.Item interval={3200}>
          <center>
            <img
              className="d-block w-50"
              src={props.imageUrl3}
              alt="Third slide"
            />
          </center>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

{
  /* <center><img src="/Images/macBookAir-removebg-preview.png" className="d-block w-50" alt="..." /></center> */
}
