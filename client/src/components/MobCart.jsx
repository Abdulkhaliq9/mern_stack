import { ChevronLeft, Minus, Plus, ShoppingBag, Trash, X } from 'lucide-react'
import { useState } from 'react'
import Shoe from "../assets/images/products/shoe5.jpg"
import { Link } from 'react-router-dom';

export default function MobCart() {



  // const [quantity, setQuantity] = useState(1);
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
    <>


<div className="d-flex justify-content-between align-items-center mb-2">
  <div className="back-to-home">
    <Link to="/" type='buton' className="btn"> <ChevronLeft/> </Link>
  </div>
  <div className="remove-all">
  <button className="btn" onClick={handleRemoveAll}> <Trash/> </button>

  </div>
</div>

      <div className="mob-view-cart ">
        {
          cartItems.map(item => (
            <div key={item.id} className="single-item mb-4">
              <div className="d-flex justify-content-between border-bottom pb-3">
                <div className="product_cate">
                  <ShoppingBag /> <span className="ps-2"> Shoes </span>
                </div>
                <div className="cancel-item">
                  <button className='border-0 text-danger bg-transparent' onClick={()=> handleRemoveItem(item.id)}>  <X /></button>
                </div>
              </div>
              <div className="d-flex  item-details mt-3">
                <div className=" single-item-img">
                  <img src={item.image} alt={item.name} className='img-fluid img-responsive' />
                </div>
                <div className="single-item-name-price ms-4">
                  <div className="single-item-name h5 fw-bolder">{item.name}</div>
                  <div className="single-item-type text-secondary my-2">Black Color</div>
                  <div className="single-item-price fw-bold "><sup>$</sup> {item.price} </div>
                </div>
                <div className="item-action ms-auto d-flex flex-column justify-content-center">

                  <button className='border-0 bg-transparent text-secondary  '  onClick={() => handleDecreaseQuantity(item.id)} ><Minus /></button>
                  <span className='px-2 '>{item.quantity}</span>
                  <button className='border-0 bg-transparent text-secondary '  onClick={() => handleIncreaseQuantity(item.id)}><Plus /></button>

                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className="checkout-cart mt-5">

        <div className="d-flex justify-content-between align-items-center"
        >
          <div className="amount-price">
            <div className="amount text-secondary fw-bold">Amount Price</div>
            <div className="price fw-bold h3 mt-2"><sup className='pe-1' >$</sup>{totalAmount}</div>
          </div>
          <div className="checkout-btn w-50">
            <a className="btn btn-primary border-0  text-white w-100">Check Out <span className='item-count'>
              {cartItems.length}
              
              </span></a>

          </div>
        </div>
      </div>
    </>
  )
}
