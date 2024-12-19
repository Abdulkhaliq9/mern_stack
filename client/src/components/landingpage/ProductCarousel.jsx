import React from 'react'  
import "../css/components/productcarousel.css";
import Shoes from "../assets/images/products/shoe2.jpg";
import Boot from "../assets/images/products/shoe1.jpg";
import Boots from "../assets/images/products/shoe4.jpg";
import Boss from "../assets/images/products/shoe5.jpg";
import Shoe from "../assets/images/products/shoe3.jpg";
import { ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react";
// import { Link } from "react-router-dom";

export default function ProductCarousel() {
  return (
    <>
      <div className="row my-5">
        <div className="col-md-12">
          <div className="d-flex justify-content-between align-items-center">
            <h2>
              Trending <b>Products</b>
            </h2>
            <div className="d-flex">
              <div className=" product_prev  ">
                <a
                  className="rounded-circle"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <ChevronLeft />
                </a>
              </div>
              <div className=" product_next  ms-1 ">
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
          </div>
          <div id="carouselExample" className="carousel slide product_carousel">
            {/* <div className="carousel-indicators ">
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
            </div> */}
            <div className="carousel-inner">
              <div className="item carousel-item active">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <div className="img-box">
                        <img
                          src={Boss}
                          className="img-responsive img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Apple iPad</h4>
                        <p className="item-price">
                          <strike>$400.00</strike> <span>$369.00</span>
                        </p>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star-o"></i>
                            </li>
                          </ul>
                        </div>
                        <a href="#" className="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <div className="img-box">
                        <img
                          src={Boss}
                          className="img-responsive img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Sony Headphone</h4>
                        <p className="item-price">
                          <strike>$25.00</strike> <span>$23.99</span>
                        </p>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star-o"></i>
                            </li>
                          </ul>
                        </div>
                        <a href="#" className="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <div className="img-box">
                        <img
                          src={Boots}
                          className="img-responsive img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Macbook Air</h4>
                        <p className="item-price">
                          <strike>$899.00</strike> <span>$649.00</span>
                        </p>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <StarHalf />
                            </li>
                          </ul>
                        </div>
                        <a href="#" className="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <div className="img-box">
                        <img
                          src={Shoe}
                          className="img-responsive img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Nikon DSLR</h4>
                        <p className="item-price">
                          <strike>$315.00</strike> <span>$250.00</span>
                        </p>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star-o"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star-o"></i>
                            </li>
                          </ul>
                        </div>
                        <a href="#" className="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item carousel-item">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <div className="img-box">
                        <img
                          src={Shoes}
                          className="img-responsive img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Sony Play Station</h4>
                        <p className="item-price">
                          <strike>$289.00</strike> <span>$269.00</span>
                        </p>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star-o"></i>
                            </li>
                          </ul>
                        </div>
                        <a href="#" className="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <div className="img-box">
                        <img
                          src={Boot}
                          className="img-responsive img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Apple MacBook</h4>
                        <p className="item-price">
                          <strike>$899.00</strike> <span>$649.00</span>
                        </p>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <StarHalf />
                            </li>
                          </ul>
                        </div>
                        <a href="#" className="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <div className="img-box">
                        <img
                          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MLWK3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1645138485842"
                          className="img-responsive img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Airpods Pro</h4>
                        <p className="item-price">
                          <strike>$249.00</strike> <span>$220.00</span>
                        </p>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star-o"></i>
                            </li>
                          </ul>
                        </div>
                        <a href="#" className="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <div className="img-box">
                        <img
                          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MLWK3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1645138485842"
                          className="img-responsive img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Airpods Pro</h4>
                        <p className="item-price">
                          <strike>$249.00</strike> <span>$220.00</span>
                        </p>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star-o"></i>
                            </li>
                          </ul>
                        </div>
                        <a href="#" className="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item carousel-item">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <div className="img-box">
                        <img
                          src={Shoe}
                          className="img-responsive img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Nikon DSLR</h4>
                        <p className="item-price">
                          <strike>$315.00</strike> <span>$250.00</span>
                        </p>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star-o"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star-o"></i>
                            </li>
                          </ul>
                        </div>
                        <a href="#" className="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <div className="img-box">
                        <img
                          src={Boot}
                          className="img-responsive img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Apple MacBook</h4>
                        <p className="item-price">
                          <strike>$899.00</strike> <span>$649.00</span>
                        </p>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <StarHalf />
                            </li>
                          </ul>
                        </div>
                        <a href="#" className="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <div className="img-box">
                        <img
                          src={Boots}
                          className="img-responsive img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Macbook Air</h4>
                        <p className="item-price">
                          <strike>$899.00</strike> <span>$649.00</span>
                        </p>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <StarHalf />
                            </li>
                          </ul>
                        </div>
                        <a href="#" className="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="thumb-wrapper">
                      <div className="img-box">
                        <img
                          src={Shoes}
                          className="img-responsive img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Sony Play Station</h4>
                        <p className="item-price">
                          <strike>$289.00</strike> <span>$269.00</span>
                        </p>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <Star />
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star-o"></i>
                            </li>
                          </ul>
                        </div>
                        <a href="#" className="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
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
