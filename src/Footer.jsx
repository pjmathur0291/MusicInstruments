import React from "react"
import './App.css'
import { Link } from 'react-router-dom'
import footerLogo from './assets/logo_prev_ui.png'
const Footer = () => {
    return (
        <>
            <footer>
                <leftSection>
                    <div className="footerLogo">
                        <img src={footerLogo} alt="" /> <span className="footerLogoName">Facebook</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi deserunt, dignissimos, nemo dicta ex qui velit voluptatum neque nulla assumenda nesciunt alias eveniet sint distinctio? Molestiae aperiam ea quisquam mollitia!
                        </p>
                    </div>
                </leftSection>
                <middleSection>
                    <h4>More</h4>
                    <ul>
                        <Link to={'/'}><li>Home</li></Link>
                        <Link to={'/About'}><li>About</li></Link>
                        <Link to={'/AllProducts'}><li>All Products</li></Link>
                        <Link to={'/Login'}><li>Login</li></Link>
                    </ul>
                </middleSection>
                <extraSection>
                    <h4>About</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium molestiae repudiandae beatae quis ducimus.<u className="mainCenterContent">Lorem ipsum</u> dolor sit amet consectetur adipisicing elit. Laudantium molestiae repudiandae beatae quis ducimus.
                    </p>
                </extraSection>
                <rightSection>
                    <h4>Know Us</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium molestiae repudiandae beatae quis ducimus.<u className="mainCenterContent">Lorem ipsum</u> dolor sit amet consectetur adipisicing elit. Laudantium molestiae repudiandae beatae quis ducimus.
                    </p>
                </rightSection>
                <div className="clear"></div>
            </footer>
        </>
    )
};

export default Footer;
