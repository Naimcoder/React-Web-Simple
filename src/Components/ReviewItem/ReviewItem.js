import React from 'react';
import './ReviewItem.css'
 import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewItem = ({items,hendleDeletedbtn}) => {
    const {img,id,name,price,quantity,shipping,ratings}=items;
    return (
        <div>
        <div className='card-container'>
             <div className='card-img'>
                 <img src={img} alt="" />
             </div>
             <div className='card-info-container'>
                 <div className="card-info">
                 <p>{name}</p>
                 <p><small>Shipping: ${shipping}</small></p>
                 <p><small>Price: ${price}</small></p>
                 </div>
                 <div className='card-info-btn'>
                   <button className='btn-deleted' onClick={()=>hendleDeletedbtn(id)}>
                    <FontAwesomeIcon className='deleted-icon' icon={faTrashAlt}></FontAwesomeIcon>
                   </button>
                  </div>
             </div>
        </div>
            
           
            

        </div>
    );
};

export default ReviewItem;