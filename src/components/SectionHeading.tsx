import React, { ReactNode } from 'react';

type SectionProps ={
    title: string,
    paragraph?:string
}

const SectionHeading:React.FC<SectionProps> = ({title, paragraph}:SectionProps) => {
    const titleFistPart = title.split(" ").slice(0, title.split(" ").length-1).join(" ");
    const titleLastPart = title.split(" ").slice(title.split(" ").length-1, title.split(" ").length).join();
    console.log(titleFistPart)
    return (
        <div className='flex flex-col items-center mb-10 '>
            <h2 className='relative font-bold text-4xl text-center py-3 m-0'>
                {
                    titleFistPart
                }{" "}{
                    <span className='text-[#00bbf0]'>{titleLastPart}</span>
                }
            </h2>
            {
             paragraph? <p>{paragraph}</p>: ""
            }
        </div>
    );
};

export default SectionHeading;