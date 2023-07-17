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

  const getTotalCartAmount = () =>
  {
    let totalAmout = 0;
    for(const item in cartItems)
    {
      if(cartItems[item] >0)
      {
        let iteminfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmout +=cartItems[item] *iteminfo.price;
      }
    }
    return totalAmout;
  };
  const addToCart = (itemID) =>{
    setCartItems((prev) => ({...prev,[itemID]:prev[itemID]+1}));
  }
  const removeToCart = (itemID) =>{
    setCartItems((prev) => ({...prev,[itemID]:prev[itemID]-1}));
  }
  const newUpadateAmout = (newAmout,itemID) =>{
    setCartItems((prev) => ({...prev,[itemID] : newAmout}))
  }
  const contextvalue = {cartItems,addToCart,removeToCart,newUpadateAmout,getTotalCartAmount}
  console.log(cartItems);
  return (

    <Shopcontext.Provider value={contextvalue}>
      {props.children}
    </Shopcontext.Provider>
  ) 
}

export default ShopcontextProvider;