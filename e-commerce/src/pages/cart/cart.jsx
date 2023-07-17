import React, { useContext } from 'react'
import { PRODUCTS } from '../../Products'
import { Shopcontext } from '../../context/ShopcontextProvider'
import CartItem from './CartItem'
import "./cart.css"
import { useNavigate } from 'react-router-dom';

const  Cart = () => {
  const {cartItems,getTotalCartAmount}  = useContext(Shopcontext);
  const ta = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className='cart'>
    <div>
      <h1>Your Cart  Items </h1>
    </div>
    <div className='cartItems'>
      {PRODUCTS.map((product) =>{
        if((cartItems)[product.id] !== 0)
        {
          return <CartItem data={product} />
        }
      })}
    {}
    </div>
      {ta > 0 ?(
    <div className="checkout">
     <p>Subtotal : {ta}</p>
      <button onClick={() => navigate("/")}> Continue Shopping </button>
      <button>Checkout</button>
    </div>)
    : <h1>your cart is empty</h1>
}
    </div>
  )
}

export default  Cart
