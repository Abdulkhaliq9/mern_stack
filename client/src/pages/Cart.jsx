import { useState } from "react";
import UserLayout from "../layouts/UserLayout";
import "../css/pages/cart.css";
import { Minus, Plus, X } from "lucide-react";
import Shoe from "../assets/images/products/shoe5.jpg";
import MobCart from "../components/MobCart";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Nike Air Force 1",
      price: 120,
      image: Shoe,
      quantity: 1
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: 150,
      image: Shoe,
      quantity: 1
    },
    {
      id: 3,
      name: "Converse Chuck Taylor",
      price: 80,

      image: Shoe,
      quantity: 1
    },
  ]);

  const handleIncreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? {
      ...item, quantity: item.quantity + 1
    } : item))
  }
  const handleDecreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id && item.quantity > 1 ? {
      ...item, quantity: item.quantity - 1
    } : item))
  }


  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  }
  const handleRemoveAll = () => {
    setCartItems([]);
  }
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)


  return (
    <UserLayout>
      <div className="row mt-5">
        <div className="col-lg-8 col-md-12  ">
          <div className="cart_products">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Cart</h2>

              <button className="bg-transparent border-0 text-danger fw-bold" onClick={handleRemoveAll}>
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
            {
              cartItems.map((item) => (

                <div key={item} className="cart_items d-flex align-items-center justify-content-between  my-3">
                  <div className="cart_item_img">
                    <img src={item.image} alt="Item" className="img-fluid w-100 " />
                  </div>
                  <div className="cart_item_name fw-bold"> {item.name} </div>
                  <div className="cart_item_count d-flex align-items-center">
                    <div className="dec_btn">
                      <button className=" border-0 bg-transparent " onClick={() => handleDecreaseQuantity(item.id)}>
                        <Minus />
                      </button>
                    </div>
                    <span className="px-3">
                      {item.quantity}
                    </span>
                    <div className="inc_btn">
                      <button className="bg-transparent  border-0 " onClick={() => handleIncreaseQuantity(item.id)}>
                        {" "}
                        <Plus />{" "}
                      </button>
                    </div>
                  </div>
                  <div className="cart_item_price fw-bold"> $ {item.price}</div>
                  <div className="cart_action">
                    <button className="bg-transparent border-0 text-danger" onClick={()=> handleRemoveItem(item.id)}>
                      <X />
                    </button>
                  </div>
                </div>
              ))
            }
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
                <div className="sub_total_price text-secondary">${totalAmount}</div>
                <div className="total_amount fw-bold h5 mt-4">${totalAmount}</div>
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




      <MobCart />

    </UserLayout>
  );
}
