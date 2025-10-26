"use client";
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Services from './services/Services'
import Experience from './Experience/Experience'
import Project from './Project/Project'
import Languages from './Languages/Languages'
import Contacts from './Contacts/Contacts'
import Frameworks from './Frameworks/Frameworks'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {

    useEffect(() => {
        const initAOS = async () => {
            await import('aos');
            AOS.init({
                duration: 1000,
                easing: 'ease',
                once: true,
                anchorPlacement: 'top-bottom'
            });
        };
        initAOS();
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