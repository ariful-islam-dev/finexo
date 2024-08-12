import React from 'react';
import heroBg from "@/images/hero-bg.png"
import Image from 'next/image';

type PropsType = {
    children: React.ReactNode
}

const HeroArea: React.FC<PropsType> = ({ children }: PropsType) => {
    return (
        <div className='relative h-100[vh] flex flex-col'>
            <div className='absolute top-0 left-0 w-full h-full flex overflow-hidden -z-10'>
                <div className='min-w-full min-h-full'>
                    <Image src={heroBg} alt='Hero Section BG' className='min-w-full h-full' />
                </div>
            </div>
            {children}
        </div>
    );
};

export default HeroArea;