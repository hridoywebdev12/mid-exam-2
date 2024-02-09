import React from 'react';
import './Slaider.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import swiperimg from '../../assets/imges/slaider1.jpg'
import swiperimg2 from '../../assets/imges/slaider2.jpg'
import swiperimg3 from '../../assets/imges/slaider3.jpg'
import swiperimg4 from '../../assets/imges/slader4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slaider = () => {
    return (
        <div className='slaider'>
              <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={3}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
    >
      <SwiperSlide><img className=' ' src={swiperimg} alt=""  /></SwiperSlide>
      <SwiperSlide><img  src={swiperimg2} alt=""  /></SwiperSlide>
      <SwiperSlide><img  src={swiperimg3} alt=""  /></SwiperSlide>
      <SwiperSlide><img  src={swiperimg4} alt=""  /></SwiperSlide>
      
    </Swiper>
        </div>
    );
};

export default Slaider;