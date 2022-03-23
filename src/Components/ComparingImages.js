import React from "react";
import { Carousel } from "react-bootstrap";

export default function ComparingImages(props) {
  return (
    // <div
    //       id="carouselExampleInterval"
    //       className="carousel slide"
    //       data-bs-ride="carousel"
    //     >
    //       <div className="carousel-inner">
    //         <div className="carousel-item active" data-bs-interval="1000">
    //           <img
    //             src={props.comparingImageUrl1}
    //             className="d-block w-100"
    //             alt="..."
    //           />
    //         </div>
    //         <div className="carousel-item" data-bs-interval="1000">
    //           <img
    //             src={props.comparingImageUrl2}
    //             className="d-block w-100"
    //             alt="..."
    //           />
    //         </div>
    //         <div className="carousel-item" data-bs-interval="1000">
    //           <img
    //             src={props.comparingImageUrl3}
    //             className="d-block w-100"
    //             alt="..."
    //           />
    //         </div>
    //       </div>
    //     </div>
    <>
      <Carousel>
        <Carousel.Item interval={2800}>
          <center>
            <img
              className="d-block w-100"
              src={props.comparingImageUrl1}
              alt="First slide"
            />
          </center>
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={2800}>
          <center>
            <img
              className="d-block w-100"
              src={props.comparingImageUrl2}
              alt="Second slide"
            />
          </center>
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={2800}>
          <center>
            <img
              className="d-block w-100"
              src={props.comparingImageUrl3}
              alt="Third slide"
            />
          </center>
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </>
  );
}
