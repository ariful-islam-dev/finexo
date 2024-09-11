import React from 'react';
import SectionHeading from '../SectionHeading';
import serviceImg1 from '@/images/s1.png'
import serviceImg2 from '@/images/s2.png'
import serviceImg3 from '@/images/s3.png'
import ServiceItem from './ServiceItem';
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
        <section className="py-20 sm:px-5">
            <div className="">
                <div className="container mx-auto">
                    <SectionHeading
                        title="Our Services"
                        paragraph="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration"
                    />
                    <div className="grid md:grid-cols-3 grid-cols-1 grid-flow-row gap-10 xl:gap-20 my-10">
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
                  <Link href={"/service"} className=" mx-auto btn btn-primary">
                        View All
                    </Link>
                  </div>
                </div>
            </div>
        </section>
    );
};

export default Service;