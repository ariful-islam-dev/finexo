import Image from 'next/image';
import React from 'react';

type chooseProps = {
    title: string,
    description: string,
    img?: any
}

const ChooseItem: React.FC<chooseProps> = (props: chooseProps) => {
    return (
        <div className="flex gap-5 items-center bg-blue-200 dark:bg-blue-950 p-5 rounded-md shadow-md">
            <div className="img-box">
                <Image src={props.img} alt={props.title} />
            </div>
            <div className="p-5">
                <h5 className='text-2xl font-medium text-black dark:text-white'>
                    {props.title}
                </h5>
                <p className='text-blue-950 dark:text-blue-50'>
                    {props.description}
                </p>
            </div>
        </div>
    );
};

export default ChooseItem;