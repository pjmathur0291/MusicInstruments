import React, { useState, useEffect } from "react"
import Navbar from "./Navbar";
import './Slider.css'
import arijit from './assets/arjithSingh.jpg'
import honey from './assets/honeySingh.jpg'
import shaan from './assets/Shaan.jpeg'
import shankar from './assets/shankarMahadevan.jpeg'

const ImageSlider = () => {
    const images = [arijit, honey, shaan, shankar]

    const [Index, setIndex] = useState(0)
    const nextImage = () => {
        setIndex((Index + 1) % images.length)
    }
    const prevImage = () => {
        setIndex((Index - 1 + images.length) % images.length)
    }

    useEffect(() => {
        const Interval = setInterval(() => {
            nextImage()
        }, 3000)
        return () => clearInterval(Interval)
    }, [Index])

    return (
        <div>
            <Navbar />

            <div className="sliderMain">
                <img src={images[Index]} alt="Slider" className="slide-image" />
            </div>
            <div className="buttons">
                <button onClick={prevImage}>Previous</button>
                <button onClick={nextImage}>Next</button>
            </div>
        </div>
    )
};

export default ImageSlider;
