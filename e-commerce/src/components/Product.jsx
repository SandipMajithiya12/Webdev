import React from 'react'

const Product = (props) => {
    const {id,productName,price,ProductImg} = props.data;
  return (
   
    <div className='product'>
        <img src={ProductImg} />
        
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>{price}</p>
        </div>
        
    </div>
  )
}

export default Product;
