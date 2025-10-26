"use client";
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Services from './services/Services'
import Experience from './Experience/Experience'
import Project from './Project/Project'
import Languages from './Languages/Languages'
import Contacts from './Contacts/Contacts'
import Frameworks from './Frameworks/Frameworks'
import AOS from 'aos'

const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease',
            once: true,
            anchorPlacement: 'top-bottom'
        });
    }, []);

    return (
        <div className="overflow-hidden text-white">
            <Hero />
            <Services />
            <Experience />
            <Project />
            <Languages />
            <Frameworks />
            <Contacts />
        </div>
    )
}

export default Home