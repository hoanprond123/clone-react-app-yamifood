import React from 'react'

const Header = ({heading}) => {
    return (
        <div className="header">
            <div className="grid wide">
                <h1>{heading}</h1>
            </div>
        </div>
    )
}

export default Header
