import Nav from './Nav'
import MobileNav from './MobileNav'
import React from 'react'

const ResponsiveNav = () => {
    return (
        <div className="text-white">
            <Nav />
            <MobileNav />
        </div>
    )
}

export default ResponsiveNav