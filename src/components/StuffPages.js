import React from 'react'
import { ImFacebook, ImTwitter, ImGooglePlus } from 'react-icons/im'

import data from './dataStuff'
function StuffPages() {
    return (
        <div className="stuff-pages">
            <div className="grid wide stuff-pages-header">
                <h1>Reservation</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className="grid wide">
                <div className="row no-gutters">
                    {data.map(item => {
                        const { id, name, job, image } = item
                        return (
                            <div className="col l-4 m-4 c-12">
                                <div className="stuff-pages-container">
                                    <div className="stuff-pages-item">
                                        <img src={image} />
                                        <div className="stuff-pages-item-information">
                                            <h1>{name}</h1>
                                            <p>{job}</p>
                                            <ul>
                                                <li>
                                                    <a href="https://www.facebook.com/hoanprond123/">
                                                        <ImFacebook className="stuff-pages-item-information-icon" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/hoanprond123/">
                                                        <ImTwitter className="stuff-pages-item-information-icon" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/hoanprond123/">
                                                        <ImGooglePlus className="stuff-pages-item-information-icon" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default StuffPages
