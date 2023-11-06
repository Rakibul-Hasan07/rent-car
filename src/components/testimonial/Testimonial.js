'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import TestimonialPage from './TestimonialPage';

const Testimonial = () => {
  return (
    <div>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        {
          [...Array(5)].map((item, idx) => <SwiperSlide key={idx} datas={item}><TestimonialCard /></SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Testimonial;