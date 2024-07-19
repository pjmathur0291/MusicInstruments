import React, { useState } from "react"
import Navbar from "./Navbar";
import './Slider.css'
import arijit from './assets/arjithSingh.jpg'

const Slider = () => {
    const images = ['arjithSingh.jpg', 'honeySingh.jpg', 'Shaan.jpeg', 'shankarMahadevan.jpeg']

    const [currentIndex, setCurrentIndex] = useState(0)
    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % images.length)
    }
    const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length)
    }
    return (
        <div>
            <Navbar />

            <div className="sliderMain">
                <img src={images[currentIndex]} alt="Slider" className="slide-image" />
            </div>
            <button onClick={prevImage}>Previous</button>
            <button onClick={nextImage}>Next</button>
        </div>
    )
};

export default Slider;
