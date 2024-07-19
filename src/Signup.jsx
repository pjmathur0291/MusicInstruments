import React from "react"
import Navbar from "./Navbar";
import Footer from "./Footer";
import './App.css'
import { Link } from "react-router-dom";


const Signup = () => {
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
              <input type="text" name="firstName" className="formPost" placeholder="First Name" required />
              <input type="text" name="lastName" className="formPost" placeholder="Last Name" required />
              <input type="text" name="userName" className="formPost" placeholder="User Name" required />
              <select name="" className="formPost formPostMusic">
                <option value="Select Your Music Vibe">Select Your Music Vibe</option>
                <option value="Jazz">Jazz</option>
                <option value="Indie">Indie</option>
                <option value="Party">Party</option>
                <option value="Hip-Hop">Hip-Hop</option>
                <option value="Chill">Chill</option>
                <option value="K-Pop">K-Pop</option>
                <option value="Rock">Rock</option>
                <option value="Country-Side">Country Side</option>


              </select>
              <Link to={'/Display'}><button className="loginButton">Login</button></Link>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Signup;
