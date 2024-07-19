import React from "react"
import './App.css'
import Navbar from "./Navbar";
import Footer from "./Footer";
import logoArtist from './assets/images_prev_ui.png'
import { Link } from "react-router-dom";
const Display = ({ data }) => {


    return (
        <>
            <div className="extra">

                <Navbar />
                <div className="aristDiv">
                    {
                        data.map((i) => (
                            <div key={i.id} className="editImage" style={{ background: `url(${i.image})` }}>
                                <div className="aristDivBox">
                                    <img src={logoArtist} className="aristDivBoxImg" width="200px" height="200px" alt="" />
                                    <h3 className="artistName">{i.Name}</h3>
                                    <div className="readMore">
                                        <Link to={`/Moreinfo/${i.id}`}><button className="readMoreBTN">Click to get Songs</button></Link>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>

                        ))
                    }

                </div>

                <Footer />
            </div>
        </>
    )
};

export default Display;
