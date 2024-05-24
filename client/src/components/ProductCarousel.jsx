import React from "react";
import "../css/components/productcarousel.css";
import Shoes from "../assets/images/products/shoe2.jpg";
import Boot from "../assets/images/products/shoe1.jpg";
import Boots from "../assets/images/products/shoe4.jpg";
// import Boss from "../assets/images/products/shoe6.jpg";
import Shoe from "../assets/images/products/shoe3.jpg";
import { ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCarousel() {
  return (
    <>
      <div className="daily-deals">
        <h2 className="float-start border-bottom">Products</h2>
        <div className="d-flex flex-row justify-content-end">
          <Link to="/products">See All Products</Link>
        </div>
      </div>

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className=" row mt-4 product_listing justify-content-center align-items-center ">
              <div className="col-md-3 card-col">
                <a className="product-link" href="">
                  <div className="product-card">
                    <div className="product-list-items">
                      <div className="list-img">
                        <img className="img-fluid" src={Shoes} alt="item-img" />
                      </div>
                      <div className="product-name_price d-flex flex-row justify-content-between">
                        <div className="product-name fw-semibold">Laptop</div>
                        <div className="product-price">
                          <strong>$480.99</strong>
                        </div>
                      </div>
                      <div className="product-rating mt-2 w-75 d-flex flex-row">
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <StarHalf className="text-secondary " />
                        <div className="rating-number">(123)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3 card-col">
                <a className="product-link" href="">
                  <div className="product-card">
                    <div className="product-list-items">
                      <div className="list-img">
                        <img className="img-fluid" src={Shoe} alt="item-img" />
                      </div>
                      <div className="product-name_price d-flex flex-row justify-content-between">
                        <div className="product-name fw-semibold">Laptop</div>
                        <div className="product-price">
                          <strong>$480.99</strong>
                        </div>
                      </div>
                      <div className="product-rating mt-2 w-75 d-flex flex-row">
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <StarHalf className="text-secondary " />
                        <div className="rating-number">(123)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3 card-col">
                <a className="product-link" href="">
                  <div className="product-card">
                    <div className="product-list-items">
                      <div className="list-img">
                        <img className="img-fluid" src={Boot} alt="item-img" />
                      </div>
                      <div className="product-name_price d-flex flex-row justify-content-between">
                        <div className="product-name fw-semibold">Laptop</div>
                        <div className="product-price">
                          <strong>$480.99</strong>
                        </div>
                      </div>
                      <div className="product-rating mt-2 w-75 d-flex flex-row">
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <StarHalf className="text-secondary " />
                        <div className="rating-number">(123)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>{" "}
              <div className="col-md-3 card-col">
                <a className="product-link" href="">
                  <div className="product-card">
                    <div className="product-list-items">
                      <div className="list-img">
                        <img className="img-fluid" src={Boots} alt="item-img" />
                      </div>
                      <div className="product-name_price d-flex flex-row justify-content-between">
                        <div className="product-name fw-semibold">Laptop</div>
                        <div className="product-price">
                          <strong>$480.99</strong>
                        </div>
                      </div>
                      <div className="product-rating mt-2 w-75 d-flex flex-row">
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <StarHalf className="text-secondary " />
                        <div className="rating-number">(123)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="carousel-item active">
            <div className=" row mt-4 product_listing justify-content-center align-items-center ">
              <div className="col-md-3 card-col">
                <a className="product-link" href="">
                  <div className="product-card">
                    <div className="product-list-items">
                      <div className="list-img">
                        <img className="img-fluid" src={Shoes} alt="item-img" />
                      </div>
                      <div className="product-name_price d-flex flex-row justify-content-between">
                        <div className="product-name fw-semibold">Laptop</div>
                        <div className="product-price">
                          <strong>$480.99</strong>
                        </div>
                      </div>
                      <div className="product-rating mt-2 w-75 d-flex flex-row">
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <StarHalf className="text-secondary " />
                        <div className="rating-number">(123)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3 card-col">
                <a className="product-link" href="">
                  <div className="product-card">
                    <div className="product-list-items">
                      <div className="list-img">
                        <img className="img-fluid" src={Shoe} alt="item-img" />
                      </div>
                      <div className="product-name_price d-flex flex-row justify-content-between">
                        <div className="product-name fw-semibold">Laptop</div>
                        <div className="product-price">
                          <strong>$480.99</strong>
                        </div>
                      </div>
                      <div className="product-rating mt-2 w-75 d-flex flex-row">
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <StarHalf className="text-secondary " />
                        <div className="rating-number">(123)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3 card-col">
                <a className="product-link" href="">
                  <div className="product-card">
                    <div className="product-list-items">
                      <div className="list-img">
                        <img className="img-fluid" src={Boot} alt="item-img" />
                      </div>
                      <div className="product-name_price d-flex flex-row justify-content-between">
                        <div className="product-name fw-semibold">Laptop</div>
                        <div className="product-price">
                          <strong>$480.99</strong>
                        </div>
                      </div>
                      <div className="product-rating mt-2 w-75 d-flex flex-row">
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <StarHalf className="text-secondary " />
                        <div className="rating-number">(123)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>{" "}
              <div className="col-md-3 card-col">
                <a className="product-link" href="">
                  <div className="product-card">
                    <div className="product-list-items">
                      <div className="list-img">
                        <img className="img-fluid" src={Boots} alt="item-img" />
                      </div>
                      <div className="product-name_price d-flex flex-row justify-content-between">
                        <div className="product-name fw-semibold">Laptop</div>
                        <div className="product-price">
                          <strong>$480.99</strong>
                        </div>
                      </div>
                      <div className="product-rating mt-2 w-75 d-flex flex-row">
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <StarHalf className="text-secondary " />
                        <div className="rating-number">(123)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="carousel-item active">
            <div className=" row mt-4 product_listing justify-content-center align-items-center ">
              <div className="col-md-3 card-col">
                <a className="product-link" href="">
                  <div className="product-card">
                    <div className="product-list-items">
                      <div className="list-img">
                        <img className="img-fluid" src={Boots} alt="item-img" />
                      </div>
                      <div className="product-name_price d-flex flex-row justify-content-between">
                        <div className="product-name fw-semibold">Laptop</div>
                        <div className="product-price">
                          <strong>$480.99</strong>
                        </div>
                      </div>
                      <div className="product-rating mt-2 w-75 d-flex flex-row">
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <StarHalf className="text-secondary " />
                        <div className="rating-number">(123)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3 card-col">
                <a className="product-link" href="">
                  <div className="product-card">
                    <div className="product-list-items">
                      <div className="list-img">
                        <img className="img-fluid" src={Shoes} alt="item-img" />
                      </div>
                      <div className="product-name_price d-flex flex-row justify-content-between">
                        <div className="product-name fw-semibold">Laptop</div>
                        <div className="product-price">
                          <strong>$480.99</strong>
                        </div>
                      </div>
                      <div className="product-rating mt-2 w-75 d-flex flex-row">
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <StarHalf className="text-secondary " />
                        <div className="rating-number">(123)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3 card-col">
                <a className="product-link" href="">
                  <div className="product-card">
                    <div className="product-list-items">
                      <div className="list-img">
                        <img className="img-fluid" src={Shoe} alt="item-img" />
                      </div>
                      <div className="product-name_price d-flex flex-row justify-content-between">
                        <div className="product-name fw-semibold">Laptop</div>
                        <div className="product-price">
                          <strong>$480.99</strong>
                        </div>
                      </div>
                      <div className="product-rating mt-2 w-75 d-flex flex-row">
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <StarHalf className="text-secondary " />
                        <div className="rating-number">(123)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3 card-col">
                <a className="product-link" href="">
                  <div className="product-card">
                    <div className="product-list-items">
                      <div className="list-img">
                        <img className="img-fluid" src={Boot} alt="item-img" />
                      </div>
                      <div className="product-name_price d-flex flex-row justify-content-between">
                        <div className="product-name fw-semibold">Laptop</div>
                        <div className="product-price">
                          <strong>$480.99</strong>
                        </div>
                      </div>
                      <div className="product-rating mt-2 w-75 d-flex flex-row">
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <Star className="text-secondary " />
                        <StarHalf className="text-secondary " />
                        <div className="rating-number">(123)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>{" "}
            </div>
          </div>
        </div>

        <div className="carousel-prev  top-50 start-0 translate-middle">
          <a
            className="rounded-circle"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <ChevronLeft />

          
          </a>
        </div>
        <div className="carousel-next  top-50 start-100 translate-middle   ">
          <a
            className="rounded-circle"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <ChevronRight />
            
          </a>
        </div>
      </div>
    </>
  );
}
