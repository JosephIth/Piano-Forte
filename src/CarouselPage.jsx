import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '/Imagenes/carousel1.png';
import Img2 from '/Imagenes/carousel2.jpg';
import Img3 from '/Imagenes/carousel3.webp';

function CarouselPage() {
  return (
    <div>
        <style>

        </style>
        <Carousel >
            <Carousel.Item>
                <img style=  {   {height: "60vh" }}
                className="d-block w-100"
                src= {Img1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height: "60vh"}}
                className="d-block w-100"
                src= {Img2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height: "60vh"}}
                className="d-block w-100"
                src= {Img3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default CarouselPage