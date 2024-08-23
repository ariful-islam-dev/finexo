import React, { ReactNode } from 'react';
type FHProps ={
    children: ReactNode
}

const FooterHeading:React.FC<FHProps> = ({children}:FHProps) => {
    return (
        <h4 className='text-2xl font-medium my-5 border-b-2 border-solid border-blue-300'>
            {children}
        </h4>
    );
};

export default FooterHeading;