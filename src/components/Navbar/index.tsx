"use client"
import React, { useEffect, useState } from 'react';
import logo from '@/images/logo/finexo-logo.png'
import Image from 'next/image';
import { FaBars, FaSearch, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';

interface PropsType {
    path: string
}

const Navbar: React.FC<PropsType> = ({path}:PropsType) => {
    const [openInput, setOpenInput] = useState<boolean>(false);
    const [menu, setMenu] = useState<boolean>(false)
    const handleOpenInput=()=>{
        setOpenInput(!openInput)
    }

    

    const handleMenu = ()=>{
        setMenu(!menu)
    }

    useEffect(()=>{
        setOpenInput(false)
        setMenu(false)
    },[])

   
    return (
        <header className=' px-0 w-full'>
            <nav className='w-full'>
                <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src={logo} alt='LOGO' className='h-10 w-10' />
                        <span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>Finexo</span>
                    </a>
                    <button onClick={handleMenu} type="button" className="inline-flex items-center p-2 w-100 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus-ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <FaBars className='text-4xl text-white hover:text-blue-950' />
                    </button>

                    <div className={`${menu ? 'block': 'hidden'} w-full md:block md:w-auto `} id="navbar-default">
                        <div className={`flex ${menu ? 'flex-col': ''} md:flex-row`}>
                            <ul className="font-medium flex flex-col p-4 md:p-2 mt-4  rounded-lg bg-transparent md:flex-row md:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
                                <li>
                                    <Link href="/" className={`${path === '/' && 'bg-sky-500'}`+" block py-4 px-3 md:p-2 lg:p-3 uppercase text-white hover:text-sky-500 sm:hover:bg-sky-300 sm:hover:text-sky-950 focus:text-sky-400 rounded  md:text-white active:text-sky-500  dark:text-white md:dark:text-blue-500"}>Home</Link>
                                </li>
                                <li>
                                    <Link href="/about" className={`${path === '/about' && 'bg-sky-500'}`+" block py-4 px-3 sm:hover:bg-sky-300 sm:hover:text-sky-950 lg:p-3 uppercase text-white  rounded  md:text-white active:text-sky-500 md:p-2 dark:text-white md:dark:text-blue-500 hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:bg-transparent"}>About</Link>
                                </li>
                                <li>
                                    <Link href="/service" className={`${path === '/service' && 'bg-sky-500'}`+" block py-4 px-3 sm:hover:bg-sky-300 sm:hover:text-sky-950  lg:p-3 uppercase text-white  rounded  md:text-white active:text-sky-500 md:p-2 dark:text-white md:dark:text-blue-500 hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:bg-transparent"}>Service</Link>
                                </li>
                                <li>
                                    <Link href="/why-us" className={`${path === '/why-us' && 'bg-sky-500'}`+ " block py-4 px-3 sm:hover:bg-sky-300 sm:hover:text-sky-950 lg:p-3 uppercase text-white  rounded  md:text-white active:text-sky-500 md:p-2 dark:text-white md:dark:text-blue-500 hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:bg-transparent"}>Why us</Link>
                                </li>
                                <li>
                                    <Link href="/team" className={`${path === '/team' && 'bg-sky-500'}`+" block py-4 px-3 sm:hover:bg-sky-300 sm:hover:text-sky-950 lg:p-3 uppercase text-white  rounded  md:text-white active:text-sky-500 md:p-2 dark:text-white md:dark:text-blue-500 hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:bg-transparent"}>Team</Link>
                                </li>
                            </ul>
                            <Link href='/login' className=' px-3 py-2 text-white flex items-center uppercase font-medium '><FaUser className='mr-2' /> <span>Login</span></Link>
                            <form className="flex items-center justify-start md:justify-center px-4">
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