import React, { useContext } from 'react'
import { PRODUCTS } from '../../Products'
import { Shopcontext } from '../../context/ShopcontextProvider'
import CartItem from './CartItem'
import "./cart.css"

const  Cart = () => {
  const {cartItems}  = useContext(Shopcontext);
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

    </div>
    </div>
  )
}

export default  Cart
