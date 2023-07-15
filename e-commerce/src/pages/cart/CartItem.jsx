import React from 'react'


const CartItem = (props) => {
    const {id,productName,price,ProductImg} = props.data;
  return (
    <div className='cartItem'>
        <img src={ProductImg} alt="img" />
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>Price :{price}</p>
        </div>
      
    </div>
  )
}

export default CartItem;
