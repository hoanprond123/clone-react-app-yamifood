import React from 'react'
import Header from '../components/Header'
import HomeMenu from '../components/HomeMenu'
import HomeGallery from '../components/HomeGallery'
import HomeReviews from '../components/HomeReviews'
import HomeContact from '../components/HomeContact'
import HomeFooter from '../components/HomeFooter'
import Navbar from '../components/Navbar'
function Menu() {
    const heading = 'Menu'
    return (
        <>
            <Navbar />
            <Header heading={heading} />
            <HomeMenu />
            <HomeGallery />
            <HomeReviews />
            <HomeContact />
            <HomeFooter />
        </>
    )
}

export default Menu
