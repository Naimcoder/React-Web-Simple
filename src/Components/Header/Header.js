import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
     return (
          <nav className='Header'>
               <img src={logo} alt="" />
               <div className='menu'>
                 <ul>
                    <li><a href="/home">Shope</a></li>
                    <li><a href="/home">Orders</a></li>
                    <li><a href="/home">Inventory</a></li>
                    <li><a href="/home">About</a></li>
                 </ul>
               </div>
          </nav>
     );
};

export default Header;