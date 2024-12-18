import React from 'react'  
import Shoe from "../assets/images/products/shoe5.jpg";
import Shoes from "../assets/images/products/shoe4.jpg";
import {StarHalf,Star } from "lucide-react";

export default function ProductsList() {
  return (
    <>
      <div className=" row mt-4 product_listing justify-content-center align-items-center ">
        <div className="col-md-4 card-col">
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
        <div className="col-md-4 card-col">
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
        <div className="col-md-4 card-col">
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
      </div>
    </>
  );
}
