import React from 'react';
import "./landingpage.css";
import Fade from "react-reveal/Fade";

const LandingPage = () => {
  return (
   
    <div className="hero-section">
     <Fade top>
        <div className="hero-left">
          <h1>Great Software is <br /> built with Amazing <br /> Developers</h1>
          <p>We help build and manage a team of world-class developers to bring your vision to life</p>
          <button className="sponsor btn-purple">Let's Explore</button>
        </div>
        </Fade>
        <Fade bottom>
        <div className="hero-right">
          <img src="./images/hero-img.png" alt="" />
        </div>
        </Fade>
    </div>
  
  )
}

export default LandingPage