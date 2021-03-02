import React from 'react';
import OneProduct from './OneProduct';
import './BestSeller.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

function BestSeller() {
  return (
    <div className='bestseller-container'>
    
      <Swiper
        spaceBetween={0}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination
      >
        <SwiperSlide>
          <OneProduct />
        </SwiperSlide>
        <SwiperSlide>
          <OneProduct />
        </SwiperSlide>
        <SwiperSlide>
          <OneProduct />
        </SwiperSlide>
        <SwiperSlide>
          <OneProduct />
        </SwiperSlide>
        <SwiperSlide>
          <OneProduct />
        </SwiperSlide>
        <SwiperSlide>
          <OneProduct />
        </SwiperSlide>
        <SwiperSlide>
          <OneProduct />
        </SwiperSlide>
        <SwiperSlide>
          <OneProduct />
        </SwiperSlide>
        <SwiperSlide>
          <OneProduct />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BestSeller;
