import React from 'react'
import Slider from '../components/Slider'
import HomeAbout from '../components/HomeAbout'
import HomeSlogan from '../components/HomeSlogan'
import HomeMenu from '../components/HomeMenu'
import HomeGallery from '../components/HomeGallery'
import HomeReviews from '../components/HomeReviews'
import HomeContact from '../components/HomeContact'
import HomeFooter from '../components/HomeFooter'
import Navbar from '../components/Navbar'
const Home = () => {
    return (
        <>
            <Navbar />
            <Slider />
            <HomeAbout />
            <HomeSlogan />
            <HomeMenu />
            <HomeGallery />
            <HomeReviews />
            <HomeContact />
            <HomeFooter />
        </>
    )
}

export default Home
