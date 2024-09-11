import React from 'react';
import FooterHeading from './FooterHeading';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarked, FaMapMarker, FaPhone, FaTwitter, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            {/* Footer Info  */}
            <section className="bg-[#012d69] py-20">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-4 text-white">
                        <div className="">
                            <div className="info_contact">
                                <FooterHeading>
                                    Address
                                </FooterHeading>
                                <div className="flex flex-col gap-2">
                                    <a href="#" className='flex items-center gap-2'>
                                        <FaMapMarker/>
                                        <span>
                                            Location
                                        </span>
                                    </a>
                                    <a href="#" className='flex items-center gap-2'>
                                       <FaPhone/>
                                        <span>
                                            Call +01 1234567890
                                        </span>
                                    </a>
                                    <a href="#" className='flex items-center gap-2'>
                                        <FaEnvelope/>
                                        <span>
                                            demo@gmail.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="flex gap-4 py-5">
                                <a href="#">
                                    <FaFacebookF/>
                                </a>
                                <a href="#">
                                   <FaTwitter/>
                                </a>
                                <a href="#">
                                    <FaLinkedinIn/>
                                </a>
                                <a href="#">
                                    <FaInstagram/>
                                </a>
                            </div>
                        </div>
                        <div className="info_col">
                            <div className="info_detail">
                                <FooterHeading>
                                    Info
                                </FooterHeading>
                                <p>
                                    necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                                </p>
                            </div>
                        </div>
                        <div className="lg:mx-auto md:px-5 ">
                            <div className="info_link_box">
                                <FooterHeading>
                                    Links
                                </FooterHeading>
                                <div className="flex flex-col gap-4">
                                    <a className="active" href="#">
                                        Home
                                    </a>
                                    <a className="" href="#">
                                        About
                                    </a>
                                    <a className="" href="#">
                                        Services
                                    </a>
                                    <a className="" href="#">
                                        Why Us
                                    </a>
                                    <a className="" href="#">
                                        Team
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 info_col ">
                            <FooterHeading>
                                Subscribe
                            </FooterHeading>
                            <form action="#">
                                <input type="text" className='block my-5 w-full border-[1px] rounded-md p-2 border-blue-100 bg-transparent  text-white mr-3  leading-tight focus:outline-none' placeholder="Enter email" />
                                <button className='btn btn-primary w-full' type="submit">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* Copy Right  */}
            <section className="py-5 text-center">
                <div className="container mx-auto">
                    <p>
                        &copy; <span></span> All Rights Reserved By
                        || Md. Ariful Islam
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Footer;