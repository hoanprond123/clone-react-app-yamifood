import React, { useState, useRef, useEffect } from 'react'
import { AiFillCaretDown, AiFillCaretUp, FaBars } from 'react-icons/fa'

import { Link, NavLink } from 'react-router-dom'
import img1 from '../store/images/logo.png'
const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false)
    const linksRef = useRef(null)
    const linkContainer = useRef(null)
    
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height
        if (showLinks) {
            linkContainer.current.style.height = `${linksHeight}px`
        } else {
            linkContainer.current.style.height = '0px'
        }
    }, [showLinks])

    const handleLinks = () => {
        setShowLinks(false)

    }
 

    let activeStyle = {
        backgroundColor: "#d0a772",
        color: "#fff",
    }
    return (
        <nav className="navbar">
            <div className="grid wide">
                <div className="container">
                    <NavLink to="/" className="navbar-img">
                        <img src={img1} />
                    </NavLink>
                    <button className="navbar-btn" onClick={() => setShowLinks(!showLinks)}>
                        <FaBars className="navbar-btn-icon" />
                    </button>
                    <div className="navbar-link" ref={linkContainer}>
                        <ul ref={linksRef}>
                            <li>
                                <NavLink to="/" onClick={() =>  handleLinks()} style={({ isActive }) => isActive ? activeStyle : undefined}
                                >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/menu" onClick={() =>  handleLinks()} style={({ isActive }) => isActive ? activeStyle : undefined}>Menu</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" onClick={() =>  handleLinks()} style={({ isActive }) => isActive ? activeStyle : undefined}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" onClick={() =>  handleLinks()} style={({ isActive }) => isActive ? activeStyle : undefined}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
