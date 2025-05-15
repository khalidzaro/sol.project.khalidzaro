import React from 'react'
import './Card.css'


const Card = ({ title, subtitle, logo, image }) => {  return (
    <div>
      <div className='card'>
            <div className="sliderText">
                 <img src={logo} alt=""  className='logo'/>
                 <div>
                <h1>{title}<span className='textBlack'>AI</span></h1>
                <p>{subtitle}</p>
                </div>
               
            </div>
            <div ><img src={image} alt="" className="sliderImg"/></div>
        </div>
    </div>
  )
}

export default Card
