import React from 'react'
import './Card.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
function Card() {
    return (
        <>
        <Navbar />
        <Link to={'/'}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate eaque veniam quibusdam ad, voluptatum odit natus praesentium porro enim repudiandae, hic vitae totam eos et facere atque repellendus quaerat numquam adipisci?</p></Link>
        </>
    )
}

export default Card
