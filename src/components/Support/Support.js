import React from 'react';
import "./support.css";
import Fade from "react-reveal/Fade";

const Support = () => {
  return (
    <div className='support'>
        <Fade left>
          <div className="support-left">
              <h1 className="support-left-head">
              Free Customer Support <br />  to ensure what you like <br /> to expect
              </h1>
              <p className="support-left-subhead">
              We offer a risk-free trial period of up to two weeks. You will only have to pay if you are happy with the developer and wish to continue. If you are unsatisfied, we’ll refund payment or fix issues on our dime period customers.
              </p>
              <p className="support-left-subhead gray">If you are happy with the developer and wish to continue. If you are unsatisfied, we’ll refund payment or fix issues.</p>
          </div>
        </Fade>
        <Fade right>
          <div className="support-right">
            <img src="./images/support.png" alt="" />
          </div>
        </Fade>
    </div>
  )
}

export default Support