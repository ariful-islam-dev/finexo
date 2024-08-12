import React from 'react';
import SectionHeading from '../SectionHeading';
import chooseImg1 from '@/images/w1.png'
import chooseImg2 from '@/images/w2.png'
import chooseImg3 from '@/images/w3.png'
import chooseImg4 from '@/images/w4.png'
import ChooseItem from './ChooseItem';
import Link from 'next/link';

interface CHOOSE {
    title: string,
    description: string,
    img: any
}

const chooses:CHOOSE[] = [
    {
        title: 'Expert Management',
        description: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus',
        img: chooseImg1
    },
    {
        title: 'Secure Investment',
        description: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus',
        img: chooseImg2
    },
    {
        title: 'Instant Trading',
        description: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus',
        img: chooseImg3
    },
    {
        title: 'Happy Customers',
        description: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus',
        img: chooseImg4
    }
]


const Choose:React.FC = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto">
                <SectionHeading title='Why Choose Us'/>
                <div className="grid grid-cols-2 gap-6 lg:gap-10">
                  {
                    chooses.map((choose, key)=>(
                        <ChooseItem title={choose.title} description={choose.description} img={choose.img} key={key}/>
                    ))
                  }
                </div>
                <div className="flex justify-center py-10">
                    <Link href="#" className='btn btn-primary'>
                        Read More
                    </Link>
                </div>
            </div>
        </section>

    );
};

export default Choose;