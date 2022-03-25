import React from 'react'
import "./features.css"
import Zoom from "react-reveal/Zoom";

const Features = () => {
  return (
    <Zoom>
    <div className='features'>
      <div className="feature-top">
        <div className="feature-tag">
              <p>Quality Features</p>
        </div>
        <div className="feature-headline">
              <h1>Meet exciting feature of app</h1>
        </div>
      </div>

      <div className="feature-section">
      <div className="feature-contianer">
            <div className="feature-img"><img src="./images/pen.png" alt="" /></div>
            <div className="feature-text">
              <h4>Unlimited Customization</h4>
              <p>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
            </div>
          </div>
          <div className="feature-contianer">
            <div className="feature-img">
            <img src="./images/geomet.png" alt="" />
            </div>
            <div className="feature-text">
              <h4>Vector shape & resizable</h4>
              <p>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
            </div>
          </div>

          <div className="feature-contianer">
            <div className="feature-img">
            <img src="./images/grid.png" alt="" />
            </div>
            <div className="feature-text">
              <h4>Editing freedom</h4>
              <p>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
            </div>
          </div>
          <div className="feature-contianer">
            <div className="feature-img">
            <img src="./images/award.png" alt="" />
            </div>
            <div className="feature-text">
              <h4>Best Award history</h4>
              <p> Get your blood tests delivered at home collect a sample from the your blood tests.</p>
            </div>
          </div>  
      </div>
    </div>
    </Zoom>
  )
}

export default Features