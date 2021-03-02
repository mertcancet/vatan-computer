import React from 'react';
import './OneProduct.css';
function OneProduct() {
  return (
    <div className='product-card '>
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
      <span className='product-shipping'>BUGÜN KARGODA</span>
      <br />
      <br />
      <br />
    </div>
  );
}

export default OneProduct;
