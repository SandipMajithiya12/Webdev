import React, { useContext } from 'react';
import { Shopcontext } from '../context/ShopcontextProvider';

const Product = (props) => {
    const {id,productName,price,ProductImg} = props.data;
    const { addToCart ,cartItems } = useContext(Shopcontext);
    const cartItemAmout = cartItems[id];
  return (
   
    <div className='product'>
        <img src={ProductImg} />
        
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>{price}</p>
        </div>
        <button className='addtocartbtn' onClick={() => addToCart(id)}
   >Add to cart {cartItemAmout > 0 && <>({cartItemAmout})</>}</button>
    </div>
  )
}

export default Product;
