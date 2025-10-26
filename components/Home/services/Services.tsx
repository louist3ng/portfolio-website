import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    return (
        <div id="services" className="pt-16 pb-16">
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-center" className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
                Building products that are <br /> <span className='text-cyan-200'>user-friendly and efficient</span>
            </h1>
            <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 
            xl:grid-cols-4 mt-20 gap-10 items-center">
                <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                    <ServiceCard
                        icon="/images/s1.png"
                        name="UI and UX"
                        description="Creating clean and accessible interfaces using Tailwind CSS."
                    />
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
                    <ServiceCard
                        icon="/images/s2.png"
                        name="Full-Stack Development"
                        description="Developing full-stack web applications using modern frameworks and technologies."
                    />
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
                    <ServiceCard
                        icon="/images/analytics.png"
                        name="Data Analytics"
                        description="Turning data into insights through Python, Power BI, and Streamlit dashboards."
                    />
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
                    <ServiceCard
                        icon="/images/s4.png"
                        name="Software Testing & Quality"
                        description="Writing maintainable, well-tested code with JUnit, CI/CD pipelines, and version control on GitHub."
                    />
                </div>

            </div>

        </div>

    )
}

export default Services;