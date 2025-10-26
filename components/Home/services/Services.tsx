import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    return (
        <div className="pt-16 pb-16">
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-center" className="text-center text-2xl md:text-4xl xl:text-5xl fond-bold text-white">
                Collaborate with brand <br /> and agencies to create <br /> impactful results
            </h1>
            <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 
            xl:grid-cols-4 mt-20 gap-10 items-center">
                <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                    <ServiceCard
                        icon="/images/s1.png"
                        name="UI and UX"
                        description="Designing interfaces that are intuitive, efficient, and enjoyable to use"
                    />
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
                    <ServiceCard
                        icon="/images/s2.png"
                        name="Web App"
                        description="Designing interfaces that are intuitive, efficient, and enjoyable to use"
                    />
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
                    <ServiceCard
                        icon="/images/s3.png"
                        name="Design & Creativity"
                        description="Designing interfaces that are intuitive, efficient, and enjoyable to use"
                    />
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
                    <ServiceCard
                        icon="/images/s4.png"
                        name="Development"
                        description="Designing interfaces that are intuitive, efficient, and enjoyable to use"
                    />
                </div>

            </div>

        </div>

    )
}

export default Services;