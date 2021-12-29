import React, { useState, useEffect } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import data from './dataReviews'
const HomeReviews = () => {
    const [people, setPeople] = useState(data)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const lastIndex = people.length - 1
        if(index < 0){
          setIndex(lastIndex)
        }
        if(index > lastIndex){
          setIndex(0)
        }
    },[index, people])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
          }, 5000)
          return () => clearInterval(slider)
        }, [index])

    return (
        <div className="home-review">
            <div className="home-review-heading grid wide">
                <h1>Customer Reviews</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className="grid wide home-reviews-container">
                <div className="home-reviews-slider">
                    {people.map((person, personIndex) => {
                        const { name, job, quote, image } = person
                        let position = 'home-reviews-slider-item-next'
                        if(personIndex === index ){
                            position = 'home-reviews-slider-item-active'
                        }
                        if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)){
                            position = 'home-reviews-slider-item-last'
                        }
                        return (
                            <div key={personIndex} className={`home-reviews-slider-item ${position}`}>
                                <img src={image} />
                                <h2>{name}</h2>
                                <span>{job}</span>
                                <p>{quote}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="home-reviews-btn">
                    <button className="home-reviews-slider-btn home-reviews-slider-btn-left" onClick={() => setIndex(index - 1)}>
                        <FaAngleLeft className="home-reviews-slider-icon" />
                    </button>
                    <button className="home-reviews-slider-btn home-reviews-slider-btn-right" onClick={() => setIndex(index + 1)}>
                        <FaAngleRight className="home-reviews-slider-icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomeReviews
