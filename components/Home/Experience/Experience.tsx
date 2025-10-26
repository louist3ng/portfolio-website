import React from 'react'
import { FaCodepen } from 'react-icons/fa'
import ExperienceCard from './ExperienceCard'
import { IoMdSchool } from 'react-icons/io'

const Experience = () => {
    return (
        <div id="experience" className='pt-20 pb-16'>
            <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
                {/*workpart*/}
                <div>
                    <h1 data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="200"
                        className='text-3xl sm:text-4xl font-bold text-white'>
                        My Work <span className='text-cyan-200'> Experience </span>
                    </h1>
                    <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className='mt-10'>
                        <ExperienceCard Icon={FaCodepen} role="Finding an Internship ;)" />
                        {/* <ExperienceCard Icon={FaReact} role="Front-End Developer" />
                        <ExperienceCard Icon={BsDatabase} role="Back-End Developer" /> */}
                    </div>
                    {/*educationpart*/}
                </div>
                <div>
                    <h1 data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="200"
                        className='text-3xl sm:text-4xl font-bold text-white'>
                        My <span className='text-cyan-200'> Education </span>
                    </h1>
                    <div data-aos="zoom-out" data-aos-anchor-placement="top-center"
                        className='mt-10'>
                        <ExperienceCard
                            Icon={IoMdSchool}
                            role="National University of Singapore"
                            date=" Aug 2024 - Present"
                            description={`Bachelor of Computing in Computer Science BComp(CS)\nSecond Major in Quantitative Finance`} />
                        <ExperienceCard
                            Icon={IoMdSchool}
                            role="Raffles Institution"
                            date="Jan 2020 - Dec 2021"
                            description="Singapore-Cambridge GCE 'A' Level" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Experience