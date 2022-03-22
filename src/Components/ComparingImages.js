import React from 'react'

export default function ComparingImages(props) {
  return (
    <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
              <img
                src={props.comparingImageUrl1}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="1000">
              <img
                src={props.comparingImageUrl2}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="1000">
              <img
                src={props.comparingImageUrl3}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
  )
}
