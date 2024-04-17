import React from "react";

export default function ShippingReturn() {
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="shipping-details">
            <h2  className="my-5">Shipping Details</h2>
            <div className="dimension">
              Estimated ship dimensions: 11.5 inches length x 9.0 inches width x
              2.0 inches height
            </div>
            <div className="weight">Estimated ship weight: 2.48 pounds</div>
            <div className="package">
              We regret that this item cannot be shipped to PO Boxes.
            </div>
            <div className="instruction">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation


            </div>
          </div>
          <div className="returns-details">
            <h3 className="mb-5">Returns</h3>
            <div className="return-note">
            Not happy with a purchase? No problem. We’ve made returning items as easy as possible. And, most purchases can be returned for free. Learn more about our Returns Policy
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
