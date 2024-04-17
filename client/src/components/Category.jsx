import React from "react";
import "../css/components/category.css";
import Deals from "../assets/images/category/deals.jpg";
import Fashion from "../assets/images/category/fashion.jpg";
import Beauty from "../assets/images/category/beauty.jpg";
import Electronics from "../assets/images/category/electronics.jpg";
import Sports from "../assets/images/category/sports.jpg";
import Toys from "../assets/images/category/toys.jpg";
import Mother from "../assets/images/category/mother.jpg";
import Jewelry from "../assets/images/category/jewelry.jpg";
import HomeGarden from "../assets/images/category/homegarden.jpg";
export default function Category() {
  return (
    <>
      <div className="category-heading">
        <h2>Shop By category </h2>
      </div>
      <div className="category-list  ">
        <div className="category-menu list-unstyled d-flex flex-row">
          <div className="category-item">
            <a href="">
              <img src={Deals} alt="deals" />
              <span className="categogy-name">Deals</span>
            </a>
          </div>
          <div className="category-item">
            <a href="">
              <img src={Fashion} alt="fashion" />
              <span className="categogy-name">Fashion</span>
            </a>
          </div>
          <div className="category-item">
            <a href="">
              <img src={Toys} alt="toys" />
              <span className="categogy-name">Toys</span>
            </a>
          </div>
          <div className="category-item">
            <a href="">
              <img src={Beauty} alt="beauty" />
              <span className="categogy-name">Beauty</span>
            </a>
          </div>
          <div className="category-item">
            <a href="">
              <img src={Sports} alt="sports" />
              <span className="categogy-name">Sports</span>
            </a>
          </div>
          <div className="category-item">
            <a href="">
              <img src={Jewelry} alt="jewelry" />
              <span className="categogy-name">Jewelry</span>
            </a>
          </div>
          <div className="category-item">
            <a href="">
              <img src={Mother} alt="mother" />
              <span className="categogy-name">Mother & Baby</span>
            </a>
          </div>
          <div className="category-item">
            <a href="">
              <img src={Electronics} alt="electronice" />
              <span className="categogy-name">Electronics</span>
            </a>
          </div>
          <div className="category-item">
            <a href="">
              <img src={HomeGarden} alt="home & garden" />
              <span className="categogy-name">Home & Garden</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
