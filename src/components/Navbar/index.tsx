"use client"
import React, { useState } from 'react';
import logo from '@/images/logo/finexo-logo.png'
import Image from 'next/image';
import { FaBars, FaCross, FaSearch, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';

const Navbar: React.FC = () => {
    const [openInput, setOpenInput] = useState<boolean>(false)
    const handleOpenInput=()=>{
        setOpenInput(!openInput)
    }

    handleOpenInput;
    return (
        <header className='py-4 px-0 w-full'>
            <nav className='w-full'>
                <div className="min-h-20 flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src={logo} alt='LOGO' className='h-10 w-10' />
                        <span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>Finexo</span>
                    </a>
                    <button type="button" className="inline-flex items-center p-2 w-100 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus-ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <FaBars className='text-4xl text-white hover:text-blue-950' />
                    </button>

                    <div className="hidden w-full md:block md:w-auto " id="navbar-default">
                        <div className="flex">
                            <ul className="font-medium flex flex-col p-4 md:p-2 mt-4 border  rounded-lg bg-transparent md:flex-row md:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
                                <li>
                                    <Link href="/" className="block md:p-2 lg:p-3 uppercase text-white hover:text-sky-500 focus:text-sky-400 rounded md:bg-transparent md:text-white active:text-sky-500  dark:text-white md:dark:text-blue-500">Home</Link>
                                </li>
                                <li>
                                    <Link href="/about" className="block  lg:p-3 uppercase text-white  rounded md:bg-transparent md:text-white active:text-sky-500 md:p-2 dark:text-white md:dark:text-blue-500 hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:bg-transparent">About</Link>
                                </li>
                                <li>
                                    <Link href="/service" className="block  lg:p-3 uppercase text-white  rounded md:bg-transparent md:text-white active:text-sky-500 md:p-2 dark:text-white md:dark:text-blue-500 hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:bg-transparent">Service</Link>
                                </li>
                                <li>
                                    <Link href="/why-us" className="block  lg:p-3 uppercase text-white  rounded md:bg-transparent md:text-white active:text-sky-500 md:p-2 dark:text-white md:dark:text-blue-500 hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:bg-transparent">Why us</Link>
                                </li>
                            </ul>
                            <Link href='/login' className=' px-3 py-2 text-white flex items-center uppercase font-medium '><FaUser className='mr-2' /> <span>Login</span></Link>
                            <form className="flex items-center justify-center px-4">
                                <div className='flex items-center gap-2'>
                                    <input type="text" className={`${!openInput ? 'hidden' : ''} bg-sky-300 border-sky-500 border-2 duration-500 focus:outline-none py-2 rounded-md px-3`} />
                                   {
                                    !openInput ?  <FaSearch className={`w-6 h-6 text-white `} onClick={handleOpenInput} />
                                                : <IoMdClose  className={`w-6 h-6 text-white `} onClick={handleOpenInput}/>
                                   }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;