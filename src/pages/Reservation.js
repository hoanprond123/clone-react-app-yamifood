import React from 'react'
import Header from '../components/Header'
import ReservationPages from '../components/ReservationPages'
import HomeReviews from '../components/HomeReviews'
import HomeContact from '../components/HomeContact'
import HomeFooter from '../components/HomeFooter'
function Reservation() {
    const heading = "Reservation"
    return (
        <>
            <Header heading={heading} />
            <ReservationPages />
            <HomeReviews />
            <HomeContact />
            <HomeFooter />
        </>
    )
}

export default Reservation
