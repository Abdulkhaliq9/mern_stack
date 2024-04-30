import React, { useRef, useState } from "react";
import UserLayout from "../layouts/UserLayout";
import Laptop from "../assets/images/products/1.jpg";
import Zara from "../assets/images/brands/zara.png";
import Lap1 from "../assets/images/products/1.jpg";
import Lap2 from "../assets/images/products/3.jpg";
import Camera from "../assets/images/products/4.jpg";
import { MinusCircle, PlusCircle, ShoppingCart } from "lucide-react";
import "../css/components/pages/productdetail.css";
import Description from "../components/product-detail/Description";
import Reviews from "../components/product-detail/Reviews";
import ShippingReturn from "../components/product-detail/ShippingReturn";
import { useAuth } from "../context/auth";
export default function ProductDetail() {
  const [zoomed, setZoomed] = useState(false);
  const [mainImage, setMainImage] = useState(Laptop);
  const imageRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("description");
  const [count, setCount] = useState(0);

  function onZoom(e) {
    const img = imageRef.current;
    const x = e.clientX - img.offsetLeft;
    const y = e.clientY - img.offsetTop;
    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2)";
    setZoomed(true);
  }

  function offZoom() {
    const img = imageRef.current;
    img.style.transformOrigin = `center center`;
    img.style.transform = "scale(1.2)";
    setZoomed(false);
  }

  function changeMainImage(newImage) {
    setMainImage(newImage);
  }

  const handleSectionClick = (section) => {
    setActiveCategory(section);
  };

  const handleCountIncrease = () => {
    if (count < 5) {
      setCount(count + 1);
    }


  };
  const handleCountDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };



  const [auth, setAuth] = useAuth()

  return (
    <UserLayout>
      <div className="product-detail mt-5" >
        <div className="container-fluid">
          <div className="row">
            <pre>{JSON.stringify(auth, null, 3)}</pre>
            <div className="col-md-6">
              <div className="image-side">
                <div className="item-img">



                  <img
                    className="w-100"
                    src={mainImage}
                    alt="Item Image"
                    ref={imageRef}
                    onMouseMove={onZoom}
                    onMouseOver={onZoom}
                    onMouseLeave={offZoom}
                  />
                </div>
                <div className="item-other-img">
                  <div className="row">
                    <div className="col-md-4">
                      <div
                        className="items-sm-img"
                        onClick={() => changeMainImage(Camera)}
                      >
                        <img src={Camera} alt="" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div
                        className="items-sm-img"
                        onClick={() => changeMainImage(Lap1)}
                      >
                        <img src={Lap1} alt="" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div
                        className="items-sm-img"
                        onClick={() => changeMainImage(Lap2)}
                      >
                        <img src={Lap2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="details-side">
                <div className="product-title">
                  <h2>ProArt StudioBook Pro 17 W700</h2>
                  <span className="product-category">
                    in Computers & Accessories
                  </span>
                </div>
                <div className="product-price">
                  <h3 className="price">$1,200.00</h3>
                  <span className="stock">Available in Stock</span>
                </div>
                <div className="item-add-sub mt-3">
                  <div className="button d-flex align-items-center">
                    <button
                      className={`btn btn-add icon ${
                        count === 0  ? "disabled" : ""
                      }`}
                      onClick={handleCountDecrease}
                    >
                      <MinusCircle />
                    </button>
                    <div className="mx-auto fw-bold">{count}</div>
                    <button
                      className={`btn btn-add icon ${
                        count === 5  ? "disabled" : ""
                      }`}
                      onClick={handleCountIncrease}
                    >
                      <PlusCircle />
                    </button>
                  </div>
                </div>
                <div className="buy-cart mt-4">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="cart-now">
                        <button className={`btn text-uppercase fs-5 me-3 ${count === 0 ? " disabled" : ""}`}>
                          <ShoppingCart />
                          <span className="ms-2">Add to cart</span>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="buy-now">
                        <button className="btn text-uppercase">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="store-name mt-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="store-img d-flex ">
                        <img src={Zara} alt="store-logo" />
                        <div className="store-name d-flex flex-column p-2">
                          <span style={{ color: "var(--color2)" }}>Store</span>
                          <span className="fw-bold fs-6">Zara Collection</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-info mt-5">
            <div className="info-content">
              <div className="d-flex justify-content-around align-items-center">
                <a
                  className={`button ${
                    activeCategory === "description" ? "active" : ""
                  }`}
                  id="description"
                  onClick={() => handleSectionClick("description")}
                >
                  Description
                </a>
                <a
                  className={`button ${
                    activeCategory === "reviews" ? "active" : ""
                  }`}
                  id="reviews"
                  onClick={() => handleSectionClick("reviews")}
                >
                  Reviews
                </a>
                <a
                  className={`button ${
                    activeCategory === "returns" ? "active" : ""
                  }`}
                  id="shipping"
                  onClick={() => handleSectionClick("returns")}
                >
                  Shipping & returns
                </a>
              </div>
            </div>

            {activeCategory === "description" && (
              <section className="descr" id="desc1">
                <Description />
              </section>
            )}

            {activeCategory === "reviews" && (
              <section className="reviews" id="reviews">
                <Reviews />
              </section>
            )}

            {activeCategory === "returns" && (
              <section className="shipphng" id="shipping">
                <ShippingReturn />
              </section>
            )}
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
