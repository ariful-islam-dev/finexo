import React from 'react';
import logo from '@/images/logo/finexo-logo.png'
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';

const Navbar: React.FC = () => {
    return (
        <nav className='bg-white border-gray-200 dark:bg-gray-900'>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={logo} alt='LOGO' className='h-10 w-10'/>
                    <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Finexo</span>
                </a>
                <button type="button" className="inline-flex items-center p-2 w-100 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus-ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <FaBars />
                </button>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-reverse md:mt-0 md:border-0 md:bg-white dar:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">About</a>
                        </li>
                        <li>
                            <a href="/service" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Service</a>
                        </li>
                        <li>
                            <a href="/why-us" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Why us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;