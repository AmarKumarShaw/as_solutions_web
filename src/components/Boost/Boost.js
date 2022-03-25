import React from 'react';
import "./boost.css";
import Fade from "react-reveal/Fade";

const Boost = () => {
  return (
    <div className="boost">
        <div className="boost-section">
     <Fade left>
          <div className="boost-section-left">
              <img src="./images/rocket-man.png" alt="" />
          </div>
          </Fade>
          <Fade right>
          <div className="boost-section-right">
                <h1 className="boost-header">
                Boost your agencies <br /> by choosing Ninja Developers
                </h1>
                <p className='boost-subhead'>
                Create custom landing pages with Shades that convert <br /> more visitors than any website, no coding required.
                </p>
                <ul >
                  <li>
                    <div><img src="./images/tick.png" alt="" /></div>
                    <p>Unlimited design possibility</p>
                  </li>
                  
                  <li>
                    <div>
                    <img src="./images/tick.png" alt="" /></div>
                    <p>Completely responsive features</p>
                  </li>
                  
                  <li>
                    <img src="./images/tick.png" alt="" />
                    <p>Easy to customize plugins</p>
                  </li>
                </ul>

          </div>
    </Fade>
        </div>
    </div>
  )
}

export default Boost