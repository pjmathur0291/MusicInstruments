import React from "react"
import './App.css'
import { Link } from 'react-router-dom'
import Navbar from "./Navbar"
import Footer from "./Footer"
const Login = () => {
  return (
    <div>
      <Navbar />

      <div className="bannerHero heroLogin">
        <div className="bannerHeroCopy loginHeroCopyDiv">
          <h1 className="loginHeading">
            Let's Login
          </h1>
          <div className="loginBox">
            <form action="#" method="post">
              <input type="text" name="userName" className="formPost" placeholder="Username" required />
              <input type="password" name="password" className="formPost" placeholder="Password" required />
              <Link to={'/Display'}><button className="loginButton">Login</button></Link>
              <div className="signUp">Click here for <Link to={'/Signup'}><span>Signup</span></Link></div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Login;