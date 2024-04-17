import { useState } from "react";
import { Search, ShoppingCart, Heart } from "lucide-react";
import "../css/components/bestseller.css";
import Juicer from "../assets/images/p-1.jpg";
import Laptop from "../assets/images/products/1.jpg";
import Camera from "../assets/images/products/camera 1.jpg";
export default function BestSeller() {
  // hide the other content and show on when i clicked on it

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
              Best Seller
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
          <div className="row">
            <div className="col-md-5">
              <div className="best-card-large">
                <div className="card-img">
                  <a href="#">
                    <img src={Juicer} alt />
                    <div className="name-price text-center">
                      <div className="item-product">Juicer Machine</div>
                      <div className="item-price">$89.00</div>
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
