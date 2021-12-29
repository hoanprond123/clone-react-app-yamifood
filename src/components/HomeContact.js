import React from 'react'
import { CgPhone } from 'react-icons/cg'
import { MdEmail } from 'react-icons/md'
import { HiLocationMarker } from 'react-icons/hi'
const HomeContact = () => {
    return (
        <div className="home-contact">
            <div className="grid wide">
                <div className="row no-gutters">
                    <div className="col l-4 m-4 c-12">
                        <div className="home-contact-item">
                            <CgPhone className="home-contact-item-icon" />
                            <div className="home-contact-item-info">
                                <p>Phone</p>
                                <span>+01 123-456-4590</span>
                            </div>
                        </div>
                    </div>
                    <div className="col l-4 m-4 c-12">
                        <div className="home-contact-item">
                            <MdEmail className="home-contact-item-icon" />
                            <div className="home-contact-item-info">
                                <p>Email</p>
                                <span>hoanprond121999@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="col l-4 m-4 c-12">
                        <div className="home-contact-item">
                            <HiLocationMarker className="home-contact-item-icon" />
                            <div className="home-contact-item-info">
                                <p>Location</p>
                                <span>34 trùm phố vải Vân Giang</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContact
