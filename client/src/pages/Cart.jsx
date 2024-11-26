import { useState } from "react";
import UserLayout from "../layouts/UserLayout";
// import "../css/pages/cart.css";
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
      quantity: 1,
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: 150,
      image: Shoe,
      quantity: 1,
    },
    {
      id: 3,
      name: "Converse Chuck Taylor",
      price: 80,

      image: Shoe,
      quantity: 1,
    },
  ]);

  const handleIncreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };
  const handleDecreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  const handleRemoveAll = () => {
    setCartItems([]);
  };
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <UserLayout>
      <div className="w-full">
        <div className="grid grid-cols-2 my-12 gap-5 ">
          <div className="bg-[#f3f3f9] border-2 border-[#eee] p-6 rounded-[20px]">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-xl">Cart</h2>

              <button
                className="bg-transparent flex gap-3 border-none text-red-500 font-bold"
                onClick={handleRemoveAll}
              >
                <span className="">
                  <X />
                </span>
                Clear All
              </button>
            </div>
            <div className=" mt-12 flex  justify-between items-center px-4">
              <div className="font-semibold text-lg">Products</div>
              <div className="font-semibold text-lg">Name</div>
              <div className="font-semibold text-lg">Count</div>
              <div className="font-semibold text-lg">Price</div>
              <div className="font-semibold text-lg">Action</div>
            </div>
            {cartItems.map((item) => (
              <div
                key={item}
                className="p-3 rounded-2xl border-2 border-[#eee] flex items-center justify-between  my-3"
              >
                <div className="size-[100px] ">
                  <img
                    src={item.image}
                    alt="Item"
                    className="object-cover w-full h-full rounded-2xl "
                  />
                </div>
                <div className="cart_item_name font-bold"> {item.name} </div>
                <div className="cart_item_count flex items-center">
                  <div className="dec_btn">
                    <button
                      className=" border-none bg-transparent "
                      onClick={() => handleDecreaseQuantity(item.id)}
                    >
                      <Minus className="border rounded-full border-[#e6e6e6]" />
                    </button>
                  </div>
                  <span className="px-3">{item.quantity}</span>
                  <div className="inc_btn">
                    <button
                      className="bg-transparent  border-none "
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      {" "}
                      <Plus className="border rounded-full border-[#e6e6e6]" />{" "}
                    </button>
                  </div>
                </div>
                <div className="cart_item_price font-bold"> $ {item.price}</div>
                <div className="cart_action">
                  <button
                    className="bg-transparent border-none text-red-500"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <X />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#f3f3f9] border-2 border-[#eee] p-6 rounded-[20px]">
            <h3 className="font-bold border-bottom pb-3">Total Amount</h3>
            <div className="total_section flex justify-between my-3">
              <div className="left_side_total">
                {" "}
                <div className="sub_total text-secondary ">Subtotal</div>
                <div className="sub_total font-bold mt-4">Total</div>
              </div>
              <div className="right_side_ammount">
                <div className="sub_total_price text-secondary">
                  ${totalAmount}
                </div>
                <div className="total_amount font-bold mt-4">
                  ${totalAmount}
                </div>
              </div>
            </div>
            <div className="check_out">
              <a
                href=""
                type="button"
                className="btn p-2 w-full h-full bg-blue"
              >
                Check Out
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <MobCart /> */}
    </UserLayout>
  );
}
