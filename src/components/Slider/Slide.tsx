import Image from 'next/image';
import React from 'react';
type SlideProps = {
    image: any,
   
  }


const Slide:React.FC<SlideProps> = ({image}:SlideProps) => {
    return (
        
            <div className="container  mx-auto flex flex-col md:flex-row lg:flex-row xl:flex-row items-center">
                <div className="">
                    <div className="detail-box">
                        <h1 className='text-6xl uppercase font-semibold space-y-3 text-white'>
                            Crypto <br className='my-6' />
                            Currency
                        </h1>
                        <p className='text-white my-8'>
                            Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                        </p>
                        <div className="my-4">
                            <a href="" className="btn btn-primary py-3 px-8  inline-block">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="sm:max-w-[95%]">
                        <Image src={image} alt='Slider Item' className='w-full'/>
                    </div>
                </div>
            </div>
       
    );
};

export default Slide;