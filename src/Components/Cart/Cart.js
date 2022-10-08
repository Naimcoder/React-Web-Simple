import React from 'react';
import'./Cart.css';
const Cart = (props) => {
     const { card,clearCart,children} = props;
 
     // console.log(card);
     let total = 0;
     let shipping = 0;
     let quantity = 0;
     for (const product of card) {
             quantity = quantity + product.quantity
          total = total + (product.price * product.quantity);
          shipping = shipping + product.shipping;
       
          
     }
     const tax =parseFloat(( total * 0.1).toFixed(2))
        const grandTotal = total + tax + shipping;
     return (
          <div className='Cart-container'>
             <h2>Oder Summary</h2>
               <p>Add To items:  {quantity}</p>
               <p>Total Price: ${total}</p>
               <p>Total Shipping: ${shipping}</p>
               <p>Tax: ${tax}</p>
               <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
               <button onClick={clearCart}>Clear cart</button>
               {children}
          </div>
     );
};

export default Cart;