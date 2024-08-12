import React from 'react';
import SectionHeading from '../SectionHeading';
import serviceImg1 from '@/images/s1.png'
import serviceImg2 from '@/images/s2.png'
import serviceImg3 from '@/images/s3.png'
import Image from 'next/image';
import ServiceItem from './ServiceItem';
import { describe } from 'node:test';
import Link from 'next/link';

const services = [
    {
        title: 'Currency Wallet',
        describe: 'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
        image: serviceImg1,
        link: '#'
    },
    {
        title: 'Security Storage',
        describe: 'fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using',
        image: serviceImg2,
        link: '#'
    },
    {
        title: 'Expert Support',
        describe: 'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
        image: serviceImg3,
        link: '#'
    },
]

const Service = () => {
    return (
        <section className="service_section py-5">
            <div className="service_container">
                <div className="container mx-auto">
                    <SectionHeading
                        title="Our Services"
                        paragraph="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration"
                    />
                    <div className="grid grid-cols-3 grid-flow-row gap-6 xl:gap-10 my-10">
                        {
                            services.map((service, key) => (
                                <ServiceItem
                                    key={key}
                                    srvImg={service.image}
                                    title={service.title}
                                    describe={service.describe}
                                    url={service.link}
                                />
                            ))
                        }

                    </div>
                  <div className='w-full flex justify-center'>
                  <Link href={"/"} className=" mx-auto btn btn-primary">
                        View All
                    </Link>
                  </div>
                </div>
            </div>
        </section>
    );
};

export default Service;