import React from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UserLayout from "../layouts/UserLayout";
import Carousel from "../components/Carousel";
import Category from "../components/Category";
import BestSeller from "../components/BestSeller";
import ProductCarousel from "../components/ProductCarousel";
import { Toaster } from "react-hot-toast";
export default function DashBoard() {
  return (
    <>
      <UserLayout>
        <div className="main-content">

          <Toaster/>
          <section
            className="category-menu-main-carousel mb-5"
            style={{ padding: "10px 0 0" }}
          >
            <Carousel />
          </section>
          {/* cateogaory */}
          <section className="category mb-5">
            <Category />
          </section>

          <section className="trending-products mb-5">
            <BestSeller />
          </section>

          <section className="mb-5 ">
            <ProductCarousel />
          </section>

          <section className="mt-5">
            
          </section>
        </div>
      </UserLayout>
    </>
  );
}
