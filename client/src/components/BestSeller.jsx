import { useState } from "react";
import { Search, ShoppingCart, Heart, Star, StarHalf } from "lucide-react";
import "../css/components/bestseller.css";
import Shoes from "../assets/images/products/shoe2.jpg";
import Boot from "../assets/images/products/shoe1.jpg";
import Boots from "../assets/images/products/shoe4.jpg";
// import Boss from "../assets/images/products/shoe6.jpg";
import Shoe from "../assets/images/products/shoe5.jpg";
import Juicer from "../assets/images/p-1.jpg";
import Laptop from "../assets/images/products/1.jpg";
import Camera from "../assets/images/products/camera 1.jpg";
export default function BestSeller() {

  const [activeCategory, setActiveCategory] = useState("homeAppliance");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <div className="best-sellers">
        <div className="sellers-bar container d-flex justify-content-between pt-5">
          <div className="seller-bar-title">
            <h2
              style={{
                color: "#ffa351",
                fontSize: "2.2rem",
                fontFamily: '"Oswald", sans-serif',
              }}
            >
              Best Products
            </h2>
          </div>
          <div className="best-seller-category">
            <div className="seller-list">
              <ul className="d-flex list-unstyled">
                <li className="seller-list-items active mx-3">
                  <button
                    className={`home-appliance ${
                      activeCategory === "homeAppliance" ? "active" : ""
                    }`}
                    onClick={() => handleCategoryClick("homeAppliance")}
                  >
                    Home Appliances
                  </button>
                </li>
                <li className="seller-list-items mx-3">
                  <button
                    className={`computer ${
                      activeCategory === "computers" ? "active" : ""
                    }`}
                    onClick={() => handleCategoryClick("computers")}
                  >
                    Computers
                  </button>
                </li>
                <li className="seller-list-items mx-3">
                  <button
                    className={`electronics ${
                      activeCategory === "electron" ? "active" : ""
                    }`}
                    onClick={() => handleCategoryClick("electron")}
                  >
                    Electronics
                  </button>
                </li>
                <li className="seller-list-items mx-3">
                  <button
                    className={`laptop ${
                      activeCategory === "laptops" ? "active" : ""
                    }`}
                    onClick={() => handleCategoryClick("laptops")}
                  >
                    Laptops
                  </button>
                </li>
                <li className="seller-list-items mx-3">
                  <button
                    className={`smartphones ${
                      activeCategory === "smart-phones" ? "active" : ""
                    }`}
                    onClick={() => handleCategoryClick("smart-phones")}
                  >
                    Smart Phones
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {activeCategory === "homeAppliance" && (
        <div className="block-content container" id="home_appliance">
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
            </div>
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
            </div>{" "}
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
          </div>
        </div>
      )}

      {activeCategory === "computers" && (
        <div className="block-content container" id="computer">
          <div className="row">
            <div className="col-md-5">
              <div className="best-card-large">
                <div className="card-img">
                  <a href="#">
                    <img src={Juicer} alt />
                    <div className="name-price">
                      <div className="item-product">Juicer Machine</div>
                      <div className="item-price">$pakistan</div>
                    </div>
                    <div className="item-name-large">
                      <ShoppingCart /> Add To cart
                    </div>
                    <div className="book-search">
                      <ul className="card-menu-list">
                        <li>
                          <Search />
                        </li>
                        <li>
                          <Heart />
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-7 small-items">
              <div className="card-6-menu">
                <div className="row">
                  <div className="col-md-4 multi-1">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Laptop} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-1">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 multi-1">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Laptop} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-2">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 multi-1">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Camera} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-3">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 multi-2">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Laptop} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-4">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 multi-2">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Laptop} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-5">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 multi-2">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Laptop} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-6">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeCategory === "electron" && (
        <div className="block-content container" id="electron">
          <div className="row">
            <div className="col-md-5">
              <div className="best-card-large">
                <div className="card-img">
                  <a href="#">
                    <img
                      src="/images/products/home5.jpg"
                      alt
                      width="100%"
                      height="443px"
                    />
                    <div className="name-price">
                      <div className="item-product">Juicer Machine</div>
                      <div className="item-price">$info-detail</div>
                    </div>
                    <div className="item-name-large">
                      <ShoppingCart /> Add To cart
                    </div>
                    <div className="book-search">
                      <ul className="card-menu-list">
                        <li>
                          <Search />
                        </li>
                        <li>
                          <Heart />
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-7 small-items">
              <div className="card-6-menu">
                <div className="row">
                  <div className="col-md-4 multi-1">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Laptop} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-1">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 multi-1">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Laptop} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-2">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 multi-1">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Camera} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-3">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 multi-2">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Laptop} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-4">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 multi-2">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Laptop} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-5">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 multi-2">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Laptop} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-6">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeCategory === "laptops" && (
        <div className="block-content container" id="laptops">
          <div className="row">
            <div className="col-md-5">
              <div className="best-card-large">
                <div className="card-img">
                  <a href="#">
                    <img
                      src="/images/products/home5.jpg"
                      alt
                      width="100%"
                      height="443px"
                    />
                    <div className="name-price">
                      <div className="item-product">Juicer Machine</div>
                      <div className="item-price">$info-detail</div>
                    </div>
                    <div className="item-name-large">
                      <ShoppingCart /> Add To cart
                    </div>
                    <div className="book-search">
                      <ul className="card-menu-list">
                        <li>
                          <Search />
                        </li>
                        <li>
                          <Heart />
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-7 small-items">
              <div className="card-6-menu">
                <div className="row">
                  <div className="col-md-4 multi-1">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Laptop} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-1">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 multi-1">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Laptop} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-2">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 multi-1">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Camera} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-3">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 multi-2">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Laptop} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-4">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 multi-2">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Laptop} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-5">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 multi-2">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Laptop} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-6">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeCategory === "smart-phones" && (
        <div className="block-content container" id="smart-phones">
          <div className="row">
            <div className="col-md-5">
              <div className="best-card-large">
                <div className="card-img">
                  <a href="#">
                    <img
                      src="/images/products/home5.jpg"
                      alt
                      width="100%"
                      height="443px"
                    />
                    <div className="name-price">
                      <div className="item-product">Juicer Machine</div>
                      <div className="item-price">$info-detail</div>
                    </div>
                    <div className="item-name-large">
                      <ShoppingCart /> Add To cart
                    </div>
                    <div className="book-search">
                      <ul className="card-menu-list">
                        <li>
                          <Search />
                        </li>
                        <li>
                          <Heart />
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-7 small-items">
              <div className="card-6-menu">
                <div className="row">
                  <div className="col-md-4 multi-1">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Laptop} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-1">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 multi-1">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Laptop} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-2">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 multi-1">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Camera} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-3">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 multi-2">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Laptop} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-4">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 multi-2">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Laptop} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-5">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 multi-2">
                    <div className="best-card-small">
                      <div className="card-img">
                        <a href="#">
                          <img src={Laptop} alt width="100%" />
                          <div className="name-price">
                            <div className="item-product">Juicer Machine</div>
                            <div className="item-price">$89.00</div>
                          </div>
                          <div className="item-name-large">
                            <ShoppingCart /> Add To cart
                          </div>
                          <div className="book-search">
                            <ul className="card-menu-list li-6">
                              <li>
                                <Search />
                              </li>
                              <li>
                                <Heart />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/*   */}
    </>
  );
}
