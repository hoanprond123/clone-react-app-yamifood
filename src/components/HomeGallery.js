import React, { useState, useRef, useEffect } from 'react'
import data from './dataGallery'
import {CgClose} from 'react-icons/cg'
import {HiOutlineChevronLeft, HiOutlineChevronRight} from 'react-icons/hi'
const HomeGallery = () => {
    const [items, setItems] = useState(data)
    const [modal, setModal] = useState(false)
    const [tempImg, setTempImg] = useState()
    const [index, setIndex] = useState()
    const [btn, setBtn] = useState(false)

    const nextRef = useRef()
    const prevRef = useRef()


    useEffect(() =>{
        if(index === 0){
            prevRef.current.style.display = 'none'
        }else{
            prevRef.current.style.display = 'block' 
        }
        if(index === data.length - 1){
            nextRef.current.style.display = 'none'
        }else{
            nextRef.current.style.display = 'block' 

        }

    }, [index])


    const newImg = () =>{
        const {image} = data[index]
        return image
    }



    const checkIndex = (index) => {
        if(index > data.length - 1){
            return 0
        }
        if(index < 0){
            return data.length - 1
        }
        return index
    }

    const handleImg = (image, index) => {
        setTempImg(image)
        setModal(true)
        setIndex(index)
    }



    const nextImg = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return checkIndex(newIndex)
        })
        setBtn(true)
    }

    const prevImg = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkIndex(newIndex)
        })
        setBtn(true)
    }


    return (
        <div className="home-gallery">
            <div className="home-gallery-heading grid wide">
                <h1>Gallery</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className="home-gallery-container">
                <div className="row no-gutters">
                    {items.map((item, index) => {
                        const { image } = item
                        return (
                            <div key={index} className="home-gallery-container-item col l-4 m-6 c-12">
                                <div className="home-gallery-container-item-beside">
                                    <img src={image} onClick={() => handleImg(image, index)} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={modal ? 'home-gallery-modal open' : 'home-gallery-modal'}>
                <img src={btn ? newImg() : tempImg} />
                <CgClose className="home-gallery-modal-close" onClick={() => setModal(false)} />
                <button ref={prevRef} className="home-gallery-modal-left home-gallery-modal-icon" onClick={() => prevImg()} >
                    <HiOutlineChevronLeft className="home-gallery-modal-left-icon" />
                </button>
                <button ref={nextRef} className="home-gallery-modal-right home-gallery-modal-icon" onClick={() => nextImg()} >
                    <HiOutlineChevronRight className="home-gallery-modal-right-icon" />
                </button>
            </div>
        </div>
    )
}

export default HomeGallery
