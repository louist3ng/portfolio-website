import React from 'react'
import Hero from './Hero/Hero'
import Services from './services/Services'
import Resume from './Resume/Resume'
import Project from './Project/Project'

const Home = () => {
    return (
        <div className="overflow-hidden text-white">
            <Hero />
            <Services />
            <Resume />
            <Project />
        </div>
    )
}

export default Home