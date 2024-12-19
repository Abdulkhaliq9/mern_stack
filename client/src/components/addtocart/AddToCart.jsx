import React from "react";

import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../../context/cartContext";
import { Minus, Plus, X } from "lucide-react";

const AddToCart = () => {

  const {
    cart,
    removeFromCart,
    setIsCartOpen,
    getTotalPrice,
    updateQuantity,
  } = useCart();

  return (
    <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-xl z-40 p-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        <button
          onClick={() => setIsCartOpen(false)}
          className="text-gray hover:text-gray"
          aria-label="Close Cart"
        >
          <X className="text-2xl" />
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-gray text-center">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 border-b pb-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium line-clamp-2">{item.title}</h3>
                <p className="text-gray">${item.price}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 bg-gray-light rounded"
                    aria-label="Decrease Quantity"
                  >
                    <Minus className="text-xs" />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 bg-gray-light rounded"
                    aria-label="Increase Quantity"
                  >
                    <Plus className="text-xs" />
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
                aria-label="Remove Item"
              >
                <X className="text-xl" />
              </button>
            </div>
          ))}
          <div className="mt-6 pt-4 border-t">
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>${getTotalPrice()}</span>
            </div>
            <button className="w-full mt-4 bg-purple text-white py-3 rounded-lg hover:bg-blue transition-colors">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
