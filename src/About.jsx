import React from "react"
import './App.css'
import Navbar from "./Navbar";
import Footer from "./Footer";
import oldMan from './assets/john-warnock.svg'
import { Link } from "react-router-dom";

const About = ({ product }) => {
    const displayedProducts = product.slice(0, 4);
    return (
        <div>
            <Navbar />
            <div className="aboutMain">
                <div className="mainSectionCenter">
                    <div className="aboutTopLeft">
                        <div className="leftHeading">
                            <h1>
                                Change the world through personalized music experience
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ab nobis cum, maxime neque aliquid, cumque aut ducimus aspernatur esse sequi earum amet ratione reprehenderit blanditiis eum itaque autem optio.
                            </p>
                        </div>
                    </div>
                    <div className="aboutTopRight"></div>
                </div>
            </div>

            <div className="aboutStrip">
                <div className="stripperCenter">
                    <ul>
                        <li>Product And technology</li>
                        <li>Customer stories</li>
                        <li>Purpose and values</li>
                        <li>More Resources</li>
                    </ul>
                </div>
            </div>

            <div className="oldManDiv">
                <div className="oldManDivimg">
                    <img src={oldMan} width="145px" height="120px" alt="" />
                </div>
                <div className="oldManDivRight">
                    <h4>
                        Remembering our co-founder Dr. John Warnock.
                    </h4>
                    <button>Read More</button>
                </div>
            </div>


            <div className="posterDiv">
                <div className="posterDivCopy">
                    <div className="posterDivCenterContent">
                        <h2>
                            Vibe & Music
                        </h2>
                    </div>
                    <div className="posterDivCenterBottom">
                        <div className="posterDivCenterBottomLeft">
                            <h1>
                                Live the music
                            </h1>
                        </div>
                        <div className="posterDivCenterBottomLeft">
                            <h1>
                                Enjoy your life
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="aboutProducts">
                <div className="aboutProductsHeading">
                    <h1>Explore our products.</h1>
                </div>
                <div className="aboutProductsMain">
                    {
                        displayedProducts.map((i) => (
                            <div key={i.id} className="productBox">
                                <img src={i.productImage} width="100%" height="75%" alt="" />
                                <h4>{i.productName}</h4>
                                <Link to={`/DetailProduct/${i.productId}`}><button>More Details</button></Link>
                                
                            </div>
                        ))
                    }
                    <div className="clear">
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default About;
