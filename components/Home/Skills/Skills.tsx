"use client";
import React from 'react'
import { FaJava } from 'react-icons/fa'
import {
    SiJavascript,
    SiReact,
    SiTypescript,
    SiPython,
} from 'react-icons/si'
import Tilt from 'react-parallax-tilt'

const skills = [
    {
        name: 'JavaScript',
        icon: <SiJavascript />,
    },
    {
        name: 'React',
        icon: <SiReact />,
    },
    {
        name: 'TypeScript',
        icon: <SiTypescript />,
    },
    {
        name: 'Java',
        icon: <FaJava />,
    },
    {
        name: 'Python',
        icon: <SiPython />,
    },
]

const Skills = () => {
    return (
        <div id="skills" className='text-white pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
                My <span className='text-cyan-200'>Languages</span>
            </h1>
            <div className='flex flex-wrap justify-center gap-6 mt-16'>
                {skills.map((skill) => (
                    <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
                        <div className='bg-[#14134145] text-center w-40 h-48 rounded-3xl
                                    flex flex-col items-center justify-center shadow-lg transition hover:scale-105'>
                            <div className='text-5xl mb-4 text-gray-300'>
                                {skill.icon}
                            </div>
                            <p className="text-white-300 mt-1">
                                {skill.name}
                            </p>
                        </div>
                    </Tilt>
                ))}
            </div>
        </div >
    )
}

export default Skills