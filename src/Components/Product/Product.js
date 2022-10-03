import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
     const { product, hendlerAddToCard } = props;
     const { price, img, ratings, name, seller } = product
  
   
     return (
          <div className='card'>
               <img src={img} alt="" />
               <div className='card_info'>
               <p className='product_name'>{name}</p>
               <p className='price'>Price: ${price}</p>
               <p><small>Manufacturer: {seller}</small></p>
               <p><small>Rating: {ratings}</small></p>
               </div>
               <button onClick={()=>hendlerAddToCard(product)} className='card-btn'>
                    <p className='btn-text'>Add To Card</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
               </button>
          </div>
     );
};

export default Product;