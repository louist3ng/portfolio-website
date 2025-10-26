import React from 'react'
import Hero from './Hero/Hero'
import Services from './services/Services'
import Resume from './Resume/Resume'
import Project from './Project/Project'
import Skills from './Skills/Skills'
import Contacts from './Contacts/Contacts'

const Home = () => {
    return (
        <div className="overflow-hidden text-white">
            <Hero />
            <Services />
            <Resume />
            <Project />
            <Skills />
            <Contacts />
        </div>
    )
}

export default Home