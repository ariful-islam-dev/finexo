import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
type TeamProps ={
    name: string,
    designation: string,
    photo: any
}

const TeamPerson:React.FC<TeamProps> = (props: TeamProps) => {
    return (
        <div className="bg-blue-800 dark:bg-blue-700 p-10 shadow-md rounded-md">
                <div className=" flex flex-col justify-center items-center ">
                  <div className="rounded-full  border-blue-300 border-8 ">
                    <Image src={props.photo} className="inline rounded-full" alt="Team Head"/>
                  </div>
                  <div className="py-5 text-center">
                    <h5 className='text-2xl font-semibold'>
                      {props.name}
                    </h5>
                    <p className='text-blue-100 py-3'>
                      {props.designation}
                    </p>
                  </div>
                  <div className="flex justify-around gap-10">
                    <Link href="#" className="text-white hover:text-blue-400 text-2xl">
                      <FaFacebook/>
                    </Link>
                    <Link href="#" className="text-white hover:text-blue-400 text-2xl">
                      <FaTwitter/>
                    </Link>
                    <Link href="#" className="text-white hover:text-blue-400 text-2xl">
                      <FaLinkedin/>
                    </Link>
                    <Link href="#" className="text-white hover:text-blue-400 text-2xl">
                     <FaInstagram/>
                    </Link>
                    <Link href="#" className="text-white hover:text-blue-400 text-2xl">
                      <FaYoutube/>
                    </Link>
                  </div>
                </div>
              </div>
    );
};

export default TeamPerson;