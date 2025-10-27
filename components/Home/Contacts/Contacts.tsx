"use client";
import React, { useState } from 'react'
import { BiEnvelope, BiLogoLinkedin, BiPhone } from 'react-icons/bi';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    <div className='flex items-center mt-8 space-x-3'>
                        <Link href="https://www.instagram.com/tengx4/" target="_blank" rel="noopener noreferrer"
                            className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-grab
                            flex-col hover:bg-blue-800 transition-all duration-500">
                            <FaInstagram className='text-white w-6 h-6' />
                        </Link>
                    </div>
                </div>
                <form onSubmit={handleSubmit} data-aos="zoom-in"
                    data-aos-anchor-placement="top-center"
                    className='md:p-10 p-5 bg-[#131332] rounded-lg'>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Name'
                        required
                        className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none
                    rounded-md w-full placeholder:text-gray-400' />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email'
                        required
                        className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none
                    rounded-md w-full placeholder:text-gray-400' />
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder='Mobile Number'
                        required
                        className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none
                    rounded-md w-full placeholder:text-gray-400' />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder='Message'
                        required
                        className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full
                    placeholder:text-gray-400 h-[10rem]' />
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className='mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all
                    duration-300 cursor-pointer text-white rounded-full disabled:opacity-50'>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                    {submitStatus === 'success' && (
                        <p className='mt-4 text-green-400'>Message sent successfully!</p>
                    )}
                    {submitStatus === 'error' && (
                        <p className='mt-4 text-red-400'>Failed to send message. Please try again.</p>
                    )}
                </form>

            </div>
        </div >
    );
}

export default Contacts