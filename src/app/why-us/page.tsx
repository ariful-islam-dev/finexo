import ChooseComponet from '@/components/Choose';
import Footer from '@/components/Footer';
import HeroArea from '@/components/HeroArea';
import Navbar from '@/components/Navbar';
import React from 'react';

const WhyUs = () => {
    return (
        <div>
            <HeroArea path='/why-us'>
                <Navbar path='/why-us'/>

            </HeroArea>
            <ChooseComponet/>
            <Footer/>
        </div>
    );
};

export default WhyUs;