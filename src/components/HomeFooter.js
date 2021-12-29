import React, {useState, useEffect} from 'react'
import { ImFacebook, ImTwitter, ImLinkedin2, ImGooglePlus } from 'react-icons/im'
import { FaInstagram } from 'react-icons/fa'
import {AiOutlineArrowUp} from 'react-icons/ai'
const HomeFooter = () => {
    const [btn, showBtn] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 200){
                showBtn(true)
            }else{
                showBtn(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        // clean up
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    const goToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    

    return (
        <div className="home-footer">
            <div className="home-footer-container">
                <div className="grid wide home-footer-container-beside">
                    <div className="row no-gutters">
                        <div className="col l-3 m-6 c-12">
                            <div className="home-footer-item">
                                <h1>ABOUT US</h1>
                                <p>Integer cursus scelerisque ipsum id efficitur. Donec a dui fringilla, gravida lorem ac, semper magna. Aenean rhoncus ac lectus a interdum. Vivamus semper posuere dui, at ornare turpis ultrices sit amet. Nulla cursus lorem ut nisi porta, ac eleifend arcu ultrices.</p>
                            </div>
                        </div>
                        <div className="col l-3 m-6 c-12">
                            <div className="home-footer-item">
                                <h1>OPENING HOURS</h1>
                                <p>Monday: Closed</p>
                                <p>Tue-Wed : 9:Am - 10PM</p>
                                <p>Thu-Fri : 9:Am - 10PM</p>
                                <p>Sat-Sun : 5:PM - 10PM</p>
                            </div>
                        </div>
                        <div className="col l-3 m-6 c-12">
                            <div className="home-footer-item">
                                <h1>CONTACT INFORMATION</h1>
                                <span>Ipsum Street, Lorem Tower, MO, Columbia, 508000</span>
                                <a href="https://www.facebook.com/hoanprond123/">0915056966</a>
                                <a href="https://mail.google.com/mail/u/0/#inbox">hoanprond121999@gmail.com</a>
                            </div>
                        </div>
                        <div className="col l-3 m-6 c-12">
                            <div className="home-footer-item">
                                <h1>SUBSCRIBE</h1>
                                <input type="text" placeholder="Email Address" />
                                <button>SUBSCRIBE</button>
                                <ul className="home-footer-item-icon">
                                    <li>
                                        <ImFacebook />
                                    </li>
                                    <li>
                                        <ImTwitter />
                                    </li>
                                    <li>
                                        <ImLinkedin2 />
                                    </li>
                                    <li>
                                        <ImGooglePlus />
                                    </li>
                                    <li>
                                        <FaInstagram />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-footer-container-overlay"></div> 
            </div>

            <div className="home-footer-copyright">
                <p>All Rights Reserved. © 2018 Yamifood Restaurant Design By : <a href="https://www.facebook.com/hoanprond123/">Hoan To Nhe</a></p>
            </div>
            <div className={btn ? 'home-footer-to-top home-footer-to-top-active' : 'home-footer-to-top'} onClick={() => goToTop()}>
                <AiOutlineArrowUp />
            </div>
        </div>

    )
}

export default HomeFooter
