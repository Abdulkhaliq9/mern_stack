import { useState, useEffect } from "react";
import UserLayout from "../layouts/UserLayout";
import "../css/components/pages/cart.css";
import { Minus, Plus, X } from "lucide-react";
import Shoe from "../assets/images/products/shoe5.jpg";

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 100;
  const [total, setTotal] = useState(pricePerItem);

  useEffect(() => {
    setTotal(quantity * pricePerItem);
  }, [quantity]);

  const handleIncrement = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <UserLayout>
      <div className="row mt-5">
        <div className="col-lg-8 col-md-12  ">
          <div className="cart_products">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Cart</h2>

              <button className="bg-transparent border-0 text-danger fw-bold">
                <span className="pe-2">
                  <X />
                </span>
                Clear All
              </button>
            </div>
            <div className="cart_heading mt-3 d-flex  justify-content-between align-content-center px-4 ">

              <div className="h6">Products</div>
              <div className="h6">Name</div>
              <div className="h6">Count</div>
              <div className="h6">Price</div>
              <div className="h6">Action</div>

            </div>
            <div className="cart_items d-flex align-items-center justify-content-between  my-3">
              <div className="cart_item_img">
                <img src={Shoe} alt="Item" className="img-fluid w-100 " />
              </div>
              <div className="cart_item_name fw-bold"> Shoe</div>
              <div className="cart_item_count d-flex align-items-center">
                <div className="dec_btn">
                  <button className=" border-0 bg-transparent " onClick={handleDecrement}>
                    <Minus />
                  </button>
                </div>
                <span className="px-3">
                  {quantity}
                </span>
                <div className="inc_btn">
                  <button className="bg-transparent  border-0 " onClick={handleIncrement}>
                    {" "}
                    <Plus />{" "}
                  </button>
                </div>
              </div>
              <div className="cart_item_price fw-bold"> $ {total}</div>
              <div className="cart_action">
                <button className="bg-transparent border-0 text-danger">
                  <X />
                </button>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="add_check">
            <h3 className="fw-bold border-bottom pb-3">Total Amount</h3>
            <div className="total_section d-flex justify-content-between my-3">
              <div className="left_side_total">
                {" "}
                <div className="sub_total text-secondary ">Subtotal</div>
                <div className="sub_total fw-bold h5 mt-4">Total</div>
              </div>
              <div className="right_side_ammount">
                <div className="sub_total_price text-secondary">${total}</div>
                <div className="total_amount fw-bold h5 mt-4">${total}</div>
              </div>
            </div>
            <div className="check_out">
              <a
                href=""
                type="button"
                className="btn p-2 w-100"
                style={{
                  backgroundColor: "var(--color4) !important",
                }}
              >
                Check Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
