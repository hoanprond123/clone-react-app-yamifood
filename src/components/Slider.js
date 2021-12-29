import React, { useState, useEffect } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import images from './dataMenuSlider'
import img1 from '../store/images/slider-01.jpg'
const Slider = () => {
    const [index, setIndex] = useState(0)
    const { image, name, id } = images[index]


    const checkIndex = (index) => {
        if(index > images.length - 1){
            return 0
        }
        if(index < 0){
            return images.length - 1 
        }
        return index
    }

    const handleNext = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return checkIndex(newIndex)
        })
    }

    const handlePrev = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkIndex(newIndex)
        })
    }

    const handleChange = (indexImg) => {
        setIndex(indexImg)
    }

    useEffect(() =>{
        const timeSlider = setInterval(() =>{
            setIndex((index)=>{
                let newIndex = index + 1
                return checkIndex(newIndex) 
            })
        }, 3000)

        return () => {
            clearInterval(timeSlider)
        }
    },[index])

    return (
        <div className="home-slider">
            <div className="home-slider-container">
                <img src={image} alt="img-slide" />
            </div>
            <div className="home-slider-icon">
                <button className="home-slider-icon-prev" onClick={handlePrev}>
                    <FaAngleLeft className="home-slider-icon-prev-left" />
                </button>
                <button className="home-slider-icon-next" onClick={handleNext}>
                    <FaAngleRight className="home-slider-icon-prev-right" />
                </button>
            </div>
            <div className="home-slider-pagination">
                {images.map((item, i) => {
                    return(
                        <span className={index === i ? 'pagination-active' : ''} key={i} onClick={() => handleChange(i)}></span>
                    )
                })}
            </div>

            <div className="home-slider-content">

                <h1>Welcome To Yamifood Restaurant</h1>
                <p>See how your users experience your website in realtime or view trends to see any changes in performance over time.</p>
                <button className="home-slider-content-btn btn">
                    Reservation
                </button>
            </div>
            <div className="home-slider-overlay"></div>

        </div>
    )
}

export default Slider
