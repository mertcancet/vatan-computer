import React from 'react';
import OneProduct from './OneProduct';
import './Products.css';

function Products() {
  return (
    <div className='product-container'>
      <div classna>
        <h1>Öne Çıkan Ürünler</h1>

        <div className='product-favorite'>
          <h3>
            {' '}
            Tüm öne çıkan ürünler <i className='fas fa-arrow-right' />
          </h3>
        </div>
      </div>
      <div className='product-list'>
        <OneProduct />
        <OneProduct />
        <OneProduct />
        <OneProduct />
        <OneProduct />
        <OneProduct />
        <OneProduct />
      </div>
    </div>
  );
}

export default Products;
