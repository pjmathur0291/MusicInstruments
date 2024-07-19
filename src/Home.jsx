import React from "react"
import "./App.css"
import { Link } from 'react-router-dom'
import logo from './assets/logo_prev_ui.png'
import background from './assets/background1.jpg'
import Navbar from "./Navbar"
import Footer from "./Footer"
function Home() {
    return (
        <>
            <Navbar />

            <div className="bannerHero">
                <div className="bannerHeroCopy">
                    <div className="bannerLeft">
                        <h1>
                            Let's Here some facebook Music.
                            Click On the button to Login
                        </h1>
                    </div>
                    <div className="bannerRight">
                        <Link to={'/Login'}><button>Login</button></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Home;
