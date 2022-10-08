import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
const Orders = () => {

const {products,previousCard}=useLoaderData();
  const [cart,setCart]=useState(previousCard);

    const clearCart=()=>{
          setCart([]);
          deleteShoppingCart()
     }

const hendleDeletedbtn=(id)=>{
  console.log(id)
  const remaining = cart.filter(product=>product.id !== id)
  setCart(remaining);
  removeFromDb(id)
}
    return (
        <div>
            <div className='shop-container'>
                <div className='products-container'>
                     {
                    cart.map(Pd=><ReviewItem items={Pd}hendleDeletedbtn={hendleDeletedbtn} key={Pd.id}></ReviewItem>)}
                    {
                      cart.length === 0 && <h2>No Items For The Review please <Link to='/'>Shop more..</Link></h2>
                    }
                </div>
                <div className='cart-conatiner'>
                  <Cart clearCart={clearCart} card={cart} ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;