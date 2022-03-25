import React from 'react'
import "./tutorial.css"
import Fade from "react-reveal/Fade";

const Tutorial = () => {
  return (
      <Fade left>
      <div className='tutorial'>
            <p className="tutorial-heading review-head">
                Quality features
            </p>
            <h1 className="tutorial-subheading review-subhead">
                Service that people love most
            </h1>
            <div className="tutorial-section">
                <div className="tutorial-container">
                    <div className="tutorial-container-img">
                        <img className='tut-contain' src="./images/img-1.png" alt="" />
                        <h4>How to work with prototype design with adobe xd featuring tools</h4>
                    </div>
                </div>
                <div className="tutorial-container">
                    <div className="tutorial-container-img">
                        <img className='tut-contain' src="./images/img-2.png" alt="" />
                        <h4>How to work with prototype design with adobe xd featuring tools</h4>
                    </div>
                </div>
                <div className="tutorial-container">
                    <div className="tutorial-container-img">
                        <img className='tut-contain' src="./images/img-3.png" alt="" />
                        <h4>How to work with prototype design with adobe xd featuring tools</h4>
                    </div>
                </div>
            </div>
    </div>
</Fade>
  )
}

export default Tutorial