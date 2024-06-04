import React from "react";
import "../css/components/carousel.css";
import Slider1 from "../assets/images/slider/homev3-slider1.jpg";
import Slider2 from "../assets/images/slider/homev3-slider2.jpg";
import Slider3 from "../assets/images/slider/homev3-slider3.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel() {
  return (
    <>
      <div className="row no-gutters">
        {/* Items Category */}
        {/* Image Slider for Product */}
        <div className="col-xxl-8 col-md-12">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators ">
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner" style={{height:"410px"}}>
              <div className="carousel-item active">
                <img src={Slider1} className="d-block w-100 " alt="..." />
                <div className="slider-content">
                  <div className="slider-category">Electronics</div>
                  <div className="slider-title">Spring Deals</div>
                  <div className="slider-description">
                    Spring into incredible deals on a selection of TVs, Smart
                    screens, and so much more.
                  </div>
                  <div className="slider-shopnow">
                    <button className="btn">Shop Now</button>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src={Slider2} className="d-block w-100" alt="..." />
                <div className="slider-content">
                  <div className="slider-category">Electronics</div>
                  <div className="slider-title">Abracadabra.</div>
                  <div className="slider-description">
                    A perfectly poised stand. And blazingly fast Thunderbolt
                    ports.
                  </div>
                  <div className="slider-shopnow">
                    <button className="btn">Shop Now</button>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src={Slider3} className="d-block w-100" alt="..." />
                <div className="slider-content">
                  <div className="slider-category">Furniture</div>
                  <div className="slider-title">Simple Style</div>
                  <div className="slider-description">
                    Dining, living, and desk areas serve their purposes in total
                    harmony of style.
                  </div>
                  <div className="slider-shopnow">
                    <button className="btn">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="car-prev  start-0   ">
              <a
                className="control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <ChevronLeft />
              </a>
            </div>
            <div className="car-next  start-100  ">
              <a
                className="control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <ChevronRight />
              </a>
            </div>
          </div>
        </div>
        <div className="col-xxl-4  col-lg-12 col-md-12 col-sm-12 ">
          <div className="row">
            <div className="col-xxl-12 col-lg-6 col-md-6 mb-3 new-arrival-container">
              <div className="new-arrival">
                {/* <img src={NewArrival} className=" img-fluid" alt="Image 3" /> */}
                <div className="arrival-content">
                  <div className="arrival-heading ">New Arrival</div>
                  <div className="arrival-title">Stay Comfy</div>
                  <div className="arrival-description ">
                    A collection of premium <br />
                    organic pieces.
                  </div>
                  <div className="arrival-shopnow">
                    <a href="#">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-lg-6 col-md-6 ">
              <div className="featured">
                {/* <img src={Featured} className="img-fluid" alt="Image 4" /> */}
                {/* <img src="/images/banner/newarrivals.jpg" className="img-fluid" alt="Image 3"> */}
                <div className="featured-content">
                  <div className="featured-heading">New Arrival</div>
                  <div className="featured-title">Stay Comfy</div>
                  <div className="featured-description">
                    A collection of premium <br />
                    organic pieces.
                  </div>
                  <div className="featured-shopnow">
                    <a href="#">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
