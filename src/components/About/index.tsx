import Image from 'next/image';
import React from 'react';
import aboutImg from '@/images/about-img.png'
import SectionHeading from '../SectionHeading';

const About = () => {
    return (
        <section className="primary-bg text-white py-20">
        <div className="container mx-auto">
          <SectionHeading
           title="About Us"
           paragraph=' Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus'

          />
          
          <div className="grid grid-cols-2 gap-10 ">
            <div className=" ">
              <div className="w-full">
                <Image src={aboutImg} alt="About"/>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="detail-box">
                <h3 className='text-2xl'>
                  We Are Finexo
                </h3>
                <p className='py-5'>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                  in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                  are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                  the middle of text. All
                </p>
                <p className='pb-5'>
                  Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.
                </p>
                <a href=""className='btn btn-primary'>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    );
};

export default About;