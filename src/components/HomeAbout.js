import React from 'react'
import imgAbout from '../store/images/about-img.jpg'
const HomeAbout = () => {
    return (
        <div className="home-about">
            <div className="grid wide">
                <div className="row no-gutters">
                    <div className="home-about-img col l-6 m-6 c-12">
                        <img src={imgAbout} alt="imgAbout" />
                    </div>
                    <div className="home-about-content col l-6 m-6 c-12  ">
                        <h1>Welcome To <span>Yamifood Restaurant</span></h1>
                        <h2>Little Story</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante sodales augue, eget lacinia lectus erat et sem.</p>
                        <p>Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem, a pellentesque tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar.</p>
                        <button className="btn home-about-content-btn">Reservation</button>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default HomeAbout
