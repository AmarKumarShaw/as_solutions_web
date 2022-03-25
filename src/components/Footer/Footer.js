import React from 'react'
import "./footer.css";
import Fade from "react-reveal/Fade";


const Footer = () => {
  return (
    <Fade right>
    <div className='footer'>
      <div className="pre-footer">
        <div className="pre-footer-left">
          <h1>Hire the world’s best developers and designers around !</h1>
        </div>
        <div className="pre-footer-center">
          <img src="./images/arrow.png" alt="" />
        </div>
        <div className="pre-footer-right">
            <button className='pre-footer-button'>
            <span>HIRE DEVELOPERS</span>
            </button>
        </div>
      </div>
    </div>
    </Fade>
  )
}

export default Footer