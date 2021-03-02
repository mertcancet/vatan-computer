import React from 'react';
import OneProduct from './OneProduct';
import './Products.css';
import relatedProducts from '../data/relatedProducts.json';
function Products() {
  return (
    <div className='products-container'>
      <div>
        <div>
          <h1>Öne Çıkan Ürünler</h1>
        </div>

        <div className='products-favorite'>
          <h3>
            {' '}
            Tüm öne çıkan ürünler <i className='fas fa-arrow-right' />
          </h3>
        </div>
      </div>
      <div className='products-list'>
        {relatedProducts.map((product) => (
          <OneProduct
            key={product.code}
            title={product.title}
            serialNumber={product.code}
            rating={product.rating}
            comment={product.comment}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
