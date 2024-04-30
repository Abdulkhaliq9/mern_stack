import React from "react";
import "../css/components/productcarousel.css";
import IMI from "../assets/images/products/1.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {Link} from "react-router-dom"

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
            {/* <img src="..." className="d-block w-100" alt="..." /> */}

            <div className="row">
              <div className="col-3">
                {" "}
                <a className=" card-1">
                  <img src={IMI} className="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                        <path />
                      </svg>
                      <img
                        className="card__thumb"
                        src="https://i.imgur.com/7D7I6dI.png"
                        alt=""
                      />
                      <div className="card__header-text">
                        <h3 className="card__title">Jessica Parker</h3>
                        <span className="card__status">1 hour ago</span>
                      </div>
                    </div>
                    <p className="card__description"></p>
                  </div>
                </a>{" "}
              </div>
              <div className="col-3">
                {" "}
                <a className=" card-1">
                  <img src={IMI} className="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                        <path />
                      </svg>
                      <img
                        className="card__thumb"
                        src="https://i.imgur.com/7D7I6dI.png"
                        alt=""
                      />
                      <div className="card__header-text">
                        <h3 className="card__title">Jessica Parker</h3>
                        <span className="card__status">1 hour ago</span>
                      </div>
                    </div>
                    <p className="card__description"></p>
                  </div>
                </a>{" "}
              </div>
              <div className="col-3">
                {" "}
                <a className=" card-1">
                  <img src={IMI} className="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                        <path />
                      </svg>
                      <img
                        className="card__thumb"
                        src="https://i.imgur.com/7D7I6dI.png"
                        alt=""
                      />
                      <div className="card__header-text">
                        <h3 className="card__title">Jessica Parker</h3>
                        <span className="card__status">1 hour ago</span>
                      </div>
                    </div>
                    <p className="card__description"></p>
                  </div>
                </a>{" "}
              </div>
              <div className="col-3">
                {" "}
                <a className=" card-1">
                  <img src={IMI} className="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                        <path />
                      </svg>
                      <img
                        className="card__thumb"
                        src="https://i.imgur.com/7D7I6dI.png"
                        alt=""
                      />
                      <div className="card__header-text">
                        <h3 className="card__title">Jessica Parker</h3>
                        <span className="card__status">1 hour ago</span>
                      </div>
                    </div>
                    <p className="card__description"></p>
                  </div>
                </a>{" "}
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col-3">
                {" "}
                <a className=" card-1">
                  <img src={IMI} className="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                        <path />
                      </svg>
                      <img
                        className="card__thumb"
                        src="https://i.imgur.com/7D7I6dI.png"
                        alt=""
                      />
                      <div className="card__header-text">
                        <h3 className="card__title">Jessica Parker</h3>
                        <span className="card__status">1 hour ago</span>
                      </div>
                    </div>
                    <p className="card__description"></p>
                  </div>
                </a>{" "}
              </div>
              <div className="col-3">
                {" "}
                <a className=" card-1">
                  <img src={IMI} className="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                        <path />
                      </svg>
                      <img
                        className="card__thumb"
                        src="https://i.imgur.com/7D7I6dI.png"
                        alt=""
                      />
                      <div className="card__header-text">
                        <h3 className="card__title">Jessica Parker</h3>
                        <span className="card__status">1 hour ago</span>
                      </div>
                    </div>
                    <p className="card__description"></p>
                  </div>
                </a>{" "}
              </div>
              <div className="col-3">
                {" "}
                <a className=" card-1">
                  <img src={IMI} className="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                        <path />
                      </svg>
                      <img
                        className="card__thumb"
                        src="https://i.imgur.com/7D7I6dI.png"
                        alt=""
                      />
                      <div className="card__header-text">
                        <h3 className="card__title">Jessica Parker</h3>
                        <span className="card__status">1 hour ago</span>
                      </div>
                    </div>
                    <p className="card__description"></p>
                  </div>
                </a>{" "}
              </div>
              <div className="col-3">
                {" "}
                <a className=" card-1">
                  <img src={IMI} className="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                        <path />
                      </svg>
                      <img
                        className="card__thumb"
                        src="https://i.imgur.com/7D7I6dI.png"
                        alt=""
                      />
                      <div className="card__header-text">
                        <h3 className="card__title">Jessica Parker</h3>
                        <span className="card__status">1 hour ago</span>
                      </div>
                    </div>
                    <p className="card__description"></p>
                  </div>
                </a>{" "}
              </div>
            </div>{" "}
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-3">
                {" "}
                <a className=" card-1">
                  <img src={IMI} className="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                        <path />
                      </svg>
                      <img
                        className="card__thumb"
                        src="https://i.imgur.com/7D7I6dI.png"
                        alt=""
                      />
                      <div className="card__header-text">
                        <h3 className="card__title">Jessica Parker</h3>
                        <span className="card__status">1 hour ago</span>
                      </div>
                    </div>
                    <p className="card__description"></p>
                  </div>
                </a>{" "}
              </div>
              <div className="col-3">
                {" "}
                <a className=" card-1">
                  <img src={IMI} className="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                        <path />
                      </svg>
                      <img
                        className="card__thumb"
                        src="https://i.imgur.com/7D7I6dI.png"
                        alt=""
                      />
                      <div className="card__header-text">
                        <h3 className="card__title">Jessica Parker</h3>
                        <span className="card__status">1 hour ago</span>
                      </div>
                    </div>
                    <p className="card__description"></p>
                  </div>
                </a>{" "}
              </div>
              <div className="col-3">
                {" "}
                <a className=" card-1">
                  <img src={IMI} className="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                        <path />
                      </svg>
                      <img
                        className="card__thumb"
                        src="https://i.imgur.com/7D7I6dI.png"
                        alt=""
                      />
                      <div className="card__header-text">
                        <h3 className="card__title">Jessica Parker</h3>
                        <span className="card__status">1 hour ago</span>
                      </div>
                    </div>
                    <p className="card__description"></p>
                  </div>
                </a>{" "}
              </div>
              <div className="col-3">
                {" "}
                <a className=" card-1">
                  <img src={IMI} className="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                        <path />
                      </svg>
                      <img
                        className="card__thumb"
                        src="https://i.imgur.com/7D7I6dI.png"
                        alt=""
                      />
                      <div className="card__header-text">
                        <h3 className="card__title">Jessica Parker</h3>
                        <span className="card__status">1 hour ago</span>
                      </div>
                    </div>
                    <p className="card__description"></p>
                  </div>
                </a>{" "}
              </div>
            </div>{" "}
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

            {/* <span className="carousel-control-prev-icon" aria-hidden="true" /> */}
            {/* <span className="visually-hidden">Previous</span> */}
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
            {/* <span className="carousel-control-next-icon" aria-hidden="true" /> */}
            {/* <span className="visually-hidden">Next</span> */}
          </a>
        </div>
      </div>
    </>
  );
}
