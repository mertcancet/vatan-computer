import React from 'react';
import './SliderCard.css';

function SliderCard({ title, price }) {
  return (
    <div className='slidercard-container'>
      <img src='https://via.placeholder.com/200x500' alt='product' />
      <p>{title}</p>
      <h1 className='product-price'>₺ {price}</h1>
    </div>
  );
}

export default SliderCard;
