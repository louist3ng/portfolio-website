"use client";
import React from 'react'
import { FaJava } from 'react-icons/fa'
import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiExpress,
    SiStreamlit,
} from 'react-icons/si'
import Tilt from 'react-parallax-tilt'

const frameworks = [
    {
        name: 'React',
        icon: <SiReact />,
    },
    {
        name: 'Next.js',
        icon: <SiNextdotjs />,
    },
    {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss />,
    },
    {
        name: 'Express.js',
        icon: <SiExpress />,
    },
    {
        name: 'JavaFX',
        icon: <FaJava />,
    },
    {
        name: 'Streamlit',
        icon: <SiStreamlit />,
    },
]

const Frameworks = () => {
    return (
        <div id="frameworks" data-aos="fade-bottom" data-aos-anchor-placement="top-center" className='text-white pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
                My <span className='text-cyan-200'>Frameworks</span>
            </h1>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" className='flex flex-wrap justify-center gap-6 mt-16'>
                {frameworks.map((framework, i) => (
                    <Tilt key={framework.name} scale={1.5} transitionSpeed={400}>
                        <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-delay={i * 100}
                            className='bg-[#14134145] text-center w-40 h-48 rounded-3xl
                                    flex flex-col items-center justify-center shadow-lg transition hover:scale-105'>
                            <div className='text-5xl mb-4 text-gray-300'>
                                {framework.icon}
                            </div>
                            <p className="text-white-300 mt-1">
                                {framework.name}
                            </p>
                        </div>
                    </Tilt>
                ))}
            </div>
        </div >
    )
}

export default Frameworks