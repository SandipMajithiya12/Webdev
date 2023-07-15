import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../Products';

export const Shopcontext = createContext(null);
const ShopcontextProvider = (props) => {
  const getDefaultCart = () =>{
    let cart ={}
    for(let i =0 ;i< PRODUCTS.length+1;i++){
      cart[i] = 0;
    }
    return cart;
  }
  const [cartItems,setCartItems] = useState(getDefaultCart());
  const addToCart = (itemID) =>{
    setCartItems((prev) => ({...prev,[itemID]:prev[itemID]+1}));
  }
  const removeToCart = (itemID) =>{
    setCartItems((prev) => ({...prev,[itemID]:prev[itemID]-1}));
  }
  const contextvalue = {cartItems,addToCart,removeToCart}
  console.log(cartItems);
  return (

    <Shopcontext.Provider value={contextvalue}>
      {props.children}
    </Shopcontext.Provider>
  ) 
}

export default ShopcontextProvider;