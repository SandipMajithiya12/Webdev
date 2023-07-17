import React,{useContext} from 'react'
import { Shopcontext } from '../../context/ShopcontextProvider';


const CartItem = (props) => {
    const {id,productName,price,ProductImg} = props.data;
    const {cartItems,addToCart,removeToCart,newUpadateAmout}  = useContext(Shopcontext);
  return (
    <div className='cartItem'>
        <img src={ProductImg} alt="img" />
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>Price :{price}</p>
            <div className='countHandler'>
              <button onClick={() => removeToCart(id)}>-</button>
              <input  value={cartItems[id]} onChange={(e) => newUpadateAmout(Number(e.target.value),id) }/>
              <button onClick={() => addToCart(id)}>+</button>
            </div>

        </div>

      
    </div>
  )
}

export default CartItem;
