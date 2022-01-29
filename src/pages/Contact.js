import React from 'react'
import Header from '../components/Header'
import Map from '../components/Map'
import Form from '../components/Form'
import HomeContact from '../components/HomeContact'
import HomeFooter from '../components/HomeFooter'
import Navbar from '../components/Navbar'

function Contact() {
    const heading = "Contact"
    return (
        <>
            <Navbar />
            <Header heading={heading} />
            {/* <div className="contact-map">
                <Map />
            </div> */}
            <Form />
            <HomeContact />
            <HomeFooter />
        </>
    )
}

export default Contact
