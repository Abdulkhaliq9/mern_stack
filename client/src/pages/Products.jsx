import React from "react";
import UserLayout from "../layouts/UserLayout";
import Shop_Banner from "../assets/images/shop_header.jpg";
import "../css/components/pages/products.css";
import ProductsList from "../components/ProductsList";

import DropDown from "../components/DropDown";

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
        <div className="row g-5">
          <div className="col-md-3">
            <DropDown />
          </div>

          <div className="col-md-9">
            <h2 className="border-bottom">Products</h2>
            <ProductsList />
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
