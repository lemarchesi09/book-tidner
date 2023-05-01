import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


function Finder() {
    return (
        <div className='flex flex--col justify-center '>
            <Swiper
                  slidesPerView={1}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide> <Card /> </SwiperSlide>
                <SwiperSlide> <Card /> </SwiperSlide>
                <SwiperSlide> <Card /> </SwiperSlide>
            </Swiper>

            
        </div>
    );
}

export default Finder;