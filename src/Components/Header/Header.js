import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
     return (
          <nav className='Header'>
               <img src={logo} alt="" />
               <div className='menu'>
                 <ul>
                    <li><NavLink to="/">Shop</NavLink></li>
                    <li><NavLink to="/order">Orders</NavLink></li>
                    <li><NavLink to="/inventory">Inventory</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                 </ul>
               </div>
          </nav>
     );
};

export default Header;