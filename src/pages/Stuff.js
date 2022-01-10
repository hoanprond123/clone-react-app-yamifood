import React from 'react'
import Header from '../components/Header'
import HomeReviews from '../components/HomeReviews'
import HomeContact from '../components/HomeContact'
import HomeFooter from '../components/HomeFooter'
import StuffPages from '../components/StuffPages'
function Stuff() {
    const heading = "Stuff"
    return (
        <>
            <Header heading={heading} />
            <StuffPages />
            <HomeReviews />
            <HomeContact />
            <HomeFooter />
        </>
    )
}

export default Stuff
