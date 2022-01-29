import React from 'react'
import Header from '../components/Header'
import HomeGallery from '../components/HomeGallery'
import HomeReviews from '../components/HomeReviews'
import HomeContact from '../components/HomeContact'
import HomeFooter from '../components/HomeFooter'
import Navbar from '../components/Navbar'

function Gallery() {
    const heading = "Gallery"
    return (
        <>
            <Navbar />
            <Header heading={heading} />
            <HomeGallery />
            <HomeReviews />
            <HomeContact />
            <HomeFooter />
        </>
    )
}

export default Gallery
