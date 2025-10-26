import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Project = () => {
    return (
        <div id="projects" className='pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
                Recent <span className='text-cyan-200'>Projects</span>
            </h1>
            <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
                <div>
                    <Image src="/images/p1.jpg" alt="Project 1" width={800} height={650} className='rounded-lg w-full h-auto' />
                    <Link href="https://google.com" target="_blank" rel="noopener noreferrer">
                        <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white hover:text-cyan-300 cursor-grab transition-all duration-300'>
                            Modern Finance DashBoard
                        </h1>
                    </Link>
                    <h1 className='pt-2 font-medium text-white/80 '>Apps, UI/UX</h1> </div>
                <div>
                    <Image src="/images/p2.jpg" alt="Project 2" width={800} height={650} className='rounded-lg w-full h-auto' />
                    <Link href="https://google.com" target="_blank" rel="noopener noreferrer">
                        <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white hover:text-cyan-300 cursor-grab transition-all duration-300'>
                            Modern Finance DashBoard
                        </h1>
                    </Link>
                    <h1 className='pt-2 font-medium text-white/80 '>Apps, UI/UX</h1> </div>
                <div>
                    <Image src="/images/p3.jpg" alt="Project 3" width={800} height={650} className='rounded-lg w-full h-auto' />
                    <Link href="https://google.com" target="_blank" rel="noopener noreferrer">
                        <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white hover:text-cyan-300 cursor-grab transition-all duration-300'>
                            Modern Finance DashBoard
                        </h1>
                    </Link>
                    <h1 className='pt-2 font-medium text-white/80 '>Apps, UI/UX</h1>
                </div>
                <div>
                    <Image src="/images/p4.jpg" alt="Project 4" width={800} height={650} className='rounded-lg w-full h-auto' />
                    <Link href="https://google.com" target="_blank" rel="noopener noreferrer">
                        <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white hover:text-cyan-300 cursor-grab transition-all duration-300'>
                            Modern Finance DashBoard
                        </h1>
                    </Link>
                    <h1 className='pt-2 font-medium text-white/80 '>Apps, UI/UX</h1>
                </div>
            </div>
        </div>
    )
}

export default Project