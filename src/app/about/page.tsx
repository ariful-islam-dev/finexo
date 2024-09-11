import HeroArea from '@/components/HeroArea';
import Navbar from '@/components/Navbar';
import React from 'react';
import AboutComponent from '@/components/About'
import Footer from '@/components/Footer';

const About = () => {
    let path ="/about"
    return (
        <div>
            <HeroArea path={path}>
                <Navbar path={path}/>
            </HeroArea>
            <AboutComponent/>
            <Footer/>
        </div>
    );
};

export default About;