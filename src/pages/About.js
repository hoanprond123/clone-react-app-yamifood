import React from 'react'
import Header from '../components/Header'
import HomeAbout from '../components/HomeAbout'
import HomeMenu from '../components/HomeMenu'
import HomeContact from '../components/HomeContact'
import HomeFooter from '../components/HomeFooter'
import Navbar from '../components/Navbar'
function About() {
    const heading = "About"
    return (
        <>
            <Navbar />
            <Header heading={heading} />
            <HomeAbout />
            <HomeMenu />
            <HomeContact />
            <HomeFooter />
        </>
    )
}

export default About
