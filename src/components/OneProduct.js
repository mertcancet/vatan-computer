import React, { useState } from 'react';
import './OneProduct.css';
function OneProduct() {
  const [mouseInside, setMouseInside] = useState(false);
  const mouseEnter = () => {
    setMouseInside(true);
  };
  const mouseLeave = () => {
    setMouseInside(false);
  };

  return (
    <div
      className='product-card'
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <img src='https://via.placeholder.com/200x300' alt='product' />
      <br />
      <div className='product-rating'>
        <i className='fas fa-star' />
        <span>4,6 </span>

        <span className='product-rating-comment'>(122 Yorum)</span>
      </div>
      <br />
      <div className='product-serino'>
        <span>PA2500000TR</span>
      </div>

      <p> IPHONE 6 16 GB AKILLI TELEFON UZAY GRİSİ</p>

      <h2 className='product-price'>₺ 1.366</h2>

      {!mouseInside ? (
        <>
          <span className='product-shipping'>BUGÜN KARGODA</span>
          <br />
          <br />
          <br />
        </>
      ) : (
        <div className='product-addBasket'>
          <i className='fas fa-shopping-basket' />

          <button>Sepete Ekle</button>
        </div>
      )}
    </div>
  );
}

export default OneProduct;
