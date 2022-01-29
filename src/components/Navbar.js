import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { AiFillCaretDown } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import img1 from '../store/images/logo.png'
const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false)
    const linksRef = useRef(null)
    const navRef = useRef(null)
    const nav2Ref = useRef(null)
    const linkContainer = useRef(null)
    const [showDropDown, setShowDropDown] = useState(false)
    const [showDropDownRight, setShowDropDownRight] = useState(false)
    const [activeDrop, setActiveDrop] = useState(false)
    const [activeDropRight, setActiveDropRight] = useState(false)


    
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height
        if (showLinks) {
            linkContainer.current.style.height = `${linksHeight}px`
        } else {
            linkContainer.current.style.height = '0px'
        }
    }, [showLinks, showDropDown, showDropDownRight])

    const handleLinks = () => {
        setShowLinks(false)
        setActiveDrop(false)
        setShowDropDownRight(false)
        setShowDropDown(false)
        setActiveDropRight(false)
    }

    const handleShowDropdown = () => {
        setShowDropDown(!showDropDown)
        setShowDropDownRight(false)
    }

    const handleShowDropdownRights = () => {
        setShowDropDownRight(!showDropDownRight)
        setShowDropDown(false)
    }

    const handleNavbar = () => {
        setActiveDrop(true)
        setShowLinks(false)
        setActiveDropRight(false)
    }

    const handleNavbarRight = () => {
        setActiveDropRight(true)
        setShowLinks(false)
        setActiveDrop(false)
    }


    let activeStyle = {
        backgroundColor: "#d0a772",
        color: "#fff",
    }

    const handleClick = () => {
        // setShowDropDown(false)
        // setShowDropDownRight(false)
    }

    return (
        <nav className="navbar" onClick={handleClick}>
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
                                <NavLink to="/" onClick={() => handleLinks()} style={({ isActive }) => isActive ? activeStyle : undefined}
                                >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/menu" onClick={() => handleLinks()} style={({ isActive }) => isActive ? activeStyle : undefined}>Menu</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" onClick={() => handleLinks()} style={({ isActive }) => isActive ? activeStyle : undefined}>About</NavLink>
                            </li>
                            <li className="navbar-link-dropdown" onClick={handleShowDropdown}>
                                <div className={activeDrop ? 'navbar-active-dropdown' : undefined}>Page
                                    <AiFillCaretDown className="navbar-link-icon" />
                                </div>
                                <nav ref={navRef} className={showDropDown ? 'navbar-dropdown-menu navbar-dropdown-menu-active' : 'navbar-dropdown-menu'}>
                                    <NavLink to="/reservation" onClick={() => handleNavbar()}>Reservation</NavLink>
                                    <NavLink to="/stuff" onClick={() => handleNavbar()}>Stuff</NavLink>
                                    <NavLink to="/gallery" onClick={() => handleNavbar()}>Gallery</NavLink>
                                </nav>
                            </li>
                            <li className="navbar-link-dropdown" onClick={handleShowDropdownRights}>
                                <div className={activeDropRight ? 'navbar-active-dropdown' : undefined}>Blog
                                    <AiFillCaretDown className="navbar-link-icon" />
                                </div>
                                <nav ref={nav2Ref} className={showDropDownRight ? 'navbar-dropdown-menu navbar-dropdown-menu-active' : 'navbar-dropdown-menu'}>
                                    <NavLink to="/blog" onClick={() => handleNavbarRight()}>blog</NavLink>
                                    <NavLink to="/blog-single" onClick={() => handleNavbarRight()}>blog single</NavLink>
                                </nav>
                            </li>
                            <li>
                                <NavLink to="/contact" onClick={() => handleLinks()} style={({ isActive }) => isActive ? activeStyle : undefined}>Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard" onClick={() => handleLinks()} style={({ isActive }) => isActive ? activeStyle : undefined}>User</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
