import Image from 'next/image';
import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

type SlideItemProps = {
    name: string,
    designation: string,
    body: string,
    photo: any
}

const SlideItemCustomer:React.FC<SlideItemProps> = ({name, designation, body, photo}: SlideItemProps) => {
    return (
        <div className="relative mt-32">
            <div className="bg-blue-100">
              <div className="w-40 h-40 absolute left-10 -top-28 ">
                <Image src={photo} alt="" className="border-8 border-blue-100 w-full h-full rounded-full"/>
              </div>
              <div className="bg-blue-100 p-10 shadow-md rounded-md">
                <div className="flex justify-between py-5">
                  <div className="client_info">
                    <h6 className='text-2xl text-blue-950'>
                      {name}
                    </h6>
                    <p>
                      {designation}
                    </p>
                  </div>
                  <FaQuoteRight className='text-2xl text-blue-900'/>
                </div>
                <p>
                  {body} </p>
              </div>
            </div>
          </div>
    );
};

export default SlideItemCustomer;