"use client"
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css";
import Slide from './Slide';
import slideImg from '@/images/slider-img.png'



const Slider = () => {
    return (
        <div className="min-h-[80vh]">
            <Swiper mousewheel loop={true} autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }} pagination={{ clickable: true }} modules={[Pagination, Mousewheel, Navigation, Autoplay]}
                style={{
                    "--swiper-pagination-color": "#43E8E0",
                    "--swiper-pagination-bullet-inactive-color": "#fff",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "16px",
                    "--swiper-pagination-bullet-horizontal-gap": "10px"
                }}
            >
                <SwiperSlide><Slide image={slideImg} /></SwiperSlide>
                <SwiperSlide><Slide image={slideImg} /></SwiperSlide>
                <SwiperSlide><Slide image={slideImg} /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;