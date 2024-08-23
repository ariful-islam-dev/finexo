"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SlideItemCustomer from './SlideItemCustomer';
import client1 from '@/images/client1.jpg'
import client2 from '@/images/client2.jpg'
import client3 from '@/images/team-2.jpg'
import client4 from '@/images/team-3.jpg'
import { Autoplay, Navigation } from 'swiper/modules';

interface CUSTOMER {
    name: string,
    address: string,
    body: string,
    photo: any
}

const customers: CUSTOMER[] = [
    {
        name: "LusDen",
        address: "magna aliqua, ut",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
        photo: client1
    },
    {
        name: "Zen Court",
        address: "magna aliqua, ut",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
        photo: client2
    },
    {
        name: "Jenifar Albart",
        address: "magna aliqua, ut",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
        photo: client3
    },
    {
        name: "Junior Json",
        address: "magna aliqua, ut",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
        photo: client4
    }
]

const SlideCustomer = () => {
    return (
        <Swiper
            spaceBetween={50}
            // slidesPerView={2}
            navigation
            modules={[  Navigation, Autoplay]}
            loop={true} 
            breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
        >

            {
                customers.map((customer, key) => (
                    <SwiperSlide>
                        <SlideItemCustomer name={customer.name} designation={customer.address} body={customer.body} photo={customer.photo} key={key} />
                    </SwiperSlide>
                ))
            }
            {/* <SwiperSlide>
                <SlideItemCustomer name={customers[1].name} designation={customers[1].address} body={customers[1].body} photo={customers[1].photo} />
            </SwiperSlide> */}

            {/* <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide> */}


        </Swiper>
    );
};

export default SlideCustomer;