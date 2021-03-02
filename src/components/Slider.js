import React from 'react';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import SliderCard from './SliderCard';

SwiperCore.use([Navigation, Pagination]);

function Slider() {
  return (
    <div className='slider-container'>
      <div className='slider-container-inner'>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          pagination
        >
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
