import Footer from '@/components/Footer';
import HeroArea from '@/components/HeroArea';
import Navbar from '@/components/Navbar';
import ServiceComponent from '@/components/Service';
import React from 'react';

const Service = () => {
    return (
        <>
            <HeroArea path='/service'>
                <Navbar path='/service'/>
            </HeroArea>
            <ServiceComponent/>
            <Footer/>
        </>
    );
};

export default Service;