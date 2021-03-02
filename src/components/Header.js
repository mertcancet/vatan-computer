import React from 'react';
import './Header.css';
import logo from '../assets/img/vatanlogo.svg';
function Header() {
  return (
    <header className='header-container'>
      <div className='header-left'>
        <img src={logo} alt='vatan-logo'></img>
        <div className='header-left-categories'>
          <i className='fas fa-bars'></i>
          <p>Kategoriler</p>
        </div>
      </div>

      <input placeholder='Ürün ara' />
      <div className='header-right'>
        <div className='header-right-account'>
          <p>Üyelik</p>
          <i className='fas fa-user'></i>
        </div>
        <div className='header-right-basket'>
          <p>Sepetim</p>
          <i className='fas fa-shopping-cart'></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
