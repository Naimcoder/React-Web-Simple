import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStorage } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
     const [products, setProducts] = useState([])
     const [cart, setCart] = useState([])
     
     useEffect(() => {
          fetch('products.json')
               .then(res => res.json())
               .then(data => setProducts(data))
          
     }, [])
     useEffect(() => {
          const storageCrad = getStorage();
          const saveCard = [];
          for(const id in storageCrad) {
               const addToCard = products.find(product => product.id === id)
               if (addToCard) {
                    const quantity = storageCrad[id];
                    addToCard.quantity = quantity;
                    saveCard.push(addToCard);
               }
          }
          setCart(saveCard)
     },[products])
    
       const hendlerAddToCard = (seletedProduct) => {
     //     console.log('items',product)
            let newCard = [];
            const exsist = cart.find(product => product.id === seletedProduct.id)
            if (!exsist) {
                 seletedProduct.quantity = 1
                 newCard=[...cart,seletedProduct]
            } else {
                 const rest = cart.filter(product => product.id !== seletedProduct.id)
                 exsist.quantity = exsist.quantity + 1;
                 newCard=[...rest, exsist]
                 
            }
         
            setCart(newCard)
            addToDb(seletedProduct.id)
            
    }
     return (
          <div className='shop_container'>
               <div className="shop_card">
               {
                products.map(product=><Product product={product} key={product.id} hendlerAddToCard={hendlerAddToCard}></Product>)         
             }
            </div>
               <div className="shop_details">
                   <Cart card={cart}></Cart>
               </div>
          </div>
     );
};

export default Shop;