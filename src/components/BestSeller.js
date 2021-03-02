import React from 'react';
import OneProduct from './OneProduct';
import './BestSeller.css';
import bestSellerProducts from '../data/bestSeller.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

function BestSeller() {
  return (
    <div className='bestseller-container'>
      <div>
        <h1>Çok Satanlar</h1>

        <div className='products-favorite'>
          <h3>
            {' '}
            Tüm çok satanlar <i className='fas fa-arrow-right' />
          </h3>
        </div>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination
      >
        {bestSellerProducts.map((product) => (
          <SwiperSlide key={product.code}>
            <OneProduct
              title={product.title}
              serialNumber={product.code}
              rating={product.rating}
              comment={product.comment}
              price={product.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BestSeller;
