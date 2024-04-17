import React from "react";
import UserLayout from "../layouts/UserLayout";
import Shop_Banner from "../assets/images/shop_header.jpg";
import "../css/components/pages/products.css";
export default function Products() {
  return (
    <UserLayout>
      <div className="page-banner">
        <div className="banner_image"></div>
        <img src={Shop_Banner} alt="Product_Banner" className="w-100 d-block" />
        <div className="banner_title ">
          <h1 className="">Products</h1>
        </div>
      </div>

      <div className="products_filters mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="heading_filter">
              <h2 className="border-bottom">Filter</h2>
            </div>

            <div className="filter_1 border-bottom">
              <h6 className="text-dark">Categories</h6>
              <div className="filter-list">
                <ul>
                  <li>
                    <a href="#">Home & Garden</a>
                  </li>
                  <li>
                    <a href="#">Laptops</a>
                  </li>
                  <li>
                    <a href="#">SmartPhones & Accessories</a>
                  </li>
                  <li>
                    <a href="#">Fashion</a>
                  </li>
                  <li>
                    <a href="#">Mother & Kids</a>
                  </li>
                  <li>
                    <a href="#"> Beauty & Health</a>
                  </li>
                  <li>
                    <a href="#">Electronics</a>
                  </li>
                  <li>
                    <a href="#">Sports & Entertainment</a>
                  </li>
                  <li>
                    <a href="#">Jewelry</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="filter_2 border-bottom">
              <h6>Price</h6>
              <div className="filter_list_box mx-4">
                <div className="price_range_checkbox1 d-flex ">
                  <input type="checkbox" className="price-selector" />
                  <div className="amount mx-4">0 - $100</div>
                </div>{" "}
                <div className="price_range_checkbox2 d-flex ">
                  <input type="checkbox" className="price-selector" />
                  <div className="amount mx-4">$100 - $200</div>
                </div>{" "}
                <div className="price_range_checkbox3 d-flex ">
                  <input type="checkbox" className="price-selector" />
                  <div className="amount mx-4">$200.0+</div>
                </div>
              </div>
              <div className="number-range ">
                <ul className="rang-list d-flex align-items-center px-0">
                  <li className="range-input">
                    <input
                      type="number"
                      className="w-100 text-center "
                      placeholder="Min"
                    />
                  </li>
                  <li className="seperator d-flex align-items-center justify-content-center">
                    -
                  </li>
                  <li className="range-input">
                    <input
                      type="number"
                      className="w-100 text-center "
                      placeholder="Max"
                    />
                  </li>
                  <li className="apply-button w-50">
                    <button className="btn">
                      Apply
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <h2 className="border-bottom">Products</h2>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
