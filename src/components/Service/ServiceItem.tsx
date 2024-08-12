import Image from 'next/image';
import React from 'react';
type serviceProps = {
    srvImg: any
    title: string,
    describe: string,
    url: string
}

const ServiceItem: React.FC<serviceProps> = ({ srvImg, title,describe, url }: serviceProps) => {
    return (
        <div className="bg-gray-200 shadow-sm rounded">
            <div className="flex flex-col items-center p-5">
                <div className="w-40 py-4">
                    <Image src={srvImg} alt="Service Image" />
                </div>
                <div className=" text-center my-3">
                    <h5 className='text-2xl font-semibold'>
                       {title}
                    </h5>
                    <p className=" p-3">
                        {describe}
                    </p>
                    <a href={url} className='hover:text-[#2abeeb] text-gray-700 py-2  font-medium'>
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;