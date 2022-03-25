import React from 'react'
import "./review.css"
import Fade from "react-reveal/Fade";

const Review = () => {
  return (
    <Fade bottom>
      <div className="review">
            <p className='review-head'>Customer Comments</p>
            <h2 className='review-subhead'>Customer Comments</h2>
              <h1 className="review-comment">They are doing amazing job with hundred percent customer <br /> satisfaction, Love their work and would <br /> like to work with them again</h1>
      </div>
    </Fade>
  )
}

export default Review