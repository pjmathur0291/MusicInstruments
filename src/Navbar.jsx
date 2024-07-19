import React from "react"
import './App.css'
import { Link } from 'react-router-dom'
import logo from './assets/logo_prev_ui.png'

const Navbar = () => {
    return (
        <div>
            <div className="navMain">
                <div className="navLeft">
                    <Link to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navRight">
                    <ul>
                        <Link to={'/'}><li>Home</li></Link>
                        <Link to={'/About'}><li>About</li></Link>
                        <Link to={'/AllProducts'}><li>All Products</li></Link>
                        <Link to={'/Accessories'}><li>Accessories</li></Link>
                        <Link to={'/Login'}><li>Login</li></Link>
                        <Link to={'/Cart'}><li>Cart</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
