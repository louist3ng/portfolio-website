import React from 'react'
import { BiEnvelope, BiLogoLinkedin, BiPhone } from 'react-icons/bi';
import Link from 'next/link';

const Contacts = () => {
    return (
        <div id="contact" className="pt-16 pb-16">
            <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 
            items-center'>
                <div>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200 '>
                        Reach out to me if you have any questions or want to work together!
                    </h1>
                    <p className='text-gray-600 mt-6 text-base sm:text-lg'>
                        I am also contactable via email or through my social media platforms.
                    </p>
                    {/* /*info icon*/}
                    <div className='mt-7'>
                        <div className='flex items-center space-x-3 mb-4'>
                            <BiPhone className='w-9 h-9 text-cyan-200 ' />
                            <p className='text-xl font-bold text-gray-400'>+6588667282</p>
                        </div>
                        <div className='flex items-center space-x-3 mb-4'>
                            <BiEnvelope className='w-9 h-9 text-cyan-200' />
                            <p className='text-xl font-bold text-gray-400'>tenglouistjj@gmail.com</p>
                        </div>
                        <Link href="https://www.linkedin.com/in/louis-teng-b36bb8300/" target="_blank" rel="noopener noreferrer"
                            className='flex items-center space-x-3 mb-4 group'>
                            <BiLogoLinkedin className='w-9 h-9 text-cyan-200 group-hover:text-blue-500 transition-colors duration-300' />
                            <p className='text-xl font-bold text-gray-400 group-hover:text-cyan-300 transition-colors duration-300'>Louis Teng</p>
                        </Link>
                    </div>
                    {/* Social icons */}
                    {/* <div className='flex items-center mt-8 space-x-3'>
                        <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-grab
                        flex-col hover:bg-blue-800 transition-all duration-500">
                            <FaInstagram className='text-white w-6 h-6' />
                        </div>
                        <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-grab
                        flex-col hover:bg-blue-800 transition-all duration-500">
                            <FaInstagram className='text-white w-6 h-6' />
                        </div>
                    </div> */}
                </div>
                <div data-aos="zoom-in"
                    data-aos-anchor-placement="top-center"
                    className='md:p-10 p-5 bg-[#131332] rounded-lg'>
                    <input
                        type="text"
                        name="name"
                        placeholder='Name'
                        className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none
                    rounded-md w-full placeholder:text-gray-400' />
                    <input
                        type="email"
                        name="email"
                        placeholder='Email'
                        className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none
                    rounded-md w-full placeholder:text-gray-400' />
                    <input
                        type="text"
                        name="message"
                        placeholder='Mobile Number'
                        className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none
                    rounded-md w-full placeholder:text-gray-400' />
                    <textarea placeholder='Message' className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full
                    placeholder:text-gray-400 h-[10rem]' />
                    <button className='mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all
                    duration-300 cursor-pointer text-white rounded-full'>
                        Send Message
                    </button>
                </div>

            </div>
        </div >
    );
}

export default Contacts