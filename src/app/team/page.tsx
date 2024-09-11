import Footer from '@/components/Footer';
import HeroArea from '@/components/HeroArea';
import Navbar from '@/components/Navbar';
import TeamComponent from '@/components/Team'
import React from 'react';

const Team = () => {
    return (
        <>
            <HeroArea path='/team'>
                <Navbar path='/team'/>
            </HeroArea>
            <TeamComponent/>
            <Footer/>
        </>
    );
};

export default Team;