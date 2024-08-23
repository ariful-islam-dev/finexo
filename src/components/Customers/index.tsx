import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from '../SectionHeading';
import SlideCustomer from './SlideCustomer';

const Customer
 = () => {
    return (
        <section className="py-20">
    <div className="container mx-auto">
      <div className="heading_container heading_center psudo_white_primary mb_45">
        <SectionHeading title='What says our Customer'/>
      </div>
      <div className=" ">
        <SlideCustomer/>
      </div>
    </div>
  </section>

    );
};

export default Customer
;