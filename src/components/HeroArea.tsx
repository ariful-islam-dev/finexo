"use client"
import React, { useEffect } from 'react';
import heroBg from "@/images/hero-bg.png"
import Image from 'next/image';

type PropsType = {
    path: string,
    children: React.ReactNode
}






const HeroArea: React.FC<PropsType> = ({path = "/", children }: PropsType) => {
   
  
    return (
        <div className={`relative ${ path === "/" ? "min-h-[100vh]" : "min-h-[100px] "} flex flex-col`}>

           {
            path === "/" ? (
                <div className='absolute top-0 left-0 w-full h-full  flex overflow-hidden -z-10'>
                <div className='min-w-full min-h-full'>
                    <Image src={heroBg} alt='Hero Section BG' className='min-w-full h-full' />
                </div>
            </div>
            ): (
                <div className='absolute top-0 left-0 w-full h-full   flex  -z-10'>
                    <div className='w-full h-full bg-[#012d69]'></div>
                </div>
            )
           }

            <div className='absolute top-0 left-0 w-full h-full'> {children}</div>
        </div>
    );
};

export default HeroArea;