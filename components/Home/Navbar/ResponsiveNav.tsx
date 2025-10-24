"use client";
import Nav from './Nav'
import MobileNav from './MobileNav'
import React, { useState } from 'react'

const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false);

    const openNavHandler = () => {
        console.log("Opening nav");
        setShowNav(true);
    };
    const closeNavHandler = () => {
        console.log("Closing nav");
        setShowNav(false);
    };

    return (
        <div>
            <Nav openNav={openNavHandler} />
            <MobileNav showNav={showNav} closeNav={closeNavHandler} />
        </div>
    )
}

export default ResponsiveNav