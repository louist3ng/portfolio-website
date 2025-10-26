import React from 'react'
import Hero from './Hero/Hero'
import Services from '../services/Services'


const Home = () => {
    return (
        <div className="overflow-hidden text-white">
            <Hero />
            <Services />
        </div>
    )
}

export default Home